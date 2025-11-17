import { Router } from "express";
import {
	accountSetup,
	getAccountStatus,
	login,
	register,
} from "../controllers/auth.controller";
import { auth } from "../middlewares/auth";

const router = Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User login
 *     description: Authenticate user with email and password
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 status:
 *                   type: string
 *                   enum: [ready, requires-setup]
 *       400:
 *         description: Invalid credentials or validation error
 */
router.post("/login", login);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register new user
 *     description: Create a new user account with email and password
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: newuser@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 example: securePassword123
 *     responses:
 *       200:
 *         description: Registration successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Validation error or user already exists
 */
router.post("/register", register);

/**
 * @swagger
 * /api/auth/account_setup:
 *   post:
 *     summary: Complete account setup
 *     description: Set up user profile information (driver or customer)
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - phone_number
 *               - idNumber
 *               - gender
 *               - role
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: John Doe
 *               phone_number:
 *                 type: string
 *                 example: "+66812345678"
 *               idNumber:
 *                 type: string
 *                 minLength: 13
 *                 maxLength: 13
 *                 example: "1234567890123"
 *               gender:
 *                 type: string
 *                 enum: [male, female, nonbinary]
 *               role:
 *                 type: string
 *                 enum: [driver, customer]
 *     responses:
 *       200:
 *         description: Account setup successful
 *       400:
 *         description: Validation error or account already set up
 *       401:
 *         description: User not authenticated
 */
router.post("/account_setup", auth, accountSetup);

/**
 * @swagger
 * /api/auth/get_status:
 *   get:
 *     summary: Get account status
 *     description: Check if user account is fully set up
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Account status retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   enum: [ready, requires-setup]
 *       401:
 *         description: User not authenticated
 */
router.get("/get_status", auth, getAccountStatus);

export default router;

// https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&layers=1&nav=1&title=login.drawio&dark=auto#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D16cLliZRHPklykhfrdQvFh0RDkGIIOrW7%26export%3Ddownload
