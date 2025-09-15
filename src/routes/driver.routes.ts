import { Router } from "express";
import { updateDriverLocation, getDrivers, getNearbyDrivers } from "../controllers/driver.controller";

const router = Router();

// Driver updates location
router.post("/location", updateDriverLocation);

// Customer fetches all drivers
router.get("/location", getDrivers);

// Get nearby drivers
router.get("/nearby", getNearbyDrivers);

export default router;
