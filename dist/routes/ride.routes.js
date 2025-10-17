"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ride_controller_1 = require("../controllers/ride.controller");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.post('/accept/', auth_1.auth, ride_controller_1.acceptRide);
router.delete('/cancel/:id', auth_1.auth, ride_controller_1.cancelRide);
exports.default = router;
