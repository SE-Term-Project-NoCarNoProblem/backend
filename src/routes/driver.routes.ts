import { Router } from "express";
import {
	updateDriverLocation,
	getDrivers,
	getNearbyDrivers,
	getDriverRating,
	updateDriverRating
} from "../controllers/driver.controller";
import { auth } from "../middlewares/auth";

const router = Router();

// Driver updates location
router.post("/location", auth, updateDriverLocation);

// Customer fetches all drivers
router.get("/location", auth, getDrivers);

// Get nearby drivers
router.get("/nearby", getNearbyDrivers);

// Get rating
router.get("/:driverId/rating", auth, getDriverRating);

// Update rating
router.put("/:rideId/rating", auth, updateDriverRating);

export default router;
