"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const request_controller_1 = require("../controllers/request.controller");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
//1 create ride request
router.post("/", auth_1.auth, request_controller_1.createRequest);
//2 delete ride request
router.delete("/:id", auth_1.auth, request_controller_1.deleteRequest);
//3 fetch nearby requests (sorted by distance)
router.get("/nearby", auth_1.auth, request_controller_1.nearbyRequests);
exports.default = router;
