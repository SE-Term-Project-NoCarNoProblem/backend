import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf } = format;

const fm = printf(({ level, message, timestamp }) => {
	return `${timestamp} ${level}: ${message}`;
});

export const logger = createLogger({
	format: combine(format.colorize(), timestamp(), fm),
	transports: [new transports.Console()],
	level: process.env.LOG_LEVEL,
});
