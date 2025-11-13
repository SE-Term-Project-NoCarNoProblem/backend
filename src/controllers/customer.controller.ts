import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
export const viewCustomer = async (req: Request, res: Response) => {
	try {
		const rideId = req.params.rideId;

		if (!rideId) {
			return res.status(400).json({ error: "Ride ID is required" });
		}

		const data = await prisma.ride.findUnique({
			where: {
				id: rideId,
			},
			select: {
				customer: {
					select: {
						user: {
							select: {
								fullname: true,
								email: true,
								phone_number: true,
								age: true,
							},
						},
					},
				},
			},
		});

		if (!data) {
			return res.status(404).json({ error: "User not found" });
		}

		res.json({
			success: true,
			data: data,
		});
	} catch (error) {
		console.log("Error in viewDriver controller:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};
