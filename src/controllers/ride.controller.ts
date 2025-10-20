import {Request, Response} from 'express';
import {prisma} from '../lib/prisma';
import {deleteRequest, getRequest, getIdToCustomerMap } from '../lib/requestStore';
import { logger } from '../utils/logger';
import { z } from 'zod';

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

    } catch (error:any) {
        if (error.code === '23505' || error.message?.includes('duplicate key')){
            logger.warn(`Ride already accepted: ${req.body.ride_id}`);
            return res.status(409).json({error: 'Already taken'});
        }
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