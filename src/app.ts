import "dotenv/config";
import express from "express";
import { logger } from "./utils/logger";
import { requestLog } from "./middlewares/logging";
import profileRoutes from "./routes/profileRoutes";

export const app = express();

app.use('/api/profile', profileRoutes);

app.use(express.json());
app.use(requestLog);

const port = +(process.env.PORT || 8000);
app.listen(port);
logger.info(`Listening on port ${port}`);
