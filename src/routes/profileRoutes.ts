import { Router } from 'express';
import multer from 'multer';
import { uploadProfilePicture } from '../controllers/profileController';

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    }
    
});

router.post('/upload/:userId', upload.single('profilePicture'), uploadProfilePicture);

export default router;