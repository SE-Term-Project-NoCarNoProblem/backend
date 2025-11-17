import { Request, Response } from "express";
import { z, ZodError } from "zod";
import {
	getCanceledRequest,
	getIdToCustomerMap,
	setCanceledRequest,
	createRequest as storeCreate,
	deleteRequest as storeDelete,
	nearbyRequests as storeNearby,
	listRequestsByCustomer,
} from "../lib/requestStore";
// import { readIdem, rememberIdem } from '../lib/idem';
import { logger } from "../utils/logger";

// add distance calc function from utils
import { haversineM } from "../utils/geo";

const CreateSchema = z.object({
	service: z.string().min(1),
	note_to_driver: z.string().optional().nullable(),
	pickup_lng: z.number(),
	pickup_lat: z.number(), // remove fare and distance field
	dropoff_lng: z.number(),
	dropoff_lat: z.number(),
});

function calculateFare(distanceM: number): number {
	const distanceKm = distanceM / 1000;
	let fare = 0;

	if (distanceKm <= 1) {
		return 35; // base
	}

	fare = 35; // first km
	let remaining = distanceKm - 1;

	const tiers = [
		{ limit: 9, rate: 6.5 }, // 1–10 km
		{ limit: 10, rate: 7.0 }, // 10–20 km
		{ limit: 20, rate: 8.0 }, // 20–40 km
		{ limit: 20, rate: 8.5 }, // 40–60 km
		{ limit: 20, rate: 9.0 }, // 60–80 km
		{ limit: Infinity, rate: 10.5 }, // 80+ km
	];

	for (const tier of tiers) {
		if (remaining <= 0) break;

		const take = Math.min(remaining, tier.limit);
		fare += take * tier.rate;
		remaining -= take;
	}

	return Math.round(fare);
} // calculate based on real thai taxi rate

export function calculateFareEndpoint(req: Request, res: Response) {
	const distanceM = Math.round(
		haversineM(
			Number(req.query.pickup_lat),
			Number(req.query.pickup_lng),
			Number(req.query.dropoff_lat),
			Number(req.query.dropoff_lng)
		)
	);
	if (Number.isNaN(distanceM) || distanceM < 0) {
		return res.status(400).json({ error: "invalid_distance" });
	}

	// vehicle multiplier
	const type = String(req.query.service || "car");
	const multipliers: Record<string, number> = {
		motorcycle: 0.75,
		car: 1.0,
		van: 1.35,
	};
	const multiplier = multipliers[type] ?? 1.0; // default = car

	const fare = calculateFare(distanceM) * multiplier;

	return res.json({
		distance_m: distanceM,
		fare_baht: fare,
	});
}

export async function createRequest(req: Request, res: Response) {
	const customer_id = res.locals.user?.id;
	if (!customer_id)
		return res.status(401).json({ error: "User not authenticated" });

	try {
		const b = CreateSchema.parse(req.body);

		// calculated distance in meter
		const distanceM = Math.round(
			haversineM(b.pickup_lat, b.pickup_lng, b.dropoff_lat, b.dropoff_lng)
		);

		// calculted fare in baht
		const fare = calculateFare(distanceM);

		const r = storeCreate({
			customer_id: customer_id,
			service: b.service,
			note_to_driver: b.note_to_driver ?? null,
			fare, // added (based on distance)
			distance_m: distanceM, // added (based on input lat/lng)
			pickup_lng: b.pickup_lng,
			pickup_lat: b.pickup_lat,
			dropoff_lng: b.dropoff_lng,
			dropoff_lat: b.dropoff_lat,
		});

		// Emit socket event to notify all drivers about new ride request
		const { io } = await import("../app");
		io.emit("request:created", {
			id: r.id,
			customer_id: r.customer_id,
			service: r.service,
			fare: r.fare,
			distance_m: r.distance_m,
			requested_at: r.requested_at,
			pickup_lng: r.pickup.lng,
			pickup_lat: r.pickup.lat,
			dropoff_lng: r.dropoff.lng,
			dropoff_lat: r.dropoff.lat,
		});

		return res.status(201).json(r);
	} catch (err: unknown) {
		if (err instanceof ZodError) {
			return res.status(400).json({
				error: "validation_error",
				issues: err.issues,
			});
		}
		console.error(err);
		return res.status(500).json({ error: "server_error" });
	}
}

export async function deleteRequest(req: Request, res: Response) {
	const requesterId = res.locals.user?.id;
	if (!requesterId)
		return res.status(401).json({ error: "User not authenticated" });

	const rideId = req.params.id;
	const customerId = getIdToCustomerMap().get(rideId);

	if (requesterId !== customerId) {
		return res
			.status(403)
			.json({ error: "Can only delete a user's own ride request." });
	}

	const ok = storeDelete(rideId);
	if (!ok) return res.status(404).json({ error: "not_found" });

	const { io } = await import("../app");
	io.emit("request:canceled", {
		id: rideId,
		customer_id: customerId,
	});

	return res.status(204).end();
}

export async function nearbyRequests(req: Request, res: Response) {
	// auth check just to prevent spam
	const userId = res.locals.user?.id;
	if (!userId) return res.status(401).json({ error: "User not authenticated" });

	const lat = Number(req.query.lat);
	const lng = Number(req.query.lng);
	const radius = Number(req.query.radius_m || 3000);
	if (Number.isNaN(lat) || Number.isNaN(lng))
		return res.status(400).json({ error: "invalid_coordinates" });
	return res.json(storeNearby(lat, lng, radius));
}

// GET /requests/me/active
export async function myActiveRequests(req: Request, res: Response) {
	const customerId = res.locals.user?.id;
	if (!customerId)
		return res.status(401).json({ error: "User not authenticated" });
	try {
		// Fetch pending requests from cache (waiting for driver to accept)
		const pendingRequests = listRequestsByCustomer(customerId).map((r) => ({
			id: r.id,
			customer_id: r.customer_id,
			service: r.service,
			note_to_driver: r.note_to_driver ?? null,
			fare: r.fare ?? null,
			distance_m: r.distance_m ?? null,
			requested_at: r.requested_at,
			pickup_lng: r.pickup.lng,
			pickup_lat: r.pickup.lat,
			dropoff_lng: r.dropoff.lng,
			dropoff_lat: r.dropoff.lat,
			status: "pending" as const,
		}));

		// Fetch ongoing rides from database
		const { prisma } = await import("../lib/prisma");
		const ongoingRides = await prisma.$queryRaw<
			Array<{
				id: string;
				customer_id: string;
				driver_id: string;
				vehicle_id: string;
				price: number;
				timestamp: Date;
				ride_status: string;
				pickup_lng: number;
				pickup_lat: number;
				dropoff_lng: number;
				dropoff_lat: number;
			}>
		>`
			SELECT 
				id, customer_id, driver_id, vehicle_id, price, timestamp, ride_status,
				ST_X(pickup_location::geometry) as pickup_lng,
				ST_Y(pickup_location::geometry) as pickup_lat,
				ST_X(destination::geometry) as dropoff_lng,
				ST_Y(destination::geometry) as dropoff_lat
			FROM ride
			WHERE customer_id = ${customerId}::uuid
			AND ride_status = 'ongoing'
		`;

		const ongoingRidesFormatted = ongoingRides.map((ride) => ({
			id: ride.id,
			customer_id: ride.customer_id,
			driver_id: ride.driver_id,
			vehicle_id: ride.vehicle_id,
			fare: ride.price,
			timestamp: ride.timestamp,
			pickup_lng: ride.pickup_lng,
			pickup_lat: ride.pickup_lat,
			dropoff_lng: ride.dropoff_lng,
			dropoff_lat: ride.dropoff_lat,
			status: "ongoing" as const,
		}));

		// Combine both pending and ongoing
		const allActiveRequests = [...pendingRequests, ...ongoingRidesFormatted];

		return res.json(allActiveRequests);
	} catch (err) {
		logger.error("Error fetching my active requests", err);
		return res.status(500).json({ error: "server_error" });
	}
}

//DELETE /request/cancel/:id
export async function cancelRequest(req: Request, res: Response) {
	const customerId = res.locals.user?.id;
	if (!customerId)
		return res.status(401).json({ error: "User not authenticated" });

	const rideId = req.params.id;
	if (!rideId) {
		return res.status(400).json({ error: "Ride ID is required" });
	}

	const wasCanceled = getCanceledRequest(rideId);
	if (wasCanceled) {
		return res
			.status(200)
			.json({ message: "Ride request already canceled", rideId });
	}

	try {
		//CancelPending
		// check if the ride request exists and belongs to the customer
		const idToCustomer = getIdToCustomerMap();
		if (!idToCustomer.has(rideId)) {
			return res.status(404).json({ error: "Ride request not found" });
		}
		if (idToCustomer.get(rideId) !== customerId) {
			return res
				.status(403)
				.json({ error: "Can only cancel a user's own ride request." });
		}
		const ok = storeDelete(rideId);
		if (!ok)
			return res.status(404).json({ error: "Failed to cancel ride request" });
		logger.info(`Ride request cancelled: ${rideId} by customer ${customerId}`);
		// remember that this request ID has been canceled
		setCanceledRequest(rideId, { rideId, canceledAt: Date.now(), customerId });

		const { io } = await import("../app");
		io.emit("request:canceled", {
			id: rideId,
			customer_id: customerId,
		});

		return res
			.status(200)
			.json({ message: "Ride request canceled successfully", rideId });
	} catch (error) {
		console.error("Error cancelling ride request:", error);
		logger.error("Error cancelling ride request:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
}
