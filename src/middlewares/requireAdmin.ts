import { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";

export async function requireAdmin(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const user = res.locals.user;

	if (!user) {
		return res.status(401).json({ error: "Unauthenticated" });
	}

	// Check admin table
	const admin = await prisma.admin.findUnique({
		where: { id: user.id },
	});

	if (!admin) {
		return res.status(403).json({ error: "Admin only" });
	}

	next();
}
