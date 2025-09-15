import "dotenv/config";
import express from "express";
import cors from "cors";
import { logger } from "./utils/logger";
import { requestLog } from "./middlewares/logging";
import profileRoutes from "./routes/profile.routes";
import userRoutes from "./routes/user.routes";

export const app = express();

app.use(cors());
app.use(requestLog);

app.use("/api/profile", profileRoutes);

app.use(express.json());

app.use("/api/users", userRoutes);

const port = +(process.env.PORT || 8000);
app.listen(port);
logger.info(`Listening on port ${port}`);
