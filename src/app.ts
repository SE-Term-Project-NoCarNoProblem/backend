import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { logger } from "./utils/logger";
import { requestLog } from "./middlewares/logging";

import profileRoutes from "./routes/profile.routes";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import driverRoutes from "./routes/driver.routes";

export const app = express();

app.use(cors());
app.use(requestLog);

app.use("/api/profile", profileRoutes);

app.use(
	express.json({
		strict: true,
	})
);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof SyntaxError && "body" in err) {
		return res.status(400).json({ error: "Malformed JSON" });
	}
	next(err);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/drivers", driverRoutes);

const port = +(process.env.PORT || 8000);
app.listen(port);
logger.info(`Listening on port ${port}`);
