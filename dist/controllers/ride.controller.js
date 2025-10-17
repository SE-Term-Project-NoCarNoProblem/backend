"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rideValidator = void 0;
exports.acceptRide = acceptRide;
exports.cancelRide = cancelRide;
const prisma_1 = require("../lib/prisma");
const requestStore_1 = require("../lib/requestStore");
const logger_1 = require("../utils/logger");
const zod_1 = require("zod");
exports.rideValidator = zod_1.z.object({
    id: zod_1.z.uuid(),
    pickup_lat: zod_1.z.number(),
    pickup_lng: zod_1.z.number(),
    dropoff_lat: zod_1.z.number(),
    dropoff_lng: zod_1.z.number(),
    price: zod_1.z.number(),
    customer_id: zod_1.z.uuid(),
    driver_id: zod_1.z.uuid(),
    vehicle_id: zod_1.z.uuid(),
    timestamp: zod_1.z.string().or(zod_1.z.date()),
    ride_status: zod_1.z.enum(['ongoing', 'completed', 'cancelled']),
});
async function acceptRide(req, res) {
    try {
        const driverId = res.locals.user?.id;
        if (!driverId)
            return res.status(401).json({ error: "User not authenticated" });
        const parseResult = exports.rideValidator.safeParse({
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
        const request = (0, requestStore_1.getRequest)(req.body.ride_id);
        if (!request) {
            return res.status(404).json({ error: 'Ride request not found' });
        }
        const idToCustomer = (0, requestStore_1.getIdToCustomerMap)();
        if (idToCustomer.get(req.body.ride_id) !== req.body.customer_id) {
            return res.status(400).json({ error: 'Customer ID does not match the ride request' });
        }
        const insertedRide = await prisma_1.prisma.$queryRaw `INSERT INTO ride (
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
        const deleted = (0, requestStore_1.deleteRequest)(req.body.ride_id);
        if (!deleted) {
            await prisma_1.prisma.ride.delete({
                where: { id: req.body.ride_id }
            });
            logger_1.logger.error(`Failed to delete ride request from store after accepting ride: ${req.body.ride_id}`);
            return res.status(404).json({ error: 'Ride request not found' });
        }
        logger_1.logger.info(`Ride accepted: ${req.body.ride_id} by driver ${req.body.driver_id}`);
        return res.status(201).json({ message: 'Ride created successfully', rideId: req.body.ride_id });
    }
    catch (error) {
        console.error('Error accepting ride:', error);
        logger_1.logger.error('Error accepting ride:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
async function cancelRide(req, res) {
    try {
        const rideId = req.params.id;
        if (!rideId) {
            return res.status(400).json({ error: 'Ride ID is required' });
        }
        const driverId = res.locals.user?.id;
        if (!driverId)
            return res.status(401).json({ error: "User not authenticated" });
        //check if the ride exists and belongs to the driver
        const ride = await prisma_1.prisma.ride.findUnique({
            where: { id: rideId },
        });
        if (!ride) {
            return res.status(404).json({ error: 'Ride not found' });
        }
        if (ride.driver_id !== driverId) {
            return res.status(403).json({ error: `DriverId = ${driverId} is not authorized to cancel this ride` });
        }
        const result = await prisma_1.prisma.ride.update({
            where: { id: rideId },
            data: { ride_status: 'canceled' },
        });
        if (!result) {
            return res.status(404).json({ error: 'Ride not found' });
        }
        logger_1.logger.info(`Ride cancelled: ${rideId}`);
        return res.status(200).json({ message: 'Ride cancelled successfully' });
    }
    catch (error) {
        console.error('Error cancelling ride:', error);
        logger_1.logger.error('Error cancelling ride:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
