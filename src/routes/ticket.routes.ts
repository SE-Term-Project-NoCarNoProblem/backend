import { Router } from "express";
import { auth } from "../middlewares/auth";
import { createTicket } from "../controllers/ticket.controller";

const router = Router();

router.post("/", auth, createTicket);

export default router;
