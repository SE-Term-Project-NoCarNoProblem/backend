import { Request, Response } from "express";

// In-memory storage
const driverLocations = new Map<string, [number, number]>();

export const updateDriverLocation = async (req: Request, res: Response) => {
    try {
        // res.locals.user = { id: "driver1" };
        const driverId = res.locals.user?.id;
        const { lat, lng } = req.body;

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