import { Router } from "express";
import { resolveTicket } from "../controllers/ticket.controller";
import { auth } from "../middlewares/auth";

const router = Router();

router.patch("/:id/:support_id/resolve", auth, resolveTicket);

export default router;
