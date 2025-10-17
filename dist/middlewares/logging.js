"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLog = requestLog;
const logger_1 = require("../utils/logger");
function requestLog(req, _res, next) {
    logger_1.logger.http(`${req.method} ${req.path}`);
    next();
}
