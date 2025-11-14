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

router.get("/me/active", auth, myActiveRides);
router.get("/:id", auth, getRide);
router.post("/:id/accept", auth, requireVerifiedDriver, acceptRide);
router.patch("/:id/status", auth, requireVerifiedDriver, updateRideStatus);
router.delete("/:id", auth, requireVerifiedDriver, cancelRide);

export default router;
