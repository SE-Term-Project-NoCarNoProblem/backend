import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { logger } from "../utils/logger";
import { reverseGeocode } from "../utils/geocoding";

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

// GET /tickets/me - Get tickets filed by the authenticated user
export async function getMyTickets(req: Request, res: Response) {
	try {
		const userId = res.locals.user?.id;
		if (!userId) return res.status(401).json({ error: "Unauthorized" });

		// Find all rides where the user is either customer or driver
		const rides = await prisma.ride.findMany({
			where: {
				OR: [{ customer_id: userId }, { driver_id: userId }],
			},
			select: { id: true },
		});

		const rideIds = rides.map((r) => r.id);

		if (rideIds.length === 0) {
			return res.status(200).json({ data: [] });
		}

		// Get tickets with ride details using raw SQL to extract coordinates
		const tickets = await prisma.$queryRaw<any[]>`
			SELECT 
				st.id,
				st.ride,
				st.topic,
				st.detail,
				st.is_customer,
				st.timestamp,
				st.resolved_at,
				r.timestamp as ride_timestamp,
				r.ended_at as ride_ended_at,
				ST_Y(r.pickup_location::geometry) as pickup_lat,
				ST_X(r.pickup_location::geometry) as pickup_lng,
				ST_Y(r.destination::geometry) as destination_lat,
				ST_X(r.destination::geometry) as destination_lng
			FROM support_ticket st
			JOIN ride r ON st.ride = r.id
			WHERE st.ride = ANY(${rideIds}::uuid[])
			AND (
				(st.is_customer = true AND r.customer_id = ${userId}::uuid)
				OR
				(st.is_customer = false AND r.driver_id = ${userId}::uuid)
			)
			ORDER BY st.timestamp DESC
		`;

		// Reverse geocode all locations
		const ticketsWithAddresses = await Promise.all(
			tickets.map(async (ticket) => {
				const pickupAddress = await reverseGeocode(
					Number(ticket.pickup_lat),
					Number(ticket.pickup_lng)
				);
				const destinationAddress = await reverseGeocode(
					Number(ticket.destination_lat),
					Number(ticket.destination_lng)
				);

				return {
					id: ticket.id,
					ride: ticket.ride,
					topic: ticket.topic,
					detail: ticket.detail,
					is_customer: ticket.is_customer,
					timestamp: ticket.timestamp,
					resolved_at: ticket.resolved_at,
					ride_details: {
						timestamp: ticket.ride_timestamp,
						ended_at: ticket.ride_ended_at,
						pickup_location: {
							lat: Number(ticket.pickup_lat),
							lng: Number(ticket.pickup_lng),
							address: pickupAddress,
						},
						destination: {
							lat: Number(ticket.destination_lat),
							lng: Number(ticket.destination_lng),
							address: destinationAddress,
						},
					},
				};
			})
		);

		logger.info(
			`Fetched ${ticketsWithAddresses.length} tickets for user ${userId}`
		);
		return res.status(200).json({ data: ticketsWithAddresses });
	} catch (error) {
		logger.error("Error fetching user tickets", { error });
		console.error("Error fetching user tickets", { error });
		return res.status(500).json({ error: "Internal server error" });
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
