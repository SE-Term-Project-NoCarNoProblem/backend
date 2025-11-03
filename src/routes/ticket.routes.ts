import { Router } from "express";
import { getTickets } from "../controllers/ticket.controller";
import { auth } from "../middlewares/auth";

const router = Router();

router.get("/", auth, getTickets);

export default router;
