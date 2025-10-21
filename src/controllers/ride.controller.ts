import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { logger } from "../utils/logger";
import { z } from "zod";
import { Prisma } from "@prisma/client";
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

		return res.status(200).json(ride);
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
