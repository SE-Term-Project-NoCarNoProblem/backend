import { Request, Response } from "express";
import { supabase } from "../lib/supabase";
import { logger } from "../utils/logger";

const cookieAge = 30 * 24 * 60 * 60 * 1000;

export async function register(req: Request, res: Response) {
	// TODO: for now, assume only password login & no confirmation email
	const result = await supabase.auth.signUp({
		email: req.body.email,
		password: req.body.password,
	});

	if (result.error) {
		logger.error(result.error.message);
		return res.status(400).send(result.error.message);
	}

	// TODO: append to database

	res.cookie("token", result.data.session?.access_token, {
		httpOnly: true,
		maxAge: cookieAge,
	});
	return res.send("done");
}

export async function login(req: Request, res: Response) {
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password)
		return res.status(400).send("Username and password must be provided");

	const result = await supabase.auth.signInWithPassword({ email, password });

	if (result.error) {
		logger.error(result.error.code);
		return res.status(400).send(result.error.message);
	}

	res.cookie("token", result.data.session?.access_token, {
		httpOnly: true,
		maxAge: cookieAge,
	});
	return res.send(result.data.session?.access_token);
}
