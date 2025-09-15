import { Router } from "express";
import { updateDriverLocation, getDrivers } from "../controllers/driver.controller";

const router = Router();

// Driver updates location
router.post("/location", updateDriverLocation);

// Customer fetches all drivers
router.get("/location", getDrivers);

export default router;
