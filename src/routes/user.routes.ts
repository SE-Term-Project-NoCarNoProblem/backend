import {Router} from 'express';
import { getUser, getMe, patchMe } from '../controllers/user.controller';

const router = Router();

router.get('/me', getMe);
router.patch('/me', patchMe);
router.get('/:id', getUser);


export default router;
