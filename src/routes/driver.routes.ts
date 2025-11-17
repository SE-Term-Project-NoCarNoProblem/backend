import { Router } from "express";
import {
	updateDriverLocation,
	getDrivers,
	getNearbyDrivers,
	viewDriver,
	getDriverRating,
	updateDriverRating,
	getDriverRatingOverTime,
	getCancleOverTime,
} from "../controllers/driver.controller";
import { auth } from "../middlewares/auth";

const router = Router();

/**
 * @swagger
 * /api/driver/location:
 *   post:
 *     summary: Update driver location
 *     description: Driver updates their current location
 *     tags: [Driver]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lat
 *               - lng
 *             properties:
 *               lat:
 *                 type: number
 *                 minimum: -90
 *                 maximum: 90
 *                 example: 13.7563
 *               lng:
 *                 type: number
 *                 minimum: -180
 *                 maximum: 180
 *                 example: 100.5018
 *     responses:
 *       200:
 *         description: Location updated successfully
 *       400:
 *         description: Invalid coordinates
 *       401:
 *         description: User not authenticated
 */
router.post("/location", auth, updateDriverLocation);

/**
 * @swagger
 * /api/driver/location:
 *   get:
 *     summary: Get all drivers' locations
 *     description: Retrieve locations of all drivers
 *     tags: [Driver]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Driver locations retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: array
 *                 items:
 *                   type: number
 *       401:
 *         description: User not authenticated
 */
router.get("/location", auth, getDrivers);

/**
 * @swagger
 * /api/driver/nearby:
 *   get:
 *     summary: Get nearby drivers
 *     description: Find drivers within a specified radius
 *     tags: [Driver]
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *           minimum: -90
 *           maximum: 90
 *         description: Latitude of the search location
 *       - in: query
 *         name: lng
 *         required: true
 *         schema:
 *           type: number
 *           minimum: -180
 *           maximum: 180
 *         description: Longitude of the search location
 *       - in: query
 *         name: radius_m
 *         schema:
 *           type: integer
 *           minimum: 50
 *           maximum: 5000
 *           default: 3000
 *         description: Search radius in meters
 *     responses:
 *       200:
 *         description: Nearby drivers retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   driver_id:
 *                     type: string
 *                   lat:
 *                     type: number
 *                   lng:
 *                     type: number
 *                   distance_m:
 *                     type: integer
 *       400:
 *         description: Invalid coordinates
 */
router.get("/nearby", getNearbyDrivers);

/**
 * @swagger
 * /api/driver/{driverId}/ratingOverTime:
 *   get:
 *     summary: Get driver rating over time
 *     description: Retrieve historical rating data for a driver
 *     tags: [Driver]
 *     parameters:
 *       - in: path
 *         name: driverId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The driver ID
 *     responses:
 *       200:
 *         description: Rating history retrieved successfully
 *       404:
 *         description: Driver not found
 */
router.get("/:driverId/ratingOverTime", getDriverRatingOverTime);

/**
 * @swagger
 * /api/driver/{driverId}/cancelOverTime:
 *   get:
 *     summary: Get driver cancellation history
 *     description: Retrieve cancellation statistics over time for a driver
 *     tags: [Driver]
 *     parameters:
 *       - in: path
 *         name: driverId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The driver ID
 *     responses:
 *       200:
 *         description: Cancellation history retrieved successfully
 *       404:
 *         description: Driver not found
 */
router.get("/:driverId/cancelOverTime", getCancleOverTime);

router.get("/viewdriver/:rideId", viewDriver);

/**
 * @swagger
 * /api/driver/viewdriver/{rideId}:
 *   get:
 *     summary: View driver details
 *     description: Get driver information for a specific ride
 *     tags: [Driver]
 *     parameters:
 *       - in: path
 *         name: rideId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ride ID
 *     responses:
 *       200:
 *         description: Driver details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     rating:
 *                       type: number
 *                     verified_driver:
 *                       type: object
 *       400:
 *         description: Ride ID is required
 *       404:
 *         description: User not found
 */
router.get("/viewdriver/:rideId", viewDriver);

/**
 * @swagger
 * /api/driver/{driverId}/rating:
 *   get:
 *     summary: Get driver rating
 *     description: Retrieve the average rating for a driver
 *     tags: [Driver]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: driverId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The driver ID
 *     responses:
 *       200:
 *         description: Driver rating retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 viewer_id:
 *                   type: string
 *                 driver_id:
 *                   type: string
 *                 average_rating:
 *                   type: string
 *                   nullable: true
 *                 total_rated_rides:
 *                   type: integer
 *                 message:
 *                   type: string
 *                   nullable: true
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: Unauthorized access
 */
router.get("/:driverId/rating", auth, getDriverRating);

/**
 * @swagger
 * /api/driver/{rideId}/rating:
 *   put:
 *     summary: Update driver rating
 *     description: Rate a driver after a completed ride
 *     tags: [Driver]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: rideId
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
 *               - rating
 *             properties:
 *               rating:
 *                 type: number
 *                 minimum: 1
 *                 maximum: 5
 *                 example: 5
 *     responses:
 *       200:
 *         description: Rating updated successfully
 *       400:
 *         description: Invalid rating or rating already set
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: Unauthorized to rate this ride
 *       404:
 *         description: Ride not found
 */
router.put("/:rideId/rating", auth, updateDriverRating);

export default router;
