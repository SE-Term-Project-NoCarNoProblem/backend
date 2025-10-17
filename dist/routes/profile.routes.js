"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const profile_controller_1 = require("../controllers/profile.controller");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
});
router.post("/upload", auth_1.auth, upload.single("profilePicture"), profile_controller_1.uploadProfilePicture);
router.delete("/delete", auth_1.auth, profile_controller_1.deleteProfilePicture);
// ID Picture routes
router.post("/id-pic/upload", auth_1.auth, upload.single("idPicture"), profile_controller_1.uploadIdPicture);
router.get("/id-pic", auth_1.auth, profile_controller_1.getIdPicture);
// License Picture routes (for drivers only)
router.post("/license-pic/upload", auth_1.auth, upload.single("licensePicture"), profile_controller_1.uploadLicensePicture);
router.get("/license-pic", auth_1.auth, profile_controller_1.getLicensePicture);
exports.default = router;
