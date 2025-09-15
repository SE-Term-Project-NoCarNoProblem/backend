import { Request, Response } from "express";
import { z, ZodError } from "zod";
import {
  getIdToCustomerMap,
  createRequest as storeCreate,
  deleteRequest as storeDelete,
  nearbyRequests as storeNearby,
} from "../lib/requestStore";

const CreateSchema = z.object({
  service: z.string().min(1),
  note_to_driver: z.string().optional().nullable(),
  fare: z.number().nonnegative().optional().nullable(),
  distance_m: z.number().int().nonnegative().optional().nullable(),
  pickup_lng: z.number(), pickup_lat: z.number(),
  dropoff_lng: z.number(), dropoff_lat: z.number(),
});

export async function createRequest(req: Request, res: Response) {
  const customer_id = res.locals.user?.id;
  if (!customer_id) return res.status(401).json({ error: "User not authenticated" });

  try {
    const b = CreateSchema.parse(req.body);
    const r = storeCreate({
      customer_id: customer_id,
      service: b.service,
      note_to_driver: b.note_to_driver ?? null,
      fare: b.fare ?? null,
      distance_m: b.distance_m ?? null,
      pickup_lng: b.pickup_lng, pickup_lat: b.pickup_lat,
      dropoff_lng: b.dropoff_lng, dropoff_lat: b.dropoff_lat,
    });
    return res.status(201).json(r);
	} catch (err: unknown) {
	if (err instanceof ZodError) {
		return res.status(400).json({
		error: "validation_error",
		issues: err.issues, 
		});
	}
	console.error(err);
	return res.status(500).json({ error: "server_error" });
	}
}

export async function deleteRequest(req: Request, res: Response) {
  const requesterId = res.locals.user?.id;
  if (!requesterId) return res.status(401).json({ error: "User not authenticated" });
  
  const rideId = req.params.id;
  const customerId = getIdToCustomerMap().get(rideId);

  if (requesterId !== customerId) {
    return res.status(403).json({ error: "Can only delete a user's own ride request." });
  }
  
  const ok = storeDelete(rideId);
  if (!ok) return res.status(404).json({ error: "not_found" });
  return res.status(204).end();
}

export async function nearbyRequests(req: Request, res: Response) {
  // auth check just to prevent spam
  const userId = res.locals.user?.id;
  if (!userId) return res.status(401).json({ error: "User not authenticated" });

  const lat = Number(req.query.lat);
  const lng = Number(req.query.lng);
  const radius = Number(req.query.radius_m || 3000);
  if (Number.isNaN(lat) || Number.isNaN(lng))
    return res.status(400).json({ error: "invalid_coordinates" });
  return res.json(storeNearby(lat, lng, radius));
}
