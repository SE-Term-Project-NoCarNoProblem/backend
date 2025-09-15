import { Router } from 'express';
import multer from 'multer';
import { uploadProfilePicture, deleteProfilePicture, uploadIdPicture, getIdPicture, uploadLicensePicture, getLicensePicture } from '../controllers/profile.controller';
import { auth } from '../middlewares/auth';

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
});

router.post('/upload', auth, upload.single('profilePicture'), uploadProfilePicture);
router.delete('/delete', auth, deleteProfilePicture);

// ID Picture routes
router.post('/id-pic/upload', auth, upload.single('idPicture'), uploadIdPicture);
router.get('/id-pic', auth, getIdPicture);

// License Picture routes (for drivers only)
router.post('/license-pic/upload', auth, upload.single('licensePicture'), uploadLicensePicture);
router.get('/license-pic', auth, getLicensePicture);

export default router;