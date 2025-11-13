import { Router } from "express";
import { getUser, getMe, patchMe } from "../controllers/user.controller";
import { auth } from "../middlewares/auth";

const router = Router();

router.get("/me", auth, getMe);
router.patch("/me", auth, patchMe);
router.get("/:id", getUser);

export default router;
