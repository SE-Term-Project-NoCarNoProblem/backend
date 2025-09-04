import {Router} from 'express';
import { getUser, getMe } from '../controllers/userController';

const router = Router();

router.get('/me', getMe);
router.get('/:id', getUser);


export default router;
