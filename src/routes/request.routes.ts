import { Router } from "express";
import {
	createRequest,
	deleteRequest,
	nearbyRequests,
	cancelRequest,
	calculateFareEndpoint,
	myActiveRequests,
} from "../controllers/request.controller";
import { auth } from "../middlewares/auth";

const router = Router();

//1 create ride request
router.post("/", auth, createRequest);

//2 delete ride request
router.delete("/:id", auth, deleteRequest);

//3 fetch nearby requests (sorted by distance)
router.get("/nearby", auth, nearbyRequests);

router.delete("/:id/cancel", auth, cancelRequest);

router.get("/fare", calculateFareEndpoint);

// get my active ride requests (pending in cache or ongoing in database)
router.get("/me/active", auth, myActiveRequests);

export default router;
