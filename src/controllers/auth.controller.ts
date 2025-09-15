import { Request, Response } from "express";
import { supabase } from "../lib/supabase";
import { logger } from "../utils/logger";
import z from "zod";
import { prisma } from "../lib/prisma";

const cookieAge = 30 * 24 * 60 * 60 * 1000;

const registerSchema = z.object({
	email: z.email(),
	password: z.string().min(8),
});

const loginSchema = z.object({
	email: z.email(),
	password: z.string(),
});

export async function register(req: Request, res: Response) {
	// TODO: for now, assume only password login & no confirmation email

	const { data: form, success, error } = registerSchema.safeParse(req.body);
	if (!success) {
		return res.status(400).send(z.prettifyError(error));
	}

	const result = await supabase.auth.signUp({
		email: form.email,
		password: form.password,
	});

	if (result.error) {
		logger.error(result.error.message);
		return res.status(400).send({ message: result.error.message });
	}

	const token = result.data.session?.access_token;
	// res.cookie("token", token, {
	// 	httpOnly: true,
	// 	maxAge: cookieAge,
	// });
	return res.send({ token: token });
}

export async function login(req: Request, res: Response) {
	const { data: form, success, error } = loginSchema.safeParse(req.body);
	if (!success) {
		return res.status(400).send(z.prettifyError(error));
	}

	const result = await supabase.auth.signInWithPassword({
		email: form.email,
		password: form.password,
	});

	if (result.error) {
		logger.error(result.error.code);
		return res.status(400).send({ message: result.error.message });
	}

	const token = result.data.session?.access_token;

	// res.cookie("token", result.data.session?.access_token, {
	// 	httpOnly: true,
	// 	maxAge: cookieAge,
	// });
	// return res.send(result.data.session?.access_token);
	const user = await prisma.user.findUnique({
		where: {
			id: result.data.user.id,
		},
	});
	return res.send({ token: token, status: user ? "ready" : "requires-setup" });
}

export async function oauthGoogleRedirect(req: Request, res: Response) {}

export async function passwordConfirmRedirect(req: Request, res: Response) {}

const formSchema = z.object({
	fullName: z.string(),
	phone_number: z.string(),
	idNumber: z.string().length(13),
	gender: z.enum(["male", "female", "nonbinary"]),
	// age: "", // TODO: add age in DB?
	role: z.enum(["driver", "customer"]),
	// profilePic: null as File | null,
	// idPic: null as File | null,
	// licensePic: null as File | null,
});
export async function accountSetup(req: Request, res: Response) {
	const user = res.locals.user;
	if (!user) {
		return res.status(401).json({ error: "User not authenticated" });
	}

	const parsed = formSchema.safeParse(req.body);
	if (parsed.error) {
		return res.status(400).send(z.treeifyError(parsed.error));
	}
	const form = parsed.data;

	const existingUserCount = await prisma.user.count({
		where: {
			id: user.id,
		},
	});
	if (existingUserCount)
		return res.status(400).send("Account information is already present");

	// TODO: should be a transaction
	const createdUser = await prisma.user.create({
		data: {
			id: user.id,
			email: user.email,
			fullname: form.fullName,
			phone_number: form.phone_number,
			gender: form.gender,
			// TODO: id pic & profile pic
		},
	});

	if (form.role == "driver") {
		await prisma.driver.create({
			data: {
				id: user.id,
				// TODO: license pic
			},
		});
	} else if (form.role == "customer") {
		await prisma.customer.create({
			data: {
				id: user.id,
				// TODO: license pic
			},
		});
	}

	return res.send(createdUser);
}
