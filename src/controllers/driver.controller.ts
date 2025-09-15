import { Request, Response } from "express";
import z from "zod";
import { haversineM } from "../utils/geo";

// In-memory storage
const driverLocations = new Map<string, [number, number]>();

const locationSchema = z.object({
	lat: z.number().min(-90).max(90),
	lng: z.number().min(-180).max(180),
});

const nearbyQuerySchema = z.object({
  lat: z.coerce.number().min(-90).max(90),
  lng: z.coerce.number().min(-180).max(180),
  radius_m: z.coerce.number().int().min(50).max(5000).default(3000), // 3 km radius
});

export const updateDriverLocation = async (req: Request, res: Response) => {
	try {
		// res.locals.user = { id: "driver1" };
		const driverId = res.locals.user?.id;
		const parseResult = locationSchema.safeParse(req.body);
		if (!parseResult.success) {
			return res
				.status(400)
				.json({ error: z.prettifyError(parseResult.error) });
		}
		const { lat, lng } = parseResult.data;

		if (!driverId) {
			return res.status(401).json({ error: "Unauthorized" });
		}

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
	return res.json(Object.fromEntries(driverLocations.entries()));
};


export const getNearbyDrivers = (req: Request, res: Response) => {
  const parsed = nearbyQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ error: "validation_error", issues: parsed.error.issues });
  }
  const { lat, lng, radius_m } = parsed.data;

  const hits: Array<{ driver_id: string; lat: number; lng: number; distance_m: number }> = [];

  for (const [id, [dLat, dLng]] of driverLocations.entries()) {
    const d = haversineM(lat, lng, dLat, dLng);
    if (d <= radius_m) {
      hits.push({ driver_id: id, lat: dLat, lng: dLng, distance_m: Math.round(d) });
    }
  }

  hits.sort((a, b) => a.distance_m - b.distance_m);
  return res.json(hits.slice(0, 50));
};