import { Router } from "express";
import {
	updateDriverLocation,
	getDrivers,
} from "../controllers/driver.controller";
import { auth } from "../middlewares/auth";

const router = Router();

// Driver updates location
router.post("/location", auth, updateDriverLocation);

// Customer fetches all drivers
router.get("/location", auth, getDrivers);

export default router;
