import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { logger } from "./utils/logger";
import { requestLog } from "./middlewares/logging";

import profileRoutes from "./routes/profile.routes";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import driverRoutes from "./routes/driver.routes";
import ridesRoutes from "./routes/ride.routes";
import requestRoutes from "./routes/request.routes";
import customerRoutes from "./routes/customer.routes";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import {
	broadcastDriverPositions,
	registerDriverEvents,
	removeDriverPosition,
} from "./controllers/driver.controller";

const app = express();

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
app.use("/api/rides", ridesRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/customers", customerRoutes);

// ---------- socket io ----------
const httpServer = createServer(app);
export const io = new Server(httpServer, {
	// path: "/",
	cors: {
		origin: "*",
	},
});

function registerGeneralEvents(socket: Socket) {
	socket.on("disconnect", () => {
		logger.debug(`Client disconnected, now ${io.engine.clientsCount}`);
	});
}

io.on("connection", (socket) => {
	logger.debug(`Client connected, now ${io.engine.clientsCount}`);
	registerGeneralEvents(socket);
	registerDriverEvents(socket);
});

setInterval(() => {
	broadcastDriverPositions(io);
}, 3000);

const port = +(process.env.PORT || 8000);
httpServer.listen(port);
logger.info(`Listening on port ${port}`);
