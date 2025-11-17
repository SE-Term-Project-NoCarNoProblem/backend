import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { supabase } from "../lib/supabase";

export async function approveDriver(req: Request, res: Response) {
	const { driverId } = req.params;
	const adminId = res.locals.user.id;

	try {
		// Check that the driver is currently waiting
		const waiting = await prisma.waiting_driver.findUnique({
			where: { id: driverId },
		});

		if (!waiting) {
			return res.status(400).json({ error: "Driver is not pending approval" });
		}

		await prisma.$transaction(async (tx) => {
			// Remove from waiting
			await tx.waiting_driver.delete({
				where: { id: driverId },
			});

			// Insert into verified
			await tx.verified_driver.create({
				data: {
					id: driverId,
					admin_id: adminId,
					timestamp: new Date(),
					status: "free",
				},
			});
		});

		return res.json({ message: "Driver approved successfully" });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Failed to approve driver" });
	}
}

export async function rejectDriver(req: Request, res: Response) {
	const { driverId } = req.params;
	const adminId = res.locals.user.id;

	try {
		// Check that the driver is waiting
		const waiting = await prisma.waiting_driver.findUnique({
			where: { id: driverId },
		});

		if (!waiting) {
			return res.status(400).json({ error: "Driver is not pending approval" });
		}

		await prisma.$transaction(async (tx) => {
			await tx.waiting_driver.delete({
				where: { id: driverId },
			});

			await tx.rejected_driver.create({
				data: {
					id: driverId,
					admin_id: adminId,
					timestamp: new Date(),
				},
			});
		});

		return res.json({ message: "Driver rejected successfully" });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Failed to reject driver" });
	}
}

export async function getWaitingDrivers(req: Request, res: Response) {
	try {
		const drivers = await prisma.waiting_driver.findMany({
			include: {
				driver: {
					include: {
						user: {
							select: {
								id: true,
								fullname: true,
								email: true,
								phone_number: true,
								profile_pic: true,
								id_pic: true,
								age: true,
								gender: true,
							},
						},
					},
				},
			},
		});

		// Generate signed URLs for id_pic and license_pic
		const driversWithUrls = await Promise.all(
			drivers.map(async (driver) => {
				let idPicUrl = null;
				let licensePicUrl = null;

				// Generate signed URL for id_pic
				if (driver.driver.user.id_pic) {
					const { data: idPicData } = await supabase.storage
						.from("id_pic")
						.createSignedUrl(driver.driver.user.id_pic, 3600);
					idPicUrl = idPicData?.signedUrl || null;
				}

				// Generate signed URL for license_pic
				if (driver.driver.license_pic) {
					const { data: licensePicData } = await supabase.storage
						.from("license_pic")
						.createSignedUrl(driver.driver.license_pic, 3600);
					licensePicUrl = licensePicData?.signedUrl || null;
				}

				return {
					...driver,
					driver: {
						...driver.driver,
						license_pic: licensePicUrl,
						user: {
							...driver.driver.user,
							id_pic: idPicUrl,
						},
					},
				};
			})
		);

		return res.json(driversWithUrls);
	} catch (error) {
		console.error("Error in getWaitingDrivers:", error);
		return res.status(500).json({ error: "Failed to fetch waiting drivers" });
	}
}

export async function getApprovedDrivers(req: Request, res: Response) {
	const drivers = await prisma.verified_driver.findMany();
	return res.json(drivers);
}

export async function getRejectedDrivers(req: Request, res: Response) {
	const drivers = await prisma.rejected_driver.findMany();
	return res.json(drivers);
}

export async function getAllDrivers(req: Request, res: Response) {
	try {
		const waiting = await prisma.waiting_driver.findMany();
		const approved = await prisma.verified_driver.findMany();
		const rejected = await prisma.rejected_driver.findMany();

		const data = [
			...waiting.map((d) => ({ ...d, driver_status: "Pending" })),
			...approved.map((d) => ({ ...d, driver_status: "Active" })),
			...rejected.map((d) => ({ ...d, driver_status: "Rejected" })),
		];

		return res.json(data);
	} catch (e) {
		return res.status(500).json({ error: "Failed to fetch drivers" });
	}
}
