import { Router } from 'express';
import multer from 'multer';
import { uploadProfilePicture, deleteProfilePicture } from '../controllers/profileController';

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
});

router.post('/upload/:userId', upload.single('profilePicture'), uploadProfilePicture);
router.delete('/delete/:userId', deleteProfilePicture);
export default router;