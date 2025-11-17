import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma/client";
import { logger } from "../utils/logger";
import { z } from "zod";
import {
	deleteRequest,
	getRequest,
	reviveRequest,
	getAcceptedRequest,
	setAcceptedRequest,
	getCanceledRequest,
} from "../lib/requestStore";
import { io } from "../app";

// Ride progress status types
type RideProgress = "on_the_way" | "arrived" | "picked_up" | "completed";

export const rideValidator = z.object({
	id: z.uuid(),
	pickup_lat: z.number(),
	pickup_lng: z.number(),
	dropoff_lat: z.number(),
	dropoff_lng: z.number(),
	price: z.number(),
	customer_id: z.uuid(),
	driver_id: z.uuid(),
	// vehicle_id: z.uuid(),
	timestamp: z.string().or(z.date()),
	ride_status: z.enum(["ongoing", "completed", "canceled"]),
});

// POST /rides/:id/accept
// Note: vehicle_id is derived from the first vehicle owned by the authenticated driver
export async function acceptRide(req: Request, res: Response) {
	try {
		const driverId = res.locals.user?.id;
		const rideId = req.params.id;
		if (!driverId)
			return res.status(401).json({ error: "User not authenticated" });

		const rideReq = getRequest(rideId);
		if (!rideReq) {
			const wasAccepted = getAcceptedRequest(rideId);
			if (wasAccepted) {
				return res.status(409).json({ error: "Ride already accepted" });
			}
			const wasCanceled = getCanceledRequest(rideId);
			if (wasCanceled) {
				return res.status(409).json({ error: "Ride request was canceled" });
			}
			return res.status(409).json({
				error: "Ride request not found",
			});
		}

		// Fetch driver's vehicle (use the first one found)
		const vehicle = await prisma.vehicle.findFirst({
			where: { driver_id: driverId },
			select: { id: true },
		});

		if (!vehicle) {
			return res
				.status(400)
				.json({ error: "Driver has no registered vehicle" });
		}

		const parseResult = rideValidator.safeParse({
			id: rideId,
			pickup_lat: Number(rideReq.pickup.lat),
			pickup_lng: Number(rideReq.pickup.lng),
			dropoff_lat: Number(rideReq.dropoff.lat),
			dropoff_lng: Number(rideReq.dropoff.lng),
			price: Number(rideReq.fare),
			customer_id: rideReq.customer_id,
			driver_id: driverId,
			vehicle_id: vehicle.id,
			timestamp: new Date(),
			ride_status: "ongoing",
		});

		if (!parseResult.success) {
			return res.status(400).json({ error: parseResult.error.issues });
		}

		const deleted = deleteRequest(rideId);
		if (!deleted) {
			logger.error(
				`Failed to delete ride request from store after accepting ride: ${rideId}`
			);
			return res
				.status(409)
				.json({ error: "Ride already accepted or cancelled" });
		}

		setAcceptedRequest(rideId, rideReq);

		const insertedRide = await prisma.$executeRaw`INSERT INTO ride (
        id, pickup_location, destination, price, customer_id, driver_id, vehicle_id, timestamp, ride_status
        ) VALUES (
        ${rideId}::uuid,
        POINT(${rideReq.pickup.lng}, ${rideReq.pickup.lat}),
        POINT(${rideReq.dropoff.lng}, ${rideReq.dropoff.lat}),
        ${Number(rideReq.fare)},
        ${rideReq.customer_id}::uuid,
        ${driverId}::uuid,
		${vehicle.id}::uuid,
        NOW(),
        'ongoing'
        )`;

		if (!insertedRide) {
			reviveRequest(rideReq);
			logger.error(
				`Something went wrong!!!, Failed to insert ride into database: ${rideId}`
			);
			return res.status(500).json({ error: "Internal server error" });
		}

		logger.info(
			`Ride accepted: ${rideId} by driver ${driverId} with vehicle ${vehicle.id}`
		);

		// Emit socket event to notify customer
		io.emit(`ride:${rideId}:accepted`, {
			rideId,
			driverId,
			status: "ongoing",
			progress_status: "on_the_way",
		});

		io.emit("request:accepted", {
			id: rideId,
			driver_id: driverId,
		});

		return res
			.status(201)
			.json({ message: "Ride created successfully", rideId: rideId });
	} catch (error: any) {
		if (error.code === "23505" || error.message?.includes("duplicate key")) {
			logger.warn(`Ride already accepted: ${req.params.id}`);
			return res.status(409).json({ error: "Already taken" });
		}
		console.error("Error accepting ride:", error);
		logger.error("Error accepting ride:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
}

// GET /rides/:id - Get ride details
export async function getRide(req: Request, res: Response) {
	const rideId = req.params.id;
	const userId = res.locals.user?.id;

	if (!userId) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	try {
		const ride = await prisma.ride.findUnique({
			where: { id: rideId },
			include: {
				customer: {
					select: {
						id: true,
						user: {
							select: {
								fullname: true,
								email: true,
								phone_number: true,
								profile_pic: true,
							},
						},
					},
				},
				verified_driver: {
					select: {
						id: true,
						driver: {
							select: {
								user: {
									select: {
										fullname: true,
										email: true,
										phone_number: true,
										profile_pic: true,
									},
								},
							},
						},
					},
				},
				vehicle: {
					select: {
						id: true,
						registration: true,
						model: true,
						make: true,
						color: true,
					},
				},
			},
		});

		if (!ride) {
			return res.status(404).json({ error: "Ride not found" });
		}

		// Check if user is authorized to view this ride
		if (ride.customer_id !== userId && ride.driver_id !== userId) {
			return res.status(403).json({ error: "Forbidden" });
		}

		// Extract lat/lng from PostGIS points
		const locationData = await prisma.$queryRaw<
			Array<{
				pickup_lat: number;
				pickup_lng: number;
				dropoff_lat: number;
				dropoff_lng: number;
			}>
		>`
			SELECT 
				ST_Y(pickup_location::geometry) as pickup_lat,
				ST_X(pickup_location::geometry) as pickup_lng,
				ST_Y(destination::geometry) as dropoff_lat,
				ST_X(destination::geometry) as dropoff_lng
			FROM ride
			WHERE id = ${rideId}::uuid
		`;

		const rideWithLocations = {
			...ride,
			pickup_lat: locationData[0]?.pickup_lat || 0,
			pickup_lng: locationData[0]?.pickup_lng || 0,
			dropoff_lat: locationData[0]?.dropoff_lat || 0,
			dropoff_lng: locationData[0]?.dropoff_lng || 0,
		};

		return res.status(200).json(rideWithLocations);
	} catch (error: any) {
		logger.error("Error fetching ride:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
}

// PATCH /rides/:id/status - Update ride progress status
export async function updateRideStatus(req: Request, res: Response) {
	const rideId = req.params.id;
	const userId = res.locals.user?.id;
	const { progress_status } = req.body;

	if (!userId) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	// Validate progress status
	const validStatuses: RideProgress[] = [
		"on_the_way",
		"arrived",
		"picked_up",
		"completed",
	];
	if (!validStatuses.includes(progress_status)) {
		return res.status(400).json({ error: "Invalid progress status" });
	}

	try {
		const ride = await prisma.ride.findUnique({
			where: { id: rideId },
			select: {
				id: true,
				driver_id: true,
				customer_id: true,
				ride_status: true,
				ride_progress_status: true,
			},
		});

		if (!ride) {
			return res.status(404).json({ error: "Ride not found" });
		}

		// Only driver can update progress status
		if (ride.driver_id !== userId) {
			return res
				.status(403)
				.json({ error: "Only the driver can update ride progress" });
		}

		// Can't update canceled or completed rides
		if (ride.ride_status === "canceled" || ride.ride_status === "completed") {
			return res
				.status(400)
				.json({ error: `Cannot update ${ride.ride_status} ride` });
		}

		// Update the ride with new progress status
		const updateData: any = { ride_progress_status: progress_status };

		// If marking as completed, also update ride_status
		if (progress_status === "completed") {
			updateData.ride_status = "completed";
		}

		const updatedRide = await prisma.ride.update({
			where: { id: rideId },
			data: updateData,
			include: {
				customer: {
					select: {
						id: true,
						user: {
							select: {
								fullname: true,
								email: true,
							},
						},
					},
				},
				verified_driver: {
					select: {
						id: true,
						driver: {
							select: {
								user: {
									select: {
										fullname: true,
										email: true,
									},
								},
							},
						},
					},
				},
			},
		});

		logger.info(
			`Ride ${rideId} status updated to ${progress_status} by driver ${userId}`
		);

		// Emit socket event to notify customer
		io.emit(`ride:${rideId}:status_update`, {
			rideId,
			progress_status,
			ride_status: updatedRide.ride_status,
			timestamp: new Date(),
		});

		return res.status(200).json(updatedRide);
	} catch (error: any) {
		logger.error("Error updating ride status:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
}

//DELETE /rides/:id
export async function cancelRide(req: Request, res: Response) {
	const rideId = req.params.id;
	const userId = res.locals.user?.id;

	if (!userId) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	try {
		const result = await prisma.$transaction(
			async (tx) => {
				const ride = await tx.ride.findUnique({
					where: { id: rideId },
					include: {
						customer: {
							select: {
								id: true,
								user: {
									select: {
										fullname: true,
									},
								},
							},
						},
						verified_driver: {
							select: {
								id: true,
								driver: {
									select: {
										user: {
											select: {
												fullname: true,
											},
										},
									},
								},
							},
						},
					},
				});

				if (!ride) {
					throw new Error("Ride not found");
				}
				if (ride.ride_status === "canceled") {
					throw new Error("Ride is already cancelled");
				}
				if (ride.ride_status === "completed") {
					throw new Error("Completed rides cannot be cancelled");
				}
				if (ride.customer_id !== userId && ride.driver_id !== userId) {
					throw new Error("Forbidden");
				}

				const updatedRide = await tx.ride.update({
					where: { id: rideId },
					data: { ride_status: "canceled" },
				});

				return { ride, updatedRide };
			},
			{ isolationLevel: "RepeatableRead" }
		);

		logger.info(`Ride cancelled: ${rideId} by user ${userId}`);

		// Emit socket event to notify both driver and customer
		io.emit(`ride:${rideId}:canceled`, {
			rideId,
			canceledBy: userId,
			timestamp: new Date(),
		});

		return res.status(200).json({
			message: "Ride cancelled successfully",
			ride: result.updatedRide,
		});
	} catch (error: any) {
		if (error.message === "Ride not found") {
			return res.status(404).json({ error: "Ride not found" });
		}
		if (error.message === "Ride is already cancelled") {
			return res.status(400).json({ error: "Ride is already cancelled" });
		}
		if (error.message === "Completed rides cannot be cancelled") {
			return res
				.status(400)
				.json({ error: "Completed rides cannot be cancelled" });
		}
		if (error.message === "Forbidden") {
			return res.status(403).json({ error: "Forbidden" });
		}

		if (error.code === "P2034") {
			const ride = await prisma.ride.findUnique({
				where: { id: rideId },
			});

			if (ride?.ride_status == "completed") {
				return res
					.status(400)
					.json({ error: "Completed rides cannot be cancelled" });
			}
			if (ride?.ride_status == "canceled") {
				return res.status(400).json({ error: "Ride is already cancelled" });
			}
		}

		logger.error("Error cancelling ride:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
}

// GET /rides/me/active - Get driver's active rides
export async function myActiveRides(req: Request, res: Response) {
	const driverId = res.locals.user?.id;
	if (!driverId) {
		return res.status(401).json({ error: "User not authenticated" });
	}

	try {
		// Fetch ongoing rides where the driver is the current user
		const ongoingRides = await prisma.$queryRaw<
			Array<{
				id: string;
				customer_id: string;
				driver_id: string;
				vehicle_id: string;
				price: number;
				timestamp: Date;
				ride_status: string;
				ride_progress_status: string;
				pickup_lng: number;
				pickup_lat: number;
				dropoff_lng: number;
				dropoff_lat: number;
			}>
		>`
			SELECT 
				id, customer_id, driver_id, vehicle_id, price, timestamp, ride_status, ride_progress_status,
				ST_X(pickup_location::geometry) as pickup_lng,
				ST_Y(pickup_location::geometry) as pickup_lat,
				ST_X(destination::geometry) as dropoff_lng,
				ST_Y(destination::geometry) as dropoff_lat
			FROM ride
			WHERE driver_id = ${driverId}::uuid
			AND ride_status = 'ongoing'
		`;

		const formattedRides = ongoingRides.map((ride) => ({
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
			ride_status: ride.ride_status,
			ride_progress_status: ride.ride_progress_status,
			status: "ongoing" as const,
		}));

		return res.json(formattedRides);
	} catch (err) {
		logger.error("Error fetching driver's active rides", err);
		return res.status(500).json({ error: "Internal server error" });
	}
}

type RideStatusFilter = "ongoing" | "completed" | "canceled";

// GET /rides/me/history - Get ride history for authenticated user
export async function myRideHistory(req: Request, res: Response) {
	const userId = res.locals.user?.id;
	if (!userId) {
		return res.status(401).json({ error: "User not authenticated" });
	}

	const roleParam = (req.query.role as string | undefined)?.toLowerCase();
	const statusParamRaw = (req.query.status as string | undefined)
		?.split(",")
		.map((s) => s.trim().toLowerCase())
		.filter(Boolean);
	const limitParam = Number.parseInt(req.query.limit as string, 10);
	const limit = Number.isFinite(limitParam)
		? Math.min(Math.max(limitParam, 1), 100)
		: 50;

	const whereBase: Prisma.rideWhereInput =
		roleParam === "driver"
			? { driver_id: userId }
			: roleParam === "customer"
				? { customer_id: userId }
				: {
						OR: [{ driver_id: userId }, { customer_id: userId }],
					};

	const allowedStatuses: RideStatusFilter[] = [
		"ongoing",
		"completed",
		"canceled",
	];
	const filteredStatuses = statusParamRaw?.filter(
		(status): status is RideStatusFilter =>
			allowedStatuses.includes(status as RideStatusFilter)
	);

	const where: Prisma.rideWhereInput = { ...whereBase };
	if (filteredStatuses && filteredStatuses.length) {
		where.AND = [
			...(where.AND ?? []),
			{ ride_status: { in: filteredStatuses as RideStatusFilter[] } },
		];
	}

	try {
		const rides = await prisma.ride.findMany({
			where,
			orderBy: { timestamp: "desc" },
			take: limit,
			include: {
				customer: {
					select: {
						id: true,
						user: {
							select: {
								fullname: true,
								profile_pic: true,
							},
						},
					},
				},
				verified_driver: {
					select: {
						id: true,
						driver: {
							select: {
								user: {
									select: {
										fullname: true,
										profile_pic: true,
									},
								},
							},
						},
					},
				},
				vehicle: {
					select: {
						id: true,
						model: true,
						make: true,
						color: true,
						registration: true,
						model_type: {
							select: { type: true },
						},
					},
				},
			},
		});

		let locationRows: Array<{
			id: string;
			pickup_lat: number;
			pickup_lng: number;
			dropoff_lat: number;
			dropoff_lng: number;
		}> = [];
		if (rides.length) {
			const rideIdList = Prisma.join(
				rides.map((ride) => Prisma.sql`${ride.id}::uuid`)
			);
			locationRows = await prisma.$queryRaw<
				Array<{
					id: string;
					pickup_lat: number;
					pickup_lng: number;
					dropoff_lat: number;
					dropoff_lng: number;
				}>
			>(Prisma.sql`
				SELECT 
					id,
					ST_Y(pickup_location::geometry) as pickup_lat,
					ST_X(pickup_location::geometry) as pickup_lng,
					ST_Y(destination::geometry) as dropoff_lat,
					ST_X(destination::geometry) as dropoff_lng
				FROM ride
				WHERE id IN (${rideIdList})
			`);
		}

		const locationMap = new Map(locationRows.map((row) => [row.id, row]));
		const payload = rides.map((ride) => {
			const coords = locationMap.get(ride.id);
			return {
				id: ride.id,
				fare: ride.price,
				requested_at: ride.timestamp,
				ended_at: ride.ended_at,
				end_reason: ride.end_reason,
				ride_status: ride.ride_status,
				ride_progress_status: ride.ride_progress_status,
				rating: ride.rating,
				pickup_lat: coords?.pickup_lat ?? null,
				pickup_lng: coords?.pickup_lng ?? null,
				dropoff_lat: coords?.dropoff_lat ?? null,
				dropoff_lng: coords?.dropoff_lng ?? null,
				driver: ride.verified_driver
					? {
							id: ride.verified_driver.id,
							name: ride.verified_driver.driver?.user.fullname ?? null,
							avatar: ride.verified_driver.driver?.user.profile_pic ?? null,
						}
					: null,
				customer: ride.customer
					? {
							id: ride.customer.id,
							name: ride.customer.user.fullname,
							avatar: ride.customer.user.profile_pic,
						}
					: null,
				vehicle: ride.vehicle
					? {
							id: ride.vehicle.id,
							model: ride.vehicle.model,
							make: ride.vehicle.make,
							color: ride.vehicle.color,
							registration: ride.vehicle.registration,
							type: ride.vehicle.model_type?.type ?? null,
						}
					: null,
			};
		});

		return res.json(payload);
	} catch (error) {
		logger.error("Error fetching ride history", error);
		return res.status(500).json({ error: "Internal server error" });
	}
}
