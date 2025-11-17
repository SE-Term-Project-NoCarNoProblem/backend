import { Router } from "express";
import { getTickets } from "../controllers/ticket.controller";
import { createTicket } from "../controllers/ticket.controller";
import { resolveTicket } from "../controllers/ticket.controller";
import { auth } from "../middlewares/auth";

const router = Router();

/**
 * @swagger
 * /api/ticket:
 *   get:
 *     summary: Get all support tickets
 *     description: Retrieve all support tickets
 *     tags: [Ticket]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Support tickets retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   ride:
 *                     type: string
 *                   topic:
 *                     type: string
 *                   detail:
 *                     type: string
 *                   is_customer:
 *                     type: boolean
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *                   resolved_at:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *       401:
 *         description: User not authenticated
 */
router.get("/", auth, getTickets);

/**
 * @swagger
 * /api/ticket:
 *   post:
 *     summary: Create support ticket
 *     description: Create a new support ticket for a ride
 *     tags: [Ticket]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - rideId
 *               - detail
 *             properties:
 *               rideId:
 *                 type: string
 *                 format: uuid
 *                 example: 123e4567-e89b-12d3-a456-426614174000
 *               topic:
 *                 type: string
 *                 example: Payment Issue
 *               detail:
 *                 type: string
 *                 example: I was overcharged for my ride
 *     responses:
 *       201:
 *         description: Support ticket created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 ticket:
 *                   type: object
 *       400:
 *         description: RideId and detail are required
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: Cannot create ticket for this ride
 *       404:
 *         description: Ride not found
 */
router.post("/", auth, createTicket);

/**
 * @swagger
 * /api/ticket/{id}/{support_id}/resolve:
 *   patch:
 *     summary: Resolve support ticket
 *     description: Mark a support ticket as resolved by support staff
 *     tags: [Ticket]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ticket ID
 *       - in: path
 *         name: support_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The support staff ID
 *     responses:
 *       200:
 *         description: Ticket resolved successfully
 *       401:
 *         description: User not authenticated
 *       404:
 *         description: Ticket not found
 */
router.patch("/:id/:support_id/resolve", auth, resolveTicket);

export default router;
