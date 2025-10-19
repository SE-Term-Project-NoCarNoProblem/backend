<<<<<<< HEAD
import { Router } from "express";
import { auth } from "../middlewares/auth";
import { cancelRide } from "../controllers/ride.controller";

const router = Router();

router.delete("/:id", auth, cancelRide);

export default router;
=======
import { Router } from 'express';
import { acceptRide, cancelRide } from '../controllers/ride.controller';
import { auth } from '../middlewares/auth';

const router = Router();
    
router.post('/accept/', auth, acceptRide);
router.delete('/cancel/:id', auth, cancelRide);

export default router;
>>>>>>> parent of 236ad42 (feat:implement cancel ride request)
