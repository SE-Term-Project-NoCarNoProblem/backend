import { Router } from 'express';
import multer from 'multer';
import { uploadProfilePicture, deleteProfilePicture } from '../controllers/profile.controller';

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
});

router.post('/upload', upload.single('profilePicture'), uploadProfilePicture);
router.delete('/delete', deleteProfilePicture);
export default router;