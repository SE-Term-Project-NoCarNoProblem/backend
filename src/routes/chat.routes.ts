import { Router } from "express";
import {
	getChatMessages,
	createChatMessage,
} from "../controllers/chat.controller";
import { auth } from "../middlewares/auth";

const router = Router();

router.get("/messages/:rideId", auth, getChatMessages);
router.post("/message/:rideId", auth, createChatMessage);

// real-time event handlers in controller file

export default router;
