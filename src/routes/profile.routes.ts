import { Router } from "express";
import multer from "multer";
import {
	uploadProfilePicture,
	deleteProfilePicture,
	uploadIdPicture,
	getIdPicture,
	uploadLicensePicture,
	getLicensePicture,
} from "../controllers/profile.controller";
import { auth } from "../middlewares/auth";

const router = Router();

const upload = multer({
	storage: multer.memoryStorage(),
});

/**
 * @swagger
 * /api/profile/upload:
 *   post:
 *     summary: Upload profile picture
 *     description: Upload or update user profile picture
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - profilePicture
 *             properties:
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *                 description: Image file (JPEG, PNG, or WebP, max 5MB)
 *     responses:
 *       200:
 *         description: Profile picture uploaded successfully
 *       400:
 *         description: No file uploaded or invalid file type
 *       401:
 *         description: User not authenticated
 */
router.post(
	"/upload",
	auth,
	upload.single("profilePicture"),
	uploadProfilePicture
);

/**
 * @swagger
 * /api/profile/delete:
 *   delete:
 *     summary: Delete profile picture
 *     description: Remove user profile picture
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile picture deleted successfully
 *       400:
 *         description: User has no profile picture to delete
 *       401:
 *         description: User not authenticated
 *       404:
 *         description: User not found
 */
router.delete("/delete", auth, deleteProfilePicture);

/**
 * @swagger
 * /api/profile/id-pic/upload:
 *   post:
 *     summary: Upload ID picture
 *     description: Upload user identification document picture
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - idPicture
 *             properties:
 *               idPicture:
 *                 type: string
 *                 format: binary
 *                 description: Image file (JPEG, PNG, or WebP, max 5MB)
 *     responses:
 *       200:
 *         description: ID picture uploaded successfully
 *       400:
 *         description: No file uploaded, invalid file type, or ID picture already exists
 *       401:
 *         description: User not authenticated
 */
router.post(
	"/id-pic/upload",
	auth,
	upload.single("idPicture"),
	uploadIdPicture
);

/**
 * @swagger
 * /api/profile/id-pic:
 *   get:
 *     summary: Get ID picture
 *     description: Retrieve user ID picture (signed URL)
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: ID picture retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 idPicUrl:
 *                   type: string
 *                   format: uri
 *                 expiresAt:
 *                   type: string
 *                   format: date-time
 *       401:
 *         description: User not authenticated
 *       404:
 *         description: User has no ID picture
 */
router.get("/id-pic", auth, getIdPicture);

/**
 * @swagger
 * /api/profile/license-pic/upload:
 *   post:
 *     summary: Upload license picture
 *     description: Upload driver's license picture (drivers only)
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - licensePicture
 *             properties:
 *               licensePicture:
 *                 type: string
 *                 format: binary
 *                 description: Image file (JPEG, PNG, or WebP, max 5MB)
 *     responses:
 *       200:
 *         description: License picture uploaded successfully
 *       400:
 *         description: No file uploaded, invalid file type, license already exists, or ID picture required first
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: Only drivers can upload license pictures
 */
router.post(
	"/license-pic/upload",
	auth,
	upload.single("licensePicture"),
	uploadLicensePicture
);

/**
 * @swagger
 * /api/profile/license-pic:
 *   get:
 *     summary: Get license picture
 *     description: Retrieve driver's license picture (signed URL)
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: License picture retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 licensePicUrl:
 *                   type: string
 *                   format: uri
 *                 expiresAt:
 *                   type: string
 *                   format: date-time
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: User is not a driver
 *       404:
 *         description: Driver has no license picture
 */
router.get("/license-pic", auth, getLicensePicture);

export default router;
