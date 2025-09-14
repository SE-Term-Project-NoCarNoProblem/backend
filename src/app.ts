import "dotenv/config";
import express from "express";
import { logger } from "./utils/logger";
import { requestLog } from "./middlewares/logging";
import profileRoutes from "./routes/profileRoutes";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/auth.routes";

export const app = express();

app.use(requestLog);

app.use("/api/profile", profileRoutes);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const port = +(process.env.PORT || 8000);
app.listen(port);
logger.info(`Listening on port ${port}`);
