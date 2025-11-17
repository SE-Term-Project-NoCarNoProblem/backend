import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function getAdminStats(req: Request, res: Response) {
	try {
		const adminId = res.locals.user?.id;

		if (!adminId) {
			return res.status(401).json({ error: "Unauthorized" });
		}

		const admin = await prisma.admin.findUnique({ where: { id: adminId } });
		if (!admin) {
			return res.status(403).json({ error: "Only admins have privilege" });
		}

		const suspendedCustomers = await prisma.user.count({
			where: {
				suspended: true,
				customer: {
					isNot: null,
				},
			},
		});

		const suspendedDrivers = await prisma.user.count({
			where: {
				suspended: true,
				driver: {
					isNot: null,
				},
			},
		});

		const bannedCustomers = await prisma.user.count({
			where: {
				suspended: true,
				suspended_until: null,
				customer: {
					isNot: null,
				},
			},
		});

		const bannedDrivers = await prisma.user.count({
			where: {
				suspended: true,
				suspended_until: null,
				driver: {
					isNot: null,
				},
			},
		});

		return res.json({
			success: true,
			data: {
				suspendedCustomers,
				suspendedDrivers,
				bannedCustomers,
				bannedDrivers,
			},
		});
	} catch (error) {
		console.error("Error fetching admin stats:", error);
		return res.status(500).json({ error: "Failed to fetch admin statistics" });
	}
}
