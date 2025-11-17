import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import z from "zod";
import { logger } from "../utils/logger";
import { Socket } from "socket.io";
import { io } from "../app";
import { getUserSocketIds } from "../lib/socketSessions";

export async function getChatMessages(req: Request, res: Response) {
	const userId = res.locals.user!.id;
	const rideId = req.params.rideId;

	const ridePassengers = await prisma.ride.findUnique({
		where: { id: rideId },
		select: { customer_id: true, driver_id: true },
	});

	if (!ridePassengers) {
		return res.status(404).json({ error: "Ride not found" });
	}

	if (
		userId !== ridePassengers.customer_id &&
		userId !== ridePassengers.driver_id
	) {
		return res.status(403).json({ error: "You are not part of this ride" });
	}

	try {
		const messages = await prisma.chat_log.findMany({
			where: { ride_id: rideId },
			orderBy: { timestamp: "desc" },
			// take: 50,
		});
		return res.status(200).json({
			messages: messages.map((m) => ({
				id: m.id,
				content: m.message,
				rideId: m.ride_id,
				timestamp: m.timestamp,
				senderId: m.is_customer_sender
					? ridePassengers.customer_id
					: ridePassengers.driver_id,
			})),
		});
	} catch (error) {
		logger.error("Error fetching chat messages:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
}

const createMessageSchema = z.object({
	content: z.string().min(1).max(1000),
});
export async function createChatMessage(req: Request, res: Response) {
	const userId = res.locals.user!.id;

	const rideId = req.params.rideId;

	const {
		data: body,
		success: success,
		error: error,
	} = createMessageSchema.safeParse(req.body);

	if (!success) {
		return res.status(400).json({
			error: "Invalid message format",
			details: z.flattenError(error),
		});
	}

	try {
		const ridePassengers = await prisma.ride.findUnique({
			where: { id: rideId },
			select: { customer_id: true, driver_id: true },
		});

		if (!ridePassengers) {
			return res.status(404).json({ error: "Ride not found" });
		}

		if (
			userId !== ridePassengers.customer_id &&
			userId !== ridePassengers.driver_id
		) {
			return res.status(403).json({ error: "You are not part of this ride" });
		}

		const isCustomerSender = userId === ridePassengers.customer_id;

		const newMessage = await prisma.chat_log.create({
			data: {
				ride_id: rideId,
				is_customer_sender: isCustomerSender,
				message: body.content,
				timestamp: new Date(),
			},
		});

		// emit to clients
		const sendTo = (socketId: string, message: string) => {
			io.to(socketId).emit("chat:new_message", {
				rideId,
				senderId: userId,
				content: message,
			});
		};
		getUserSocketIds(ridePassengers.customer_id)?.forEach((_, socketId) =>
			sendTo(socketId, body.content)
		);
		getUserSocketIds(ridePassengers.driver_id)?.forEach((_, socketId) =>
			sendTo(socketId, body.content)
		);

		return res.status(201).json({ message: newMessage });
	} catch (error) {
		logger.error("Error creating chat message:", error);
		return res.status(500).json({ error: "Internal server error" });
	}
}

export function registerChatEvents(socket: Socket) {
	// Soon TM
}
