"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const driver_controller_1 = require("../controllers/driver.controller");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
// Driver updates location
router.post("/location", auth_1.auth, driver_controller_1.updateDriverLocation);
// Customer fetches all drivers
router.get("/location", auth_1.auth, driver_controller_1.getDrivers);
// Get nearby drivers
router.get("/nearby", driver_controller_1.getNearbyDrivers);
// Get rating
router.get("/:driverId/rating", auth_1.auth, driver_controller_1.getDriverRating);
// Update rating
router.put("/:rideId/rating", auth_1.auth, driver_controller_1.updateDriverRating);
exports.default = router;
