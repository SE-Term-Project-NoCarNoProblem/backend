import { Request, Response } from "express";
import z from "zod";

// In-memory storage
const driverLocations = new Map<string, [number, number]>();

const locationSchema = z.object({
	lat: z.number().min(-90).max(90),
	lng: z.number().min(-180).max(180),
});

export const updateDriverLocation = async (req: Request, res: Response) => {
	try {
		// res.locals.user = { id: "driver1" };
		const driverId = res.locals.user?.id;
		// TODO: should we ensure that the user is a driver?
		if (!driverId) {
			return res.status(401).json({ error: "User not authenticated" });
		}

		const parseResult = locationSchema.safeParse(req.body);
		if (!parseResult.success) {
			return res
				.status(400)
				.json({ error: z.prettifyError(parseResult.error) });
		}
		const { lat, lng } = parseResult.data;

		if (lat === undefined || lng === undefined) {
			return res
				.status(400)
				.json({ error: "Latitude and longitude are required" });
		}

		driverLocations.set(driverId, [lat, lng]);
		return res.json({ success: true, location: driverLocations.get(driverId) });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Internal server error" });
	}
};

// GET /api/drivers
export const getDrivers = (req: Request, res: Response) => {
	// auth just to prevent spam
	if (!res.locals.user) {
		return res.status(401).json({ error: "User not authenticated" });
	}

	return res.json(Object.fromEntries(driverLocations.entries()));
};
