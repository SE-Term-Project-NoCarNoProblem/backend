"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.post("/login", auth_controller_1.login); // for password-only login
router.post("/register", auth_controller_1.register); // for password-only registration?
router.post("/oauth/google/redirect", auth_controller_1.oauthGoogleRedirect);
router.post("/oauth/password_confirm/redirect", auth_controller_1.passwordConfirmRedirect);
router.post("/account_setup", auth_1.auth, auth_controller_1.accountSetup);
exports.default = router;
// <iframe frameborder="0" style="width:100%;height:603px;" src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&layers=1&nav=1&title=login.drawio&dark=auto#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D16cLliZRHPklykhfrdQvFh0RDkGIIOrW7%26export%3Ddownload"></iframe>
