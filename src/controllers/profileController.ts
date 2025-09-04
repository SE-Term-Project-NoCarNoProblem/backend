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
        logger.error('Profile picture update error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteProfilePicture = async (req: Request, res: Response) => {
    try{
        const {userId} = req.params

        const user = await prisma.user.findUnique({
            where: {id: userId},
            select: {profile_pic: true}
        });
        
        if (!user){
            return res.status(404).json({error: 'User not found'});
        }

        if(!user.profile_pic){
            return res.status(400).json({
                error: 'User has no profile picture to delete'
            });
        }

        const filePath = `${userId}/avatar.webp`;

        const { error: deleteError} = await supabase.storage
            .from('profile_pic')
            .remove([filePath]);

        if (deleteError){
            logger.error('Storage delete error:', deleteError)

            if(deleteError.message?.includes('not found') || deleteError.message?.includes('does not exist')){
                return res.status(404).json({
                    error: 'Profile picture file not found in storage'
                });
            }

            return res.status(500).json({
                error: 'Failed to delete profile picture from storage'
            });
        }


        const updatedUser = await prisma.user.update({
            where: {id: userId},
            data: {profile_pic: null},
            select: {
                id: true,
                fullname: true,
                email: true,
                phone_number: true,
                profile_pic: true
            }
        });
        logger.info(`Profile picture deleted for user ${userId}`);

        res.status(200).json({
            message: 'Profile picture deleted successfully',
            user: updatedUser
        });
    }catch (error){
        logger.error('Profile picture delete error:', error);
        res.status(500).json({error: 'Internal server error'});
    }
}
