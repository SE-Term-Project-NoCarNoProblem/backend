import { Router } from "express";
import {
	getUser,
	getMe,
	patchMe,
	getAllUsers,
	updateUserStatus,
} from "../controllers/user.controller";
import { auth } from "../middlewares/auth";

const router = Router();

/**
 * @swagger
 * /api/user/me:
 *   get:
 *     summary: Get current user profile
 *     description: Retrieve authenticated user's profile information
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: include
 *         schema:
 *           type: string
 *         description: Comma-separated list of relations to include (customer, driver, admin, support, vehicles)
 *         example: customer,driver
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     fullname:
 *                       type: string
 *                     email:
 *                       type: string
 *                     phone_number:
 *                       type: string
 *                     gender:
 *                       type: string
 *                     profile_pic:
 *                       type: string
 *                       nullable: true
 *       401:
 *         description: User not authenticated
 *       404:
 *         description: User not found
 */
router.get("/me", auth, getMe);

/**
 * @swagger
 * /api/user/me:
 *   patch:
 *     summary: Update current user profile
 *     description: Update authenticated user's profile information
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *               gender:
 *                 type: string
 *                 enum: [male, female, nonbinary]
 *               phone_number:
 *                 type: string
 *                 example: "+66812345678"
 *               favorite_pickup_location:
 *                 type: string
 *                 example: "13.7563,100.5018"
 *               favorite_dropoff_location:
 *                 type: string
 *                 example: "13.7465,100.5234"
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *       400:
 *         description: Invalid fields or email/phone number already exists
 *       401:
 *         description: User not authenticated
 *       404:
 *         description: User not found
 */
router.patch("/me", auth, patchMe);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve user information by user ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The user ID
 *       - in: query
 *         name: include
 *         schema:
 *           type: string
 *         description: Comma-separated list of relations to include (customer, driver, admin, support, vehicles)
 *         example: customer,driver
 *     responses:
 *       200:
 *         description: User information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     fullname:
 *                       type: string
 *                     email:
 *                       type: string
 *                     phone_number:
 *                       type: string
 *       400:
 *         description: User ID is required
 *       404:
 *         description: User not found
 */
router.get("/:id", getUser);

router.get("/", getAllUsers);

router.patch("/status/:id", auth, updateUserStatus);

export default router;
