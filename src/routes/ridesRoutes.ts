import { Router } from 'express';
import { acceptRide, cancelRide } from '../controllers/ridesController';

const router = Router();
    
router.post('/accept/', acceptRide);
router.delete('/cancel/:id', cancelRide);

export default router;