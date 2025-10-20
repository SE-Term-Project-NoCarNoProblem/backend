import { Router } from "express";
import { auth } from "../middlewares/auth";
import { acceptRide } from "../controllers/ride.controller";
import { cancelRide } from "../controllers/ride.controller";

const router = Router();

router.post("/:id/accept", auth, acceptRide);
router.delete("/:id", auth, cancelRide);

export default router;
