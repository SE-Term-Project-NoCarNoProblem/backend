import { Router } from 'express';
import { acceptRide, cancelRide } from '../controllers/ride.controller';
import { auth } from '../middlewares/auth';

const router = Router();
    
router.post('/accept/', auth, acceptRide);
router.delete('/cancel/:id', auth, cancelRide);

export default router;