import { Router } from "express";
import {
  createRequest,
  deleteRequest,
  nearbyRequests,
} from "../controllers/request.controller";
import { auth } from "../middlewares/auth";

const router = Router();

//1 create ride request
router.post("/", auth, createRequest);

//2 delete ride request
router.delete("/:id", auth, deleteRequest);

//3 fetch nearby requests (sorted by distance)
router.get("/nearby", auth, nearbyRequests);

export default router;
