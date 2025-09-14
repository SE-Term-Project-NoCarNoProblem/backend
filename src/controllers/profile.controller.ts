import { Request, Response } from 'express';
import { supabase } from '../lib/supabase';
import { prisma } from '../lib/prisma';
import { logger } from '../utils/logger';

export const uploadProfilePicture = async (req: Request, res: Response) =>{
    try{
        const userId = res.locals.user?.id;
        const file = req.file;
        
        if(!userId){
            return res.status(401).json({ error: 'User not authenticated' });
        }
        
        if(!file){
            return res.status(400).json({ error: 'No file uploaded'})
        }

        const maxFileSize = 5 * 1024 * 1024; // 5MB
        if(file.size > maxFileSize){
            return res.status(400).json({
                error: 'File too large. Maximum file size is 5MB'
            });
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

        //Update user profile_pic in database and include driver relations
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { profile_pic: profilePicUrl },
            select: {
                id: true,
                fullname: true,
                email: true,
                phone_number: true,
                profile_pic: true,
                driver: {
                    include: {
                        verified_driver: true
                    }
                }
            }
        });

        // Move verified driver to waiting_driver table
        if (updatedUser.driver?.verified_driver) {
            // Remove from verified_driver
            await prisma.verified_driver.delete({
                where: { id: userId }
            });
            
            // Add to waiting_driver
            await prisma.waiting_driver.create({
                data: {
                    id: userId,
                    requested_date: new Date()
                }
            });
            
            logger.info(`Driver moved to waiting status for user ${userId}`);
        }

        logger.info(`Profile picture updated for user ${userId}`);

        res.status(200).json({
            message: 'Profile picture uploaded successfully',
            user: {
                id: updatedUser.id,
                fullname: updatedUser.fullname,
                email: updatedUser.email,
                phone_number: updatedUser.phone_number,
                profile_pic: updatedUser.profile_pic
            },
            profilePicUrl,
            ...(updatedUser.driver?.verified_driver && {
                driverStatusUpdated: true,
                statusMessage: 'Driver moved from verified to waiting status'
            })
        });
        
    } catch (error){
        logger.error('Profile picture update error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteProfilePicture = async (req: Request, res: Response) => {
    try{
        const userId = res.locals.user?.id;
        
        if(!userId){
            return res.status(401).json({ error: 'User not authenticated' });
        }

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
