import "dotenv/config";
import express from "express";
import { logger } from "./utils/logger";
import { requestLog } from "./middlewares/logging";
import userRoutes from './routes/userRoutes'

export const app = express();

app.use(express.json());
app.use(requestLog);

app.use('/api/users', userRoutes);

const port = +(process.env.PORT || 8000);
app.listen(port);
logger.info(`Listening on port ${port}`);
