<<<<<<< HEAD
import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { logger } from "../utils/logger";
import { z } from "zod";
=======
import {Request, Response} from 'express';
import {prisma} from '../lib/prisma';
import {deleteRequest, getRequest, getIdToCustomerMap } from '../lib/requestStore';
import { logger } from '../utils/logger';
import { z } from 'zod';
>>>>>>> parent of 236ad42 (feat:implement cancel ride request)

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
				const ride = await tx.ride.findUnique({
					where: { id: rideId },
				});

<<<<<<< HEAD
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
=======
export async function acceptRide(req: Request, res: Response) {
    try {

        const driverId = res.locals.user?.id;
        if (!driverId) return res.status(401).json({ error: "User not authenticated" });
        
        const parseResult = rideValidator.safeParse({
            id: req.body.ride_id,
            pickup_lat: Number(req.body.pickup_lat),
            pickup_lng: Number(req.body.pickup_lng),
            dropoff_lat: Number(req.body.dropoff_lat),
            dropoff_lng: Number(req.body.dropoff_lng),
            price: Number(req.body.price),
            customer_id: req.body.customer_id,
            driver_id: driverId,
            vehicle_id: req.body.vehicle_id,
            timestamp: req.body.timestamp,
            ride_status: 'ongoing',
        });

        if (!parseResult.success) {
            return res.status(400).json({ error: parseResult.error.issues });
        }
        const request  = getRequest(req.body.ride_id);

        if (!request) {
            return res.status(404).json({error: 'Ride request not found'});
        }
        
        const idToCustomer = getIdToCustomerMap();
        if (idToCustomer.get(req.body.ride_id) !== req.body.customer_id) {
            return res.status(400).json({error: 'Customer ID does not match the ride request'});
        }

        const insertedRide = await prisma.$queryRaw`INSERT INTO ride (
        id, pickup_location, destination, price, customer_id, driver_id, vehicle_id, timestamp, ride_status
        ) VALUES (
        ${req.body.ride_id}::uuid,
        POINT(${req.body.pickup_lng}, ${req.body.pickup_lat}),
        POINT(${req.body.dropoff_lng}, ${req.body.dropoff_lat}),
        ${Number(req.body.price)},
        ${req.body.customer_id}::uuid,
        ${driverId}::uuid,
        ${req.body.vehicle_id}::uuid,
        ${req.body.timestamp}::timestamptz,
        'ongoing'
        )`;

        const deleted = deleteRequest(req.body.ride_id);
        if (!deleted) {
            await prisma.ride.delete({
            where: { id: req.body.ride_id }
            });
            logger.error(`Failed to delete ride request from store after accepting ride: ${req.body.ride_id}`);
            return res.status(404).json({error: 'Ride request not found'});
        }

    logger.info(`Ride accepted: ${req.body.ride_id} by driver ${req.body.driver_id}`);
    return res.status(201).json({ message: 'Ride created successfully', rideId: req.body.ride_id });

    } catch (error) {
        console.error('Error accepting ride:', error);
        logger.error('Error accepting ride:', error);
        return res.status(500).json({error: 'Internal server error'});
    }
}


export async function cancelRide(req: Request, res: Response) {
    try {
        const rideId = req.params.id;
        if (!rideId) {
            return res.status(400).json({ error: 'Ride ID is required' });
        }
        const driverId = res.locals.user?.id;
        if (!driverId) return res.status(401).json({ error: "User not authenticated" });

        //check if the ride exists and belongs to the driver
        const ride = await prisma.ride.findUnique({
            where: { id: rideId },
        });
        if (!ride) {
            return res.status(404).json({ error: 'Ride not found' });
        }
        if (ride.driver_id !== driverId) {
            return res.status(403).json({ error: `DriverId = ${driverId} is not authorized to cancel this ride` });
        }

        const result = await prisma.ride.update({
            where: { id: rideId },
            data: { ride_status: 'canceled' },
        })

        if (!result) {
            return res.status(404).json({ error: 'Ride not found' });
        }

        logger.info(`Ride cancelled: ${rideId}`);
        return res.status(200).json({ message: 'Ride cancelled successfully' });

    } catch (error) {
        console.error('Error cancelling ride:', error);
        logger.error('Error cancelling ride:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
>>>>>>> parent of 236ad42 (feat:implement cancel ride request)
