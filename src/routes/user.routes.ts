import { Router } from "express";
import {
	getUser,
	getMe,
	patchMe,
	updateUserStatus,
} from "../controllers/user.controller";
import { auth } from "../middlewares/auth";

const router = Router();

router.get("/me", auth, getMe);
router.patch("/me", auth, patchMe);
router.get("/:id", getUser);
router.patch(":/id/status", updateUserStatus);

export default router;
