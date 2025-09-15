import "dotenv/config";
import express from "express";
import cors from "cors";
import { logger } from "./utils/logger";
import { requestLog } from "./middlewares/logging";
import profileRoutes from "./routes/profileRoutes";
import userRoutes from "./routes/userRoutes";
import driverRoutes from "./routes/driver.routes";

export const app = express();

app.use(cors());
app.use(requestLog);

app.use("/api/profile", profileRoutes);

app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/api/drivers", driverRoutes);

const port = +(process.env.PORT || 8000);
app.listen(port);
logger.info(`Listening on port ${port}`);
