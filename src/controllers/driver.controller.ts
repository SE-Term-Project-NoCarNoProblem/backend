import { Request, response, Response } from "express";
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


// get user roles
async function getUserRole(userId: string) {
  const isDriver = await prisma.driver.findUnique({ where: { id: userId } });
  if (isDriver) return 'DRIVER';

  const isCustomer = await prisma.customer.findUnique({ where: { id: userId } });
  if (isCustomer) return 'CUSTOMER';

  const isAdmin = await prisma.admin.findUnique({ where: { id: userId } });
  if (isAdmin) return 'ADMIN';

  const isSupport = await prisma.support.findUnique({ where: { id: userId } });
  if (isSupport) return 'SUPPORT';

  return 'UNKNOWN';
}

// get driver rating
export const getDriverRating = async (req: Request, res: Response) => {
    const userId = res.locals.user?.id;
    const { driverId } = req.params; // get driver_id from ride 
	console.log("driverId : ", driverId);
	console.log("userId : ", userId)

    try {
		if(!userId){
            return res.status(401).json({ error: 'User not authenticated'});
        }

		const role = await getUserRole(userId);

		let targetDriverId;
		if (role === 'DRIVER') {
			targetDriverId = userId;
		}else if (role === 'CUSTOMER' || role === 'ADMIN' || role === 'SUPPORT'){
			targetDriverId = driverId;
		}else {
			return res.status(403).json({error : "Unauthorized access"})
		}

		if (!targetDriverId) {
			return res.status(400).json({ error: 'Missing driver ID' });
		}

		const result = await prisma.ride.aggregate({
			_avg: {rating: true},
			_count: {rating:true},
			where: {
				driver_id: targetDriverId,
        		rating: { not: null },
			}
		})

		const hasRating = result._count.rating > 0;
		const averageRating = hasRating  && result._avg.rating !== null ? Number(result._avg.rating.toFixed(2)) : null;

		res.json({
			viewer_id: userId,
			driver_id: targetDriverId,
			average_rating: hasRating ? "⭐ " + String(averageRating) : null,
			total_rated_rides: result._count.rating,
			message: hasRating ? null : 'No ratings yet'
		});

    }catch(error) {
		console.error('Error fetching driver rating:', error);
    	res.status(500).json({ error: 'Internal server error' });
    }
}

// update driver rating 
export const updateDriverRating = async (req: Request, res: Response) => {
	const userId = res.locals.user?.id;
    const { rideId } = req.params;
  	const { rating } = req.body;
	try {
		
		if (!userId) {
			return res.status(401).json({ error: 'User not authenticated'});
		}

		const role = await getUserRole(userId);
		const ride = await prisma.ride.findUnique({where: {id : rideId}});

		if (!ride) {
			return res.status(404).json({error: "Ride not found"});
		}

		if (role === 'DRIVER' || role === 'UNKNOWN') {
			return res.status(403).json({error: "Driver cannot update their own rating."})
		}

		if (role === "CUSTOMER" && ride.customer_id != userId) {
			return res.status(403).json({ error: "Unauthorized: This ride does not belong to you" });
		}

		// Can 0 ? 
		if (typeof rating !== "number" || rating < 1 || rating > 5) {
			return res.status(400).json({error: "Rating must be a number between 1 and 5"})
		}

		const updatedRide = await prisma.ride.update({
			where: { id: rideId },
			data: { rating },
		});

		res.json({
			message: role + " updated rating successfully",
			ride_id: updatedRide.id,
			driver_id: updatedRide.driver_id,
			rating: updatedRide.rating
		})
	}catch(error) {
		console.log("Error updating driver rating", error);
		res.status(500).json({error:"Internal server error"});
	}
}