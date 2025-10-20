import { Router } from "express";
import { acceptRide } from "../controllers/ride.controller";
import { auth } from "../middlewares/auth";

const router = Router();

router.post("/:id/accept", auth, acceptRide);

export default router;
