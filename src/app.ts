import "dotenv/config";
import express from "express";
import { logger } from "./utils/logger";
import { requestLog } from "./middlewares/logging";

export const app = express();

app.use(requestLog);

const port = +(process.env.PORT || 8000);
app.listen(port);
logger.info(`Listening on port ${port}`);
