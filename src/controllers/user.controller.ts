import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma/client";
import { userInclude } from "../generated/prisma/models";

export async function getUser(req: Request, res: Response) {
	try {
		const userId = req.params.id;

		if (!userId) {
			return res.status(400).json({ error: "User ID is required" });
		}

		const includeParam = req.query.include as string;
		const includes = includeParam
			? includeParam.split(",").map((i) => i.trim())
			: [];

		const include: userInclude = {};

		if (includes.includes("customer")) {
			include.customer = true;
		}

		if (includes.includes("driver")) {
			include.driver = {
				include: {
					verified_driver: includes.includes("vehicles")
						? {
								include: {
									vehicle: true,
								},
							}
						: true,
					waiting_driver: true,
					rejected_driver: true,
				},
			};
		}

		if (includes.includes("admin")) {
			include.admin = true;
		}

		if (includes.includes("support")) {
			include.support = true;
		}

		const user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
			include: Object.keys(include).length > 0 ? include : undefined,
		});

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		res.json({
			success: true,
			data: user,
		});
	} catch (error) {
		console.log("Error in getUser controller:", error);
		res.status(500).json({ error: "Internal server error" });
	}
}

export async function getMe(req: Request, res: Response) {
	try {
		const userId = res.locals.user?.id;

		if (!userId) {
			return res.status(401).json({ error: "User not authenticated" });
		}

		const includeParam = req.query.include as string;
		const includes = includeParam
			? includeParam.split(",").map((i) => i.trim())
			: [];

		const include: userInclude = {};

		if (includes.includes("customer")) {
			include.customer = true;
		}

		if (includes.includes("driver")) {
			include.driver = {
				include: {
					verified_driver: includes.includes("vehicles")
						? {
								include: {
									vehicle: true,
								},
							}
						: true,
					waiting_driver: true,
					rejected_driver: true,
				},
			};
		}

		if (includes.includes("admin")) {
			include.admin = true;
		}

		if (includes.includes("support")) {
			include.support = true;
		}

		const user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
			include: Object.keys(include).length > 0 ? include : undefined,
		});

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		res.json({
			success: true,
			data: user,
		});
	} catch (error) {
		console.log("Error in getMe controller:", error);
		res.status(500).json({ error: "Internal server error" });
	}
}

export async function patchMe(req: Request, res: Response) {
	try {
		const userId = res.locals.user?.id;

		if (!userId) {
			return res.status(401).json({ error: "User not authenticated" });
		}

		const {
			fullname,
			email,
			gender,
			phone_number,
			favorite_pickup_location,
			favorite_dropoff_location,
			...otherfields
		} = req.body;

		const allowedFields = [
			"fullname",
			"email",
			"gender",
			"phone_number",
			"favorite_pickup_location",
			"favorite_dropoff_location",
		];
		const invalidFields = Object.keys(req.body).filter(
			(field) => !allowedFields.includes(field)
		);

		if (invalidFields.length > 0) {
			return res.status(400).json({
				error: `Invalid fields: ${invalidFields.join(", ")}. Only ${allowedFields.join(", ")} can be updated.`,
			});
		}

		//If user is a verified driver after update data change to waiting driver
		const existingUser = await prisma.user.findUnique({
			where: { id: userId },
			include: {
				customer: true,
				driver: {
					include: {
						verified_driver: true,
					},
				},
			},
		});
		if (!existingUser) {
			return res.status(404).json({ error: "User not found" });
		}

		if (
			(favorite_pickup_location || favorite_dropoff_location) &&
			!existingUser.customer
		) {
			return res.status(400).json({
				error: "Favorite locations can only be updated by customers",
			});
		}

		const result = await prisma.$transaction(async (tx) => {
			const updatedUser = await tx.user.update({
				where: { id: userId },
				data: {
					...(fullname && { fullname }),
					...(email && { email }),
					...(phone_number && { phone_number }),
					...(gender && { gender }),
				},
			});

			if (existingUser.customer) {
				if (favorite_pickup_location) {
					await tx.$executeRaw`
                        UPDATE customer 
                        SET favorite_pickup_location = ${`(${favorite_pickup_location})`}::point
                        WHERE id = ${userId}::uuid
                    `;
				}

				if (favorite_dropoff_location) {
					await tx.$executeRaw`
                        UPDATE customer 
                        SET favorite_dropoff_location = ${`(${favorite_dropoff_location})`}::point
                        WHERE id = ${userId}::uuid
                    `;
				}
			}

			if (existingUser.driver?.verified_driver) {
				const verifiedDriverId = existingUser.driver.verified_driver.id;

				// delete all vehicles associated with this verified driver
				await tx.vehicle.deleteMany({
					where: { driver_id: verifiedDriverId },
				});

				// Then delete the verified driver
				await tx.verified_driver.delete({
					where: { id: verifiedDriverId },
				});

				// Finally, add to waiting driver
				await tx.waiting_driver.create({
					data: {
						id: existingUser.driver.id,
						requested_date: new Date(),
					},
				});
			}

			const finalUser = await tx.user.findUnique({
				where: { id: userId },
				include: {
					customer: true,
					driver: {
						include: {
							verified_driver: true,
							waiting_driver: true,
						},
					},
				},
			});

			return finalUser;
		});

		const responseData = {
			id: result?.id,
			fullname: result?.fullname,
			email: result?.email,
			phone_number: result?.phone_number,
			profile_pic: result?.profile_pic,
			gender: result?.gender,
			...(result?.customer &&
				(result.customer as any)?.favorite_pickup_location && {
					favorite_pickup_location: (result.customer as any)
						.favorite_pickup_location,
				}),
			...(result?.customer &&
				(result.customer as any)?.favorite_dropoff_location && {
					favorite_dropoff_location: (result.customer as any)
						.favorite_dropoff_location,
				}),
		};

		res.json({
			success: true,
			data: responseData,
			message: existingUser.driver?.verified_driver
				? "User updated successfully. Driver status changed from verified to waiting due to profile update."
				: "User updated successfully.",
		});
	} catch (error) {
		console.log("Error in patchMe controller:", error);

		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2002") {
				return res
					.status(400)
					.json({ error: "Email or phone number already exists" });
			}
		}
		res.status(500).json({ error: "Internal server error" });
	}
}

export async function updateUserStatus(req: Request, res: Response) {
	const { action, until } = req.body;
	const userId = req.params.id;
	const adminId = res.locals.user?.id;

	if (!adminId) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	const admin = await prisma.admin.findUnique({ where: { id: adminId } });
	if (!admin) {
		return res.status(403).json({ error: "Only admins has privilege" });
	}

	if (!userId) {
		return res.status(400).json({ error: "User ID required" });
	}

	if (!["activate", "suspend"].includes(action)) {
		return res.status(400).json({
			error: "Invalid action. Allowed: activate, suspend",
		});
	}

	try {
		let data: any = {};

		if (action === "activate") {
			data = {
				suspended: false,
				suspended_until: null,
				suspended_by_id: null,
			};
		}

		if (action === "suspend") {
			data = {
				suspended: true,
				suspended_by_id: adminId,
				suspended_until: until ? new Date(until) : null,
			};
		}

		const updated = await prisma.user.update({
			where: { id: userId },
			data,
			select: {
				id: true,
				fullname: true,
				email: true,
				suspended: true,
				suspended_until: true,
				suspended_by_id: true,
			},
		});

		return res.status(200).json({ user: updated });
	} catch (err) {
		console.error("Failed to update user status", err);
		return res.status(500).json({ error: "Failed to update user status" });
	}
}

export async function getAllUsers(req: Request, res: Response) {
	try {
		const users = await prisma.user.findMany({
			select: {
				id: true,
				fullname: true,
				email: true,
				driver: {
					select: {
						verified_driver: {
							select: {
								status: true, // "busy", "suspended", "free"
								ride: {
									select: {
										rating: true,
									},
								},
							},
						},
						waiting_driver: {
							select: { requested_date: true },
						},
						rejected_driver: {
							select: { id: true },
						},
					},
				},
				customer: {
					select: { id: true },
				},
			},
		});

		const formatted = users.map((u) => {
			let role = "CUSTOMER";
			let status = "Active";
			let rating: number | null = null;

			if (u.driver) {
				role = "DRIVER";

				if (u.driver.verified_driver) {
					status = u.driver.verified_driver.status;

					// Calculate average rating
					const rideRatings = u.driver.verified_driver.ride
						.map((r) => r.rating)
						.filter((r): r is number => r !== null && r !== undefined);

					if (rideRatings.length > 0) {
						rating =
							rideRatings.reduce((sum, r) => sum + r, 0) / rideRatings.length;
					}
				} else if (u.driver.waiting_driver) {
					status = "Waiting for approval";
				} else if (u.driver.rejected_driver) {
					status = "Rejected";
				} else {
					status = "Unknown";
				}
			}

			return {
				id: u.id,
				name: u.fullname,
				email: u.email,
				role,
				status,
				rating: rating ? parseFloat(rating.toFixed(1)) : null,
			};
		});

		return res.json(formatted);
	} catch (error) {
		console.error("❌ Error fetching users:", error);
		return res.status(500).json({ error: "Failed to fetch users" });
	}
}
