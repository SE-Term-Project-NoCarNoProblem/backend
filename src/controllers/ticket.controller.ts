import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
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

export async function createTicket(req: Request, res: Response) {
	try {
		const userId = res.locals.user?.id;
		if (!userId) return res.status(401).json({ error: "Unauthorized" });

		const { rideId, topic, detail } = req.body;

		if (!rideId || !detail) {
			return res.status(400).json({
				error: "rideId and detail are required",
			});
		}

		const ride = await prisma.ride.findUnique({
			where: { id: rideId },
			select: { customer_id: true, driver_id: true },
		});

		if (!ride) {
			return res.status(404).json({ error: "Ride not found" });
		}

		const isCustomer = ride.customer_id === userId;
		const isDriver = ride.driver_id === userId;

		if (!isCustomer && !isDriver) {
			return res
				.status(403)
				.json({ error: "You cannot create a ticket for this ride" });
		}

		const ticket = await prisma.support_ticket.create({
			data: {
				ride: rideId,
				topic: topic || "Unnamed ticket",
				detail,
				is_customer: isCustomer,
				timestamp: new Date(),
			},
			select: {
				id: true,
				ride: true,
				topic: true,
				detail: true,
				is_customer: true,
				timestamp: true,
				resolved_at: true,
			},
		});

		return res.status(201).json({
			message: "Support ticket created successfully",
			ticket,
		});
	} catch (error) {
		console.error("Error creating support ticket:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
}

export async function resolveTicket(req: Request, res: Response) {
	const ticketId = req.params.id;
	const support_id = req.params.support_id;
	const { detail } = req.body;
	try {
		const updated = await prisma.support_ticket.update({
			where: {
				id: ticketId,
			},
			data: {
				support_id: support_id,
				detail: detail,
				resolved_at: new Date(),
			},
		});
		return res.status(200).json({ ok: true, data: updated });
	} catch (error) {
		console.log("Error in resolveTicket controller:", error);
		res.status(500).json({ error: "Internal server error" });
	}
}
