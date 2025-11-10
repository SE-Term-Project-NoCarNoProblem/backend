import { Router } from "express";
import { auth } from "../middlewares/auth";
import { requireAdmin } from "../middlewares/requireAdmin";
import {
	approveDriver,
	rejectDriver,
} from "../controllers/adminDriver.controller";

const router = Router();

router.post("/:driverId/approve", auth, requireAdmin, approveDriver);
router.post("/:driverId/reject", auth, requireAdmin, rejectDriver);

export default router;
