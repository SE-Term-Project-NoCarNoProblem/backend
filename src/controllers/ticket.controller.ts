import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { support_ticket } from "../generated/prisma/client";
import { logger } from "../utils/logger";

// GET /tickets
export async function getTickets(req: Request, res: Response) {
	try {
		const tickets = await prisma.support_ticket.findMany({
			include: {
				ride_support_ticket_rideToride: {
					include: {
						vehicle: true,
					},
				},
			},
		});
		logger.info("Fetched all support tickets");
		return res.status(200).json(tickets);
	} catch (error) {
		logger.error("Error fetching support tickets", { error });
		return res.status(500).json({ message: "Internal server error" });
	}
}
