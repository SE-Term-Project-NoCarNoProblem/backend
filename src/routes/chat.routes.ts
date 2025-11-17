import { Router } from "express";
import {
	getChatMessages,
	createChatMessage,
} from "../controllers/chat.controller";
import { auth } from "../middlewares/auth";

const router = Router();

/**
 * @swagger
 * /api/chat/messages:
 *   get:
 *     summary: Get chat messages for a ride
 *     description: Retrieve all chat messages for a specific ride
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: rideId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ride ID
 *     responses:
 *       200:
 *         description: Chat messages retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 messages:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       content:
 *                         type: string
 *                       rideId:
 *                         type: string
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                       senderId:
 *                         type: string
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: User not part of this ride
 *       404:
 *         description: Ride not found
 */
router.get("/messages", auth, getChatMessages);

/**
 * @swagger
 * /api/chat/message/{rideId}:
 *   post:
 *     summary: Send a chat message
 *     description: Send a new chat message in a ride conversation
 *     tags: [Chat]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: rideId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ride ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 1000
 *                 example: Hello, I'm on my way!
 *     responses:
 *       201:
 *         description: Message created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: object
 *       400:
 *         description: Invalid message format
 *       401:
 *         description: User not authenticated
 *       403:
 *         description: User not part of this ride
 *       404:
 *         description: Ride not found
 */
router.post("/message/:rideId", auth, createChatMessage);

// real-time event handlers in controller file

export default router;
