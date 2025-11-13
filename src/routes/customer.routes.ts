import { Router } from "express";
import { viewCustomer } from "../controllers/customer.controller";

const router = Router();

router.get("/viewcustomer/:rideId", viewCustomer);

export default router;
