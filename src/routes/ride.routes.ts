import { Router } from "express";
import { auth } from "../middlewares/auth";
import { cancelRide } from "../controllers/ride.controller";

const router = Router();

router.delete("/:id", auth, cancelRide);

export default router;
