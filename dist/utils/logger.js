"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
require("dotenv/config");
const { combine, timestamp, printf } = winston_1.format;
const fm = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});
exports.logger = (0, winston_1.createLogger)({
    format: combine(winston_1.format.colorize(), timestamp(), fm),
    transports: [new winston_1.transports.Console()],
    level: process.env.LOG_LEVEL,
});
