"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = auth;
const logger_1 = require("../utils/logger");
const supabase_1 = require("../lib/supabase");
const TOKEN_SOURCE = "localstorage";
async function auth(req, res, next) {
    const token = TOKEN_SOURCE == "localstorage"
        ? req.headers.authorization
        : req.cookies?.token;
    logger_1.logger.debug(`token: ${token}`);
    if (!token)
        return res.status(401).send("Token is not provided");
    const claim = await supabase_1.supabase.auth.getClaims(token);
    if (claim.error) {
        return res.status(400).send(claim.error.code);
    }
    const data = claim.data;
    if (!data) {
        logger_1.logger.error("`claim.data` is missing although there is no `claim.error`");
        return res.status(500).send();
    }
    res.locals.user = {
        id: data.claims.sub,
        email: data.claims.email,
    };
    next();
}
