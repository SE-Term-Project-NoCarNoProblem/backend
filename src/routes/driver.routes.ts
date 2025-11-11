import { Router } from "express";
import {
	updateDriverLocation,
	getDrivers,
	getNearbyDrivers,
	viewDriver,
	getDriverRating,
	getDriverRatingOverTime,
	updateDriverRating,
	getCancleOverTime
} from "../controllers/driver.controller";
import { auth } from "../middlewares/auth";

const router = Router();

// Driver updates location
router.post("/location", auth, updateDriverLocation);

// Customer fetches all drivers
router.get("/location", auth, getDrivers);
router.get("/:driverId/ratingOverTime",getDriverRatingOverTime);
router.get("/:driverId/cancelOverTime",getCancleOverTime);
// Get nearby drivers
router.get("/nearby", getNearbyDrivers);
router.get("/viewdriver/:rideId",viewDriver);

// Get rating
router.get("/:driverId/rating", auth, getDriverRating);

// Update rating
router.put("/:rideId/rating", auth, updateDriverRating);

export default router;
