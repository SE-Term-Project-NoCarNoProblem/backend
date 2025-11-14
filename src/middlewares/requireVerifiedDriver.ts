import { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function requireVerifiedDriver(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const driverId = res.locals.user?.id;
	if (!driverId) return res.status(401).json({ error: "User not authenticated" });

	const verified = await prisma.verified_driver.findUnique({
		where: { id: driverId },
	});

	if (!verified) return res.status(403).json({ error: "Driver not verified" });

	next();
}
