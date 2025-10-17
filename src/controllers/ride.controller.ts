import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { logger } from "../utils/logger";
import { z } from "zod";

export const rideValidator = z.object({
	id: z.uuid(),
	pickup_lat: z.number(),
	pickup_lng: z.number(),
	dropoff_lat: z.number(),
	dropoff_lng: z.number(),
	price: z.number(),
	customer_id: z.uuid(),
	driver_id: z.uuid(),
	vehicle_id: z.uuid(),
	timestamp: z.string().or(z.date()),
	ride_status: z.enum(["ongoing", "completed", "canceled"]),
});

//DELETE /rides/:id
export async function cancelRide(req: Request, res: Response) {
	const rideId = req.params.id;
	const userId = res.locals.user?.id;

	if (!userId) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	try {
		await prisma.$transaction(
			async (tx) => {
				const ride = await prisma.ride.findUnique({
					where: { id: rideId },
				});

				if (!ride) {
					return res.status(404).json({ error: "Ride not found" });
				}
				if (ride.ride_status === "canceled") {
					return res.status(400).json({ error: "Ride is already cancelled" });
				}
				if (ride.ride_status === "completed") {
					return res
						.status(400)
						.json({ error: "Completed rides cannot be cancelled" });
				}
				if (ride.customer_id !== userId && ride.driver_id !== userId) {
					return res.status(403).json({ error: "Forbidden" });
				}
				const status = await tx.ride.update({
					where: { id: rideId },
					data: { ride_status: "canceled" },
				});
			},
			{ isolationLevel: "RepeatableRead" }
		);

		logger.info(`Ride cancelled: ${rideId} by user ${userId}`);
		return res.status(200).json({ message: "Ride cancelled successfully" });
	} catch (error) {
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
