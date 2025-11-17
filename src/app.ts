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
import ticketRoutes from "./routes/ticket.routes";
import adminDriverRoutes from "./routes/admin.driver.routes";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import {
	broadcastDriverPositions,
	getDriverPositions,
	registerDriverEvents,
	removeDriverPosition,
} from "./controllers/driver.controller";
import { authSocket } from "./middlewares/auth";
import { prisma } from "./lib/prisma";

const app = express();

function gracefulShutdown(signal: string) {
	logger.info(`Bye. (${signal})`);
	prisma.$disconnect();
	process.exit();
}
process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

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
app.use("/api/tickets", ticketRoutes);
app.use("/api/admin/drivers", adminDriverRoutes);

// ---------- socket io ----------
const httpServer = createServer(app);
export const io = new Server(httpServer, {
	cors: {
		origin: "*",
	},
});
io.use(authSocket);

function registerGeneralEvents(socket: Socket) {
	socket.on("disconnect", () => {
		logger.debug(`Client disconnected, now ${io.engine.clientsCount}`);
	});
}

io.on("connection", (socket) => {
	logger.debug(`Client connected, now ${io.engine.clientsCount}`);
	registerGeneralEvents(socket);
	registerDriverEvents(socket);
	socket.emit("position:driver_positions", getDriverPositions());
});

setInterval(() => {
	broadcastDriverPositions(io);
}, 1000);

// swagger setup
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
const swaggerOptions = {
	failOnErrors: true,
	definition: {
		openapi: "3.0.0",
		info: {
			title: "No Car No Problem",
			version: "1.0.0",
			description:
				"API documentation for No Car No Problem ride-sharing platform",
		},
		servers: [
			{
				url: `http://localhost:${+(process.env.PORT || 8000)}`,
				description: "Development server",
			},
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
					description: "Enter your JWT token",
				},
			},
		},
		security: [],
	},
	apis: ["./src/routes/*.ts"],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
app.use(
	"/docs",
	express.static("build/swagger-ui-dist", { index: false }),
	swaggerUi.serve,
	swaggerUi.setup(swaggerSpecs)
);

const port = +(process.env.PORT || 8000);
httpServer.listen(port);
logger.info(`Listening on port ${port}`);
