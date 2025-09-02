import { Request, Response } from 'express';
import { supabase } from '../lib/supabase';
import { prisma } from '../lib/prisma';
import { logger } from '../utils/logger';

export const uploadProfilePicture = async (req: Request, res: Response) =>{
    try{
        const { userId } = req.params;
        const file = req.file;
        if(!file){
            return res.status(400).json({ error: 'No file uploaded'})
        }
        if(!userId){
            return res.status(400).json({ error: 'User ID is required' });
        }
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if(!allowedTypes.includes(file.mimetype)){
            return res.status(400).json({
                error: 'Invalid file type. Only JPEG, PNG, and WebP are allowed'
            });
        }
        
        //create file path
        const filePath = `${userId}/avatar.webp`;

        //Upload to Supabase Storage
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('profile_pic')
            .upload(filePath, file.buffer, {
                contentType: 'image/webp',
                upsert: true
        });

        if(uploadError){
            logger.error('Storage upload error:', uploadError);
            return res.status(500).json({ error: 'Failed to upload file' });
        }

         //get Public URL
        const { data: urlData } = supabase.storage
             .from('profile_pic')
            .getPublicUrl(filePath);
        
        const profilePicUrl = urlData.publicUrl;

        //Update user profile_pic in database
        //might change to update from endpoint soon
        const updatedUser = await prisma.user.updateManyAndReturn({
            where: { id: userId },
            data: { profile_pic: profilePicUrl },
            select: {
                id: true,
                fullname: true,
                email: true,
                phone_number: true,
                profile_pic: true
            }
        });

        logger.info(`Profile picture updated for user ${userId}`);

        res.status(200).json({
            message: 'Profile picture uploaded successfully',
            user: updatedUser,
            profilePicUrl
        });
        
    } catch (error){
        logger.error('Profile picture delete error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
