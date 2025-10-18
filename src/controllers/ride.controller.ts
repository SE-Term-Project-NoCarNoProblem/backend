import {Request, Response} from 'express';
import {prisma} from '../lib/prisma';
import {deleteRequest, getRequest, getIdToCustomerMap } from '../lib/requestStore';
import { logger } from '../utils/logger';
import { z } from 'zod';
import { Prisma } from '@prisma/client';
import { getAcceptedRequest, setAcceptedRequest, getCanceledRequest} from '../lib/requestStore';

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
  ride_status: z.enum(['ongoing', 'completed', 'cancelled']),
});

//POST /rides/:id/accept
//body: { vehicle_id: string }
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
			  return res
          .status(409)
          .json({ error: "Ride already accepted"});
      }
      const wasCanceled = getCanceledRequest(rideId);
      if (wasCanceled) {
        return res
          .status(409)
          .json({ error: "Ride request was canceled"});
      }
			return res
				.status(409)
				.json({
					error: "Ride request not found",
				});
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
			vehicle_id: req.body.vehicle_id,
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

		const insertedRide = await prisma.$executeRaw`INSERT INTO ride (
        id, pickup_location, destination, price, customer_id, driver_id, vehicle_id, timestamp, ride_status
        ) VALUES (
        ${rideId}::uuid,
        POINT(${rideReq.pickup.lng}, ${rideReq.pickup.lat}),
        POINT(${rideReq.dropoff.lng}, ${rideReq.dropoff.lat}),
        ${Number(rideReq.fare)},
        ${rideReq.customer_id}::uuid,
        ${driverId}::uuid,
        ${req.body.vehicle_id}::uuid,
        NOW(),
        'ongoing'
        )`;

		if (!insertedRide) {
			logger.error(
				`Something went wrong!!!, Failed to insert ride into database: ${rideId}`
			);
			return res.status(500).json({ error: "Internal server error" });
		}

		logger.info(`Ride accepted: ${rideId} by driver ${req.body.driver_id}`);
		setAcceptedRequest(rideId, {rideId, acceptedAt: Date.now(), driverId});
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
