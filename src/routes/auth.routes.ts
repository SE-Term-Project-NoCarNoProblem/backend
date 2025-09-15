import { Router } from "express";
import {
	accountSetup,
	getAccountStatus,
	login,
	register,
} from "../controllers/auth.controller";
import { auth } from "../middlewares/auth";

const router = Router();

router.post("/login", login); // for password-only login
router.post("/register", register); // for password-only registration?
// router.post("/oauth/password_confirm/redirect", passwordConfirmRedirect);
router.post("/account_setup", auth, accountSetup);
router.get("/get_status", auth, getAccountStatus);

export default router;

// https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&layers=1&nav=1&title=login.drawio&dark=auto#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D16cLliZRHPklykhfrdQvFh0RDkGIIOrW7%26export%3Ddownload
