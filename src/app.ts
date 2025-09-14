import "dotenv/config";
import express from "express";
import { logger } from "./utils/logger";
import { requestLog } from "./middlewares/logging";
<<<<<<< HEAD
import ridesRoutes from './routes/ridesRoutes';
import requestRoutes from "./routes/requestRoutes";
=======
import profileRoutes from "./routes/profile.routes";
import userRoutes from "./routes/user.routes";
>>>>>>> b03ee5d (fix: rename profile and user in controllers and routes)

export const app = express();

app.use(express.json());
app.use(requestLog);

app.use('/api/rides', ridesRoutes);
app.use("/api/requests", requestRoutes);

const port = +(process.env.PORT || 8000);
app.listen(port);
logger.info(`Listening on port ${port}`);
