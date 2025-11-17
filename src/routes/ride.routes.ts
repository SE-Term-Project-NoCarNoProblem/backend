import { Router } from "express";
import { auth } from "../middlewares/auth";
import {
	acceptRide,
	getRide,
	updateRideStatus,
	cancelRide,
	myActiveRides,
} from "../controllers/ride.controller";
import { requireVerifiedDriver } from "../middlewares/requireVerifiedDriver";

const router = Router();

/**
 * @swagger
 * /api/ride/me/active:
 *   get:
 *     summary: Get my active rides
 *     description: Fetch all active rides for the authenticated driver
 *     tags: [Ride]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Active rides retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   customer_id:
 *                     type: string
 *                   driver_id:
 *                     type: string
 *                   fare:
 *                     type: number
 *                   ride_status:
 *                     type: string
 *                   ride_progress_status:
 *                     type: string
 *       401:
 *         description: User not authenticated
 */
router.get("/me/active", auth, myActiveRides);

/**
 * @swagger
 * /api/ride/{id}:
 *   get:
 *     summary: Get ride details
 *     description: Retrieve details of a specific ride
 *     tags: [Ride]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ride ID
 *     responses:
 *       200:
 *         description: Ride details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 customer:
 *                   type: object
 *                 verified_driver:
 *                   type: object
 *                 vehicle:
 *                   type: object
 *                 pickup_lat:
 *                   type: number
 *                 pickup_lng:
 *                   type: number
 *                 dropoff_lat:
 *                   type: number
 *                 dropoff_lng:
 *                   type: number
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: Forbidden - not authorized to view this ride
 *       404:
 *         description: Ride not found
 */
router.get("/:id", auth, getRide);

/**
 * @swagger
 * /api/ride/{id}/accept:
 *   post:
 *     summary: Accept a ride request
 *     description: Driver accepts a pending ride request
 *     tags: [Ride]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ride request ID
 *     responses:
 *       201:
 *         description: Ride created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 rideId:
 *                   type: string
 *       400:
 *         description: Driver has no registered vehicle
 *       401:
 *         description: User not authenticated
 *       409:
 *         description: Ride already accepted or canceled
 */
router.post("/:id/accept", auth, requireVerifiedDriver, acceptRide);

/**
 * @swagger
 * /api/ride/{id}/status:
 *   patch:
 *     summary: Update ride progress status
 *     description: Driver updates the ride progress (on_the_way, arrived, picked_up, completed)
 *     tags: [Ride]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ride ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - progress_status
 *             properties:
 *               progress_status:
 *                 type: string
 *                 enum: [on_the_way, arrived, picked_up, completed]
 *                 example: picked_up
 *     responses:
 *       200:
 *         description: Ride status updated successfully
 *       400:
 *         description: Invalid progress status or cannot update canceled/completed ride
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: Only the driver can update ride progress
 *       404:
 *         description: Ride not found
 */
router.patch("/:id/status", auth, requireVerifiedDriver, updateRideStatus);

/**
 * @swagger
 * /api/ride/{id}:
 *   delete:
 *     summary: Cancel a ride
 *     description: Cancel an ongoing ride (driver or customer)
 *     tags: [Ride]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ride ID
 *     responses:
 *       200:
 *         description: Ride canceled successfully
 *       400:
 *         description: Ride already canceled or completed rides cannot be canceled
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: Forbidden - not authorized to cancel this ride
 *       404:
 *         description: Ride not found
 */
router.delete("/:id", auth, cancelRide);

export default router;
