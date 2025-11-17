import { Router } from "express";
import { auth } from "../middlewares/auth";
import { requireAdmin } from "../middlewares/requireAdmin";
import { getAdminStats } from "../controllers/admin.controller";

const router = Router();

/**
 * @swagger
 * /api/admin/stats:
 *   get:
 *     summary: Get admin statistics
 *     description: Retrieve statistics about suspended and banned users (customers and drivers)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Statistics retrieved successfully
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
 *                     suspendedCustomers:
 *                       type: number
 *                       description: Total number of suspended customers
 *                     suspendedDrivers:
 *                       type: number
 *                       description: Total number of suspended drivers
 *                     bannedCustomers:
 *                       type: number
 *                       description: Total number of permanently banned customers
 *                     bannedDrivers:
 *                       type: number
 *                       description: Total number of permanently banned drivers
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: User is not an admin
 *       500:
 *         description: Failed to fetch statistics
 */
router.get("/stats", auth, requireAdmin, getAdminStats);

export default router;
