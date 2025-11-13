import { Request, Response } from "express";
import { supabase } from "../lib/supabase";
import { prisma } from "../lib/prisma";
import { logger } from "../utils/logger";

export const uploadProfilePicture = async (req: Request, res: Response) => {
	try {
		const userId = res.locals.user?.id;
		const file = req.file;

		if (!userId) {
			return res.status(401).json({ error: "User not authenticated" });
		}

		if (!file) {
			return res.status(400).json({ error: "No file uploaded" });
		}

		const maxFileSize = 5 * 1024 * 1024; // 5MB
		if (file.size > maxFileSize) {
			return res.status(400).json({
				error: "File too large. Maximum file size is 5MB",
			});
		}

		const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
		if (!allowedTypes.includes(file.mimetype)) {
			return res.status(400).json({
				error: "Invalid file type. Only JPEG, PNG, and WebP are allowed",
			});
		}

		//create file path
		const filePath = `${userId}/avatar.webp`;

		//Upload to Supabase Storage
		const { data: uploadData, error: uploadError } = await supabase.storage
			.from("profile_pic")
			.upload(filePath, file.buffer, {
				contentType: "image/webp",
				upsert: true,
			});

		if (uploadError) {
			logger.error("Storage upload error:", uploadError);
			return res.status(500).json({ error: "Failed to upload file" });
		}

		//get Public URL
		const { data: urlData } = supabase.storage
			.from("profile_pic")
			.getPublicUrl(filePath);

		const profilePicUrl = urlData.publicUrl;

		//Update user profile_pic in database and include driver relations
		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: { profile_pic: profilePicUrl },
			select: {
				id: true,
				fullname: true,
				email: true,
				phone_number: true,
				profile_pic: true,
				driver: {
					include: {
						verified_driver: true,
					},
				},
			},
		});

		// Move verified driver to waiting_driver table
		if (updatedUser.driver?.verified_driver) {
			// Remove from verified_driver
			await prisma.verified_driver.delete({
				where: { id: userId },
			});

			// Add to waiting_driver
			await prisma.waiting_driver.create({
				data: {
					id: userId,
					requested_date: new Date(),
				},
			});

			logger.info(`Driver moved to waiting status for user ${userId}`);
		}

		logger.info(`Profile picture updated for user ${userId}`);

		res.status(200).json({
			message: "Profile picture uploaded successfully",
			user: {
				id: updatedUser.id,
				fullname: updatedUser.fullname,
				email: updatedUser.email,
				phone_number: updatedUser.phone_number,
				profile_pic: updatedUser.profile_pic,
			},
			profilePicUrl,
			...(updatedUser.driver?.verified_driver && {
				driverStatusUpdated: true,
				statusMessage: "Driver moved from verified to waiting status",
			}),
		});
	} catch (error) {
		logger.error("Profile picture update error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const deleteProfilePicture = async (req: Request, res: Response) => {
	try {
		const userId = res.locals.user?.id;

		if (!userId) {
			return res.status(401).json({ error: "User not authenticated" });
		}

		const user = await prisma.user.findUnique({
			where: { id: userId },
			select: { profile_pic: true },
		});

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		if (!user.profile_pic) {
			return res.status(400).json({
				error: "User has no profile picture to delete",
			});
		}

		const filePath = `${userId}/avatar.webp`;

		const { error: deleteError } = await supabase.storage
			.from("profile_pic")
			.remove([filePath]);

		if (deleteError) {
			logger.error("Storage delete error:", deleteError);

			if (
				deleteError.message?.includes("not found") ||
				deleteError.message?.includes("does not exist")
			) {
				return res.status(404).json({
					error: "Profile picture file not found in storage",
				});
			}

			return res.status(500).json({
				error: "Failed to delete profile picture from storage",
			});
		}

		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: { profile_pic: null },
			select: {
				id: true,
				fullname: true,
				email: true,
				phone_number: true,
				profile_pic: true,
			},
		});
		logger.info(`Profile picture deleted for user ${userId}`);

		res.status(200).json({
			message: "Profile picture deleted successfully",
			user: updatedUser,
		});
	} catch (error) {
		logger.error("Profile picture delete error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const uploadIdPicture = async (req: Request, res: Response) => {
	try {
		const userId = res.locals.user?.id;
		const file = req.file;

		if (!userId) {
			return res.status(401).json({ error: "User not authenticated" });
		}

		if (!file) {
			return res.status(400).json({ error: "No file uploaded" });
		}

		const existingUser = await prisma.user.findUnique({
			where: { id: userId },
			select: { id_pic: true },
		});

		if (existingUser?.id_pic) {
			return res.status(400).json({
				error:
					"ID picture already exists. Please delete the existing one before uploading a new one.",
			});
		}

		const maxFileSize = 5 * 1024 * 1024; // 5MB
		if (file.size > maxFileSize) {
			return res.status(400).json({
				error: "File too large. Maximum file size is 5MB",
			});
		}

		const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
		if (!allowedTypes.includes(file.mimetype)) {
			return res.status(400).json({
				error: "Invalid file type. Only JPEG, PNG, and WebP are allowed",
			});
		}

		//create file path
		const filePath = `${userId}/id_document.webp`;

		const { data: uploadData, error: uploadError } = await supabase.storage
			.from("id_pic")
			.upload(filePath, file.buffer, {
				contentType: "image/webp",
				upsert: true,
			});

		if (uploadError) {
			logger.error("Storage upload error:", uploadError);
			return res.status(500).json({ error: "Failed to upload file" });
		}

		// For private bucket, we don't get public URL but store the file path
		const idPicPath = filePath;

		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: { id_pic: idPicPath },
			select: {
				id: true,
				fullname: true,
				email: true,
				phone_number: true,
				id_pic: true,
				driver: {
					include: {
						verified_driver: true,
					},
				},
			},
		});

		if (updatedUser.driver?.verified_driver) {
			await prisma.verified_driver.delete({
				where: { id: userId },
			});

			await prisma.waiting_driver.create({
				data: {
					id: userId,
					requested_date: new Date(),
				},
			});

			logger.info(`Driver moved to waiting status for user ${userId}`);
		}

		logger.info(`ID picture updated for user ${userId}`);

		res.status(200).json({
			message: "ID picture uploaded successfully",
			user: {
				id: updatedUser.id,
				fullname: updatedUser.fullname,
				email: updatedUser.email,
				phone_number: updatedUser.phone_number,
				id_pic: updatedUser.id_pic,
			},
			...(updatedUser.driver?.verified_driver && {
				driverStatusUpdated: true,
				statusMessage: "Driver moved from verified to waiting status",
			}),
		});
	} catch (error) {
		logger.error("ID picture update error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getIdPicture = async (req: Request, res: Response) => {
	try {
		const userId = res.locals.user?.id;

		if (!userId) {
			return res.status(401).json({ error: "User not authenticated" });
		}

		const user = await prisma.user.findUnique({
			where: { id: userId },
			select: { id_pic: true },
		});

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		if (!user.id_pic) {
			return res.status(404).json({
				error: "User has no ID picture",
			});
		}

		// Create signed URL for private access
		const { data: signedUrlData, error: signedUrlError } =
			await supabase.storage.from("id_pic").createSignedUrl(user.id_pic, 3600); // 1 hour expiry

		if (signedUrlError) {
			logger.error("Signed URL creation error:", signedUrlError);
			return res.status(500).json({
				error: "Failed to generate access URL for ID picture",
			});
		}

		logger.info(`ID picture accessed for user ${userId}`);

		res.status(200).json({
			message: "ID picture retrieved successfully",
			idPicUrl: signedUrlData.signedUrl,
			expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(), // 1 hour from now
		});
	} catch (error) {
		logger.error("ID picture retrieval error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const uploadLicensePicture = async (req: Request, res: Response) => {
	try {
		const userId = res.locals.user?.id;
		const file = req.file;

		if (!userId) {
			return res.status(401).json({ error: "User not authenticated" });
		}

		if (!file) {
			return res.status(400).json({ error: "No file uploaded" });
		}

		// Check if user is a driver and has required fields
		const existingUser = await prisma.user.findUnique({
			where: { id: userId },
			select: {
				id_pic: true,
				driver: {
					select: {
						id: true,
						license_pic: true,
					},
				},
			},
		});

		// Check if user is a driver
		if (!existingUser?.driver) {
			return res.status(403).json({
				error: "Only drivers can upload license pictures",
			});
		}

		// Check if user has ID picture first
		if (!existingUser.id_pic) {
			return res.status(400).json({
				error: "ID picture is required before uploading license picture",
			});
		}

		// Check if license picture already exists
		if (existingUser.driver.license_pic) {
			return res.status(400).json({
				error:
					"License picture already exists. Please delete the existing one before uploading a new one.",
			});
		}

		const maxFileSize = 5 * 1024 * 1024; // 5MB
		if (file.size > maxFileSize) {
			return res.status(400).json({
				error: "File too large. Maximum file size is 5MB",
			});
		}

		const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
		if (!allowedTypes.includes(file.mimetype)) {
			return res.status(400).json({
				error: "Invalid file type. Only JPEG, PNG, and WebP are allowed",
			});
		}

		const filePath = `${userId}/license_document.webp`;

		// For private bucket, we don't get public URL but store the file path
		const { data: uploadData, error: uploadError } = await supabase.storage
			.from("license_pic")
			.upload(filePath, file.buffer, {
				contentType: "image/webp",
				upsert: true,
			});

		if (uploadError) {
			logger.error("Storage upload error:", uploadError);
			return res.status(500).json({ error: "Failed to upload file" });
		}

		// For private bucket, we don't get public URL but store the file path
		const licensePicPath = filePath;

		const updatedDriver = await prisma.driver.update({
			where: { id: userId },
			data: { license_pic: licensePicPath },
			select: {
				id: true,
				license_pic: true,
				user: {
					select: {
						id: true,
						fullname: true,
						email: true,
						phone_number: true,
					},
				},
				verified_driver: true,
			},
		});

		if (updatedDriver.verified_driver) {
			await prisma.verified_driver.delete({
				where: { id: userId },
			});

			await prisma.waiting_driver.create({
				data: {
					id: userId,
					requested_date: new Date(),
				},
			});

			logger.info(`Driver moved to waiting status for user ${userId}`);
		}

		logger.info(`License picture updated for user ${userId}`);

		res.status(200).json({
			message: "License picture uploaded successfully",
			user: {
				id: updatedDriver.user.id,
				fullname: updatedDriver.user.fullname,
				email: updatedDriver.user.email,
				phone_number: updatedDriver.user.phone_number,
			},
			driver: {
				id: updatedDriver.id,
				license_pic: updatedDriver.license_pic,
			},
			...(updatedDriver.verified_driver && {
				driverStatusUpdated: true,
				statusMessage: "Driver moved from verified to waiting status",
			}),
		});
	} catch (error) {
		logger.error("License picture update error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getLicensePicture = async (req: Request, res: Response) => {
	try {
		const userId = res.locals.user?.id;

		if (!userId) {
			return res.status(401).json({ error: "User not authenticated" });
		}

		const driver = await prisma.driver.findUnique({
			where: { id: userId },
			select: { license_pic: true },
		});

		if (!driver) {
			return res.status(403).json({ error: "User is not a driver" });
		}

		if (!driver.license_pic) {
			return res.status(404).json({
				error: "Driver has no license picture",
			});
		}

		// Create signed URL for private access
		const { data: signedUrlData, error: signedUrlError } =
			await supabase.storage
				.from("license_pic")
				.createSignedUrl(driver.license_pic, 3600); // 1 hour expiry

		if (signedUrlError) {
			logger.error("Signed URL creation error:", signedUrlError);
			return res.status(500).json({
				error: "Failed to generate access URL for license picture",
			});
		}

		logger.info(`License picture accessed for user ${userId}`);

		res.status(200).json({
			message: "License picture retrieved successfully",
			licensePicUrl: signedUrlData.signedUrl,
			expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(), // 1 hour from now
		});
	} catch (error) {
		logger.error("License picture retrieval error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};
