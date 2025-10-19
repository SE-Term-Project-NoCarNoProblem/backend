import { Request, Response } from "express";
import z from "zod";
import { haversineM } from "../utils/geo";
import { prisma } from '../lib/prisma';

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

export const viewDriver=async (req:Request,res:Response)=>{
	
	try{
			const rideId=req.params.rideId;
			
			if(!rideId){
				return res.status(400).json({ error: 'Ride ID is required'});
			}
	
			const data = await prisma.ride.findUnique({
				where: {
					id: rideId
				},select:{
					rating:true,
					verified_driver:{
						select:{
							vehicle:{
								select:{
									model:true,
									registration:true,
								}
							},
							driver:{
								select:{
									user:{
										select:{
											fullname:true,
											email:true,
											phone_number:true,
											age:true,
										}
									}
								}
							}
						}
					}
				}
			});
	
			if(!data){
				return res.status(404).json({ error: 'User not found'});
			}
	
			res.json({
				success: true,
				data: data
			});
		}catch (error){
			console.log('Error in viewDriver controller:', error);
			res.status(500).json({error: 'Internal server error'});
		}
	
}