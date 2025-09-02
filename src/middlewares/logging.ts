import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";

export function requestLog(req: Request, _res: Response, next: NextFunction) {
	logger.http(`${req.method} ${req.path}`);
	next();
}
