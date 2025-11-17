import { Router } from "express";
import {
	createRequest,
	deleteRequest,
	nearbyRequests,
	cancelRequest,
	calculateFareEndpoint,
	myActiveRequests,
} from "../controllers/request.controller";
import { auth } from "../middlewares/auth";

const router = Router();

/**
 * @swagger
 * /api/request:
 *   post:
 *     summary: Create ride request
 *     description: Customer creates a new ride request
 *     tags: [Request]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - service
 *               - pickup_lng
 *               - pickup_lat
 *               - dropoff_lng
 *               - dropoff_lat
 *             properties:
 *               service:
 *                 type: string
 *                 minLength: 1
 *                 example: Standard Ride
 *               note_to_driver:
 *                 type: string
 *                 nullable: true
 *                 example: Please wait at the main entrance
 *               pickup_lng:
 *                 type: number
 *                 example: 100.5018
 *               pickup_lat:
 *                 type: number
 *                 example: 13.7563
 *               dropoff_lng:
 *                 type: number
 *                 example: 100.5234
 *               dropoff_lat:
 *                 type: number
 *                 example: 13.7465
 *     responses:
 *       201:
 *         description: Request created successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: User not authenticated
 */
router.post("/", auth, createRequest);

/**
 * @swagger
 * /api/request/{id}:
 *   delete:
 *     summary: Delete ride request
 *     description: Delete a pending ride request
 *     tags: [Request]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The request ID
 *     responses:
 *       204:
 *         description: Request deleted successfully
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: Can only delete own ride request
 *       404:
 *         description: Request not found
 */
router.delete("/:id", auth, deleteRequest);

/**
 * @swagger
 * /api/request/nearby:
 *   get:
 *     summary: Get nearby requests
 *     description: Fetch ride requests near a specific location
 *     tags: [Request]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *         description: Latitude
 *       - in: query
 *         name: lng
 *         required: true
 *         schema:
 *           type: number
 *         description: Longitude
 *       - in: query
 *         name: radius_m
 *         schema:
 *           type: integer
 *           default: 3000
 *         description: Search radius in meters
 *     responses:
 *       200:
 *         description: Nearby requests retrieved successfully
 *       400:
 *         description: Invalid coordinates
 *       401:
 *         description: User not authenticated
 */
router.get("/nearby", auth, nearbyRequests);

/**
 * @swagger
 * /api/request/{id}/cancel:
 *   delete:
 *     summary: Cancel ride request
 *     description: Cancel a pending ride request
 *     tags: [Request]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The request ID
 *     responses:
 *       200:
 *         description: Request canceled successfully
 *       400:
 *         description: Ride ID is required
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: Can only cancel own ride request
 *       404:
 *         description: Request not found
 */
router.delete("/:id/cancel", auth, cancelRequest);

/**
 * @swagger
 * /api/request/fare:
 *   get:
 *     summary: Calculate fare
 *     description: Calculate fare based on pickup and dropoff locations
 *     tags: [Request]
 *     parameters:
 *       - in: query
 *         name: pickup_lat
 *         required: true
 *         schema:
 *           type: number
 *         description: Pickup latitude
 *       - in: query
 *         name: pickup_lng
 *         required: true
 *         schema:
 *           type: number
 *         description: Pickup longitude
 *       - in: query
 *         name: dropoff_lat
 *         required: true
 *         schema:
 *           type: number
 *         description: Dropoff latitude
 *       - in: query
 *         name: dropoff_lng
 *         required: true
 *         schema:
 *           type: number
 *         description: Dropoff longitude
 *     responses:
 *       200:
 *         description: Fare calculated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 distance_m:
 *                   type: integer
 *                 fare_baht:
 *                   type: integer
 *       400:
 *         description: Invalid distance
 */
router.get("/fare", calculateFareEndpoint);

/**
 * @swagger
 * /api/request/me/active:
 *   get:
 *     summary: Get my active requests
 *     description: Fetch all active ride requests for the authenticated customer
 *     tags: [Request]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Active requests retrieved successfully
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
 *                   service:
 *                     type: string
 *                   fare:
 *                     type: number
 *                   distance_m:
 *                     type: integer
 *                   status:
 *                     type: string
 *                     enum: [pending, ongoing]
 *       401:
 *         description: User not authenticated
 */
router.get("/me/active", auth, myActiveRequests);

export default router;
