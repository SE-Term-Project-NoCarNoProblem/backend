import {Request, Response} from 'express';
import {prisma} from '../lib/prisma';
import {deleteRequest} from '../lib/requestStore';
import { logger } from '../utils/logger';
import { rideValidator } from '../lib/rideValidator';
import { uuid } from 'zod';


export async function acceptRide(req: Request, res: Response) {
    try {
        const deleted = deleteRequest(req.body.ride_id);
        if (!deleted) {
            return res.status(404).json({error: 'Ride request not found'});
        }

        const parseResult = rideValidator.safeParse({
            id: req.body.ride_id,
            pickup_lat: Number(req.body.pickup_lat),
            pickup_lng: Number(req.body.pickup_lng),
            dropoff_lat: Number(req.body.dropoff_lat),
            dropoff_lng: Number(req.body.dropoff_lng),
            price: Number(req.body.price),
            customer_id: req.body.customer_id,
            driver_id: req.body.driver_id,
            vehicle_id: req.body.vehicle_id,
            timestamp: req.body.timestamp,
            ride_status: 'ongoing',
        });
        if (!parseResult.success) {
            return res.status(400).json({ error: parseResult.error.issues });
        }
        

        await prisma.$queryRaw`INSERT INTO ride (
            id, pickup_location, destination, price, customer_id, driver_id, vehicle_id, timestamp, ride_status
        ) VALUES (
            ${req.body.ride_id}::uuid,
            POINT(${req.body.pickup_lng}, ${req.body.pickup_lat}),
            POINT(${req.body.dropoff_lng}, ${req.body.dropoff_lat}),
            ${Number(req.body.price)},
            ${req.body.customer_id}::uuid,
            ${req.body.driver_id}::uuid,
            ${req.body.vehicle_id}::uuid,
            ${req.body.timestamp}::timestamptz,
            'ongoing'
        )`;



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

        const result = await prisma.ride.delete({
            where: { id: rideId },
        });
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