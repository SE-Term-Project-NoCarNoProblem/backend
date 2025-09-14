import { Router } from "express";
import { getUser, getMe, patchMe } from "../controllers/user.controller";
import { auth } from "../middlewares/auth";
import { supabase } from "../lib/supabase";
import { logger } from "../utils/logger";
import { login, register } from "../controllers/auth.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;
