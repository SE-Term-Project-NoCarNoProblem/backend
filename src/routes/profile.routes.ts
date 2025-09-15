import { Router } from 'express';
import multer from 'multer';
import { uploadProfilePicture, deleteProfilePicture } from '../controllers/profile.controller';
import { auth } from '../middlewares/auth';

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
});

router.post('/upload', auth, upload.single('profilePicture'), uploadProfilePicture);
router.delete('/delete', auth, deleteProfilePicture);
export default router;