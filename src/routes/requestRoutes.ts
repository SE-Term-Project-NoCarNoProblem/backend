import { Router } from "express";
import {
  createRequest,
  deleteRequest,
  nearbyRequests,
} from "../controllers/requestsController";

const router = Router();

//1 create ride request
router.post("/", createRequest);

//2 delete ride request
router.delete("/:id", deleteRequest);

//3 fetch nearby requests (sorted by distance)
router.get("/nearby", nearbyRequests);

export default router;
