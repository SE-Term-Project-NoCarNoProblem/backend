"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = require("./utils/logger");
const logging_1 = require("./middlewares/logging");
const profile_routes_1 = __importDefault(require("./routes/profile.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const driver_routes_1 = __importDefault(require("./routes/driver.routes"));
const ride_routes_1 = __importDefault(require("./routes/ride.routes"));
const request_routes_1 = __importDefault(require("./routes/request.routes"));
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(logging_1.requestLog);
exports.app.use("/api/profile", profile_routes_1.default);
exports.app.use(express_1.default.json({
    strict: true,
}));
exports.app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && "body" in err) {
        return res.status(400).json({ error: "Malformed JSON" });
    }
    next(err);
});
exports.app.use("/api/auth", auth_routes_1.default);
exports.app.use("/api/users", user_routes_1.default);
exports.app.use("/api/drivers", driver_routes_1.default);
exports.app.use("/api/rides", ride_routes_1.default);
exports.app.use("/api/requests", request_routes_1.default);
const port = +(process.env.PORT || 8000);
exports.app.listen(port);
logger_1.logger.info(`Listening on port ${port}`);
