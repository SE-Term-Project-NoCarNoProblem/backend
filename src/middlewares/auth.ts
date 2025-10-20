import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";
import { supabase } from "../lib/supabase";
import { ExtendedError, Socket } from "socket.io";

const TOKEN_SOURCE: "localstorage" | "cookie" = "localstorage";
export async function auth(req: Request, res: Response, next: NextFunction) {
	const token =
		TOKEN_SOURCE == "localstorage"
			? req.headers.authorization
			: req.cookies?.token;

	if (!token) return res.status(401).send("Token is not provided");
	try {
		const claim = await supabase.auth.getClaims(token, { allowExpired: true });

		if (claim.error) {
			logger.warn(`supabase claim error: ${claim.error.code}`);
			return res.status(400).send(claim.error.code);
		}

		const data = claim.data;
		if (!data) {
			logger.error(
				"`claim.data` is missing although there is no `claim.error`"
			);
			return res.status(500).send();
		}

		res.locals.user = {
			id: data.claims.sub,
			email: data.claims.email,
		};
		next();
	} catch (error) {
		logger.error("Error during auth middleware:", error);
		return res.status(500).send("Internal server error");
	}
}

export async function authSocket(
	socket: Socket,
	next: (err?: ExtendedError) => void
) {
	const token = socket.handshake.auth.token;
	if (!token) {
		logger.warn(`socket ${socket.id} missing token`);
		return next(new Error("Authentication error: Token is not provided"));
	}
	const claim = await supabase.auth.getClaims(token, { allowExpired: true });

	if (claim.error) {
		return next(new Error(`Authentication error: ${claim.error.code}`));
	}

	const data = claim.data;
	if (!data) {
		logger.error("`claim.data` is missing although there is no `claim.error`");
		return next(new Error("Authentication error: Internal server error"));
	}

	socket.data.user_id = data.claims.sub;
	console.log(data.claims.sub);
	next();
}
