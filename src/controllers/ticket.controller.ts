import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function createTicket(req: Request, res: Response) {
	try {
		const userId = res.locals.user?.id;
		if (!userId) return res.status(401).json({ error: "Unauthorized" });

		const { rideId, detail } = req.body;

		if (!rideId || !detail) {
			return res.status(400).json({ error: "rideId and detail are required" });
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
				detail,
				is_customer: isCustomer,
				is_resolved: false,
				timestamp: new Date(),
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
