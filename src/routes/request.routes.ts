import { Router } from "express";
import {
	createRequest,
	deleteRequest,
	nearbyRequests,
	cancelRequest,
	calculateFareEndpoint,
	myPendingRequests,
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

// get my pending ride requests
router.get("/me/pending", auth, myPendingRequests);

export default router;
