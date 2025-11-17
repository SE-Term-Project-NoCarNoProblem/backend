import { Router } from "express";
import { auth } from "../middlewares/auth";
import { requireAdmin } from "../middlewares/requireAdmin";
import {
	approveDriver,
	rejectDriver,
	getWaitingDrivers,
	getApprovedDrivers,
	getRejectedDrivers,
	getAllDrivers,
} from "../controllers/adminDriver.controller";

const router = Router();

/**
 * @swagger
 * /api/admin/drivers/{driverId}/approve:
 *   post:
 *     summary: Approve a driver
 *     description: Admin approves a waiting driver and moves them to verified status
 *     tags: [Admin - Drivers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: driverId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The driver ID to approve
 *     responses:
 *       200:
 *         description: Driver approved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Driver approved successfully
 *       400:
 *         description: Driver is not pending approval
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: User is not an admin
 *       500:
 *         description: Failed to approve driver
 */
router.post("/:driverId/approve", auth, requireAdmin, approveDriver);

/**
 * @swagger
 * /api/admin/drivers/{driverId}/reject:
 *   post:
 *     summary: Reject a driver
 *     description: Admin rejects a waiting driver application
 *     tags: [Admin - Drivers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: driverId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The driver ID to reject
 *     responses:
 *       200:
 *         description: Driver rejected successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Driver rejected successfully
 *       400:
 *         description: Driver is not pending approval
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: User is not an admin
 *       500:
 *         description: Failed to reject driver
 */
router.post("/:driverId/reject", auth, requireAdmin, rejectDriver);

/**
 * @swagger
 * /api/admin/drivers/waiting:
 *   get:
 *     summary: Get waiting drivers
 *     description: Retrieve all drivers pending approval
 *     tags: [Admin - Drivers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Waiting drivers retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   requested_date:
 *                     type: string
 *                     format: date-time
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: User is not an admin
 */
router.get("/waiting", auth, requireAdmin, getWaitingDrivers);

/**
 * @swagger
 * /api/admin/drivers/approved:
 *   get:
 *     summary: Get approved drivers
 *     description: Retrieve all verified/approved drivers
 *     tags: [Admin - Drivers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Approved drivers retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   admin_id:
 *                     type: string
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *                   status:
 *                     type: string
 *                     example: free
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: User is not an admin
 */
router.get("/approved", auth, requireAdmin, getApprovedDrivers);

/**
 * @swagger
 * /api/admin/drivers/rejected:
 *   get:
 *     summary: Get rejected drivers
 *     description: Retrieve all rejected driver applications
 *     tags: [Admin - Drivers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Rejected drivers retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   admin_id:
 *                     type: string
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: User is not an admin
 */
router.get("/rejected", auth, requireAdmin, getRejectedDrivers);

/**
 * @swagger
 * /api/admin/drivers:
 *   get:
 *     summary: Get all drivers
 *     description: Retrieve all drivers (waiting, approved, and rejected) with their status
 *     tags: [Admin - Drivers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All drivers retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   driver_status:
 *                     type: string
 *                     enum: [Pending, Active, Rejected]
 *                   admin_id:
 *                     type: string
 *                     nullable: true
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                   requested_date:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: User is not an admin
 *       500:
 *         description: Failed to fetch drivers
 */
router.get("/", auth, requireAdmin, getAllDrivers);

export default router;
