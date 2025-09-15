import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";
import { supabase } from "../lib/supabase";

const TOKEN_SOURCE: "localstorage" | "cookie" = "localstorage";
export async function auth(req: Request, res: Response, next: NextFunction) {
	const token =
		TOKEN_SOURCE == "localstorage"
			? req.headers.authorization
			: req.cookies?.token;

	logger.debug(`token: ${token}`);

	if (!token) return res.status(401).send("Token is not provided");
	const claim = await supabase.auth.getClaims(token);

	if (claim.error) {
		return res.status(400).send(claim.error.code);
	}

	const data = claim.data;
	if (!data) {
		logger.error("`claim.data` is missing although there is no `claim.error`");
		return res.status(500).send();
	}

	res.locals.user = {
		id: data.claims.sub,
		email: data.claims.email,
	};
	next();
}
