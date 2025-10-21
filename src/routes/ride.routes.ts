import { Router } from "express";
import { auth } from "../middlewares/auth";
import {
	acceptRide,
	getRide,
	updateRideStatus,
	cancelRide,
	myActiveRides,
} from "../controllers/ride.controller";

const router = Router();

router.get("/me/active", auth, myActiveRides);
router.get("/:id", auth, getRide);
router.post("/:id/accept", auth, acceptRide);
router.patch("/:id/status", auth, updateRideStatus);
router.delete("/:id", auth, cancelRide);

export default router;
