import { Router } from "express";
import { auth } from "../middlewares/auth";
import { requireAdmin } from "../middlewares/requireAdmin";
import {
	approveDriver,
	rejectDriver,
	getWaitingDrivers,
	getApprovedDrivers,
	getRejectedDrivers,
} from "../controllers/adminDriver.controller";

const router = Router();

router.post("/:driverId/approve", auth, requireAdmin, approveDriver);
router.post("/:driverId/reject", auth, requireAdmin, rejectDriver);

router.get("/waiting", auth, requireAdmin, getWaitingDrivers);
router.get("/approved", auth, requireAdmin, getApprovedDrivers);
router.get("/rejected", auth, requireAdmin, getRejectedDrivers);

export default router;
