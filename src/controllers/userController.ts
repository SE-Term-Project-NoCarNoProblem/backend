import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export async function getUser(req: Request, res: Response){
    try{
        const userId = req.params.id;
        
        if(!userId){
            return res.status(400).json({ error: 'User ID is required'});
        }

        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if(!user){
            return res.status(404).json({ error: 'User not found'});
        }

        res.json({
            success: true,
            data: user
        });
    }catch (error){
        console.log('Error in getUser controller:', error);
        res.status(500).json({error: 'Internal server error'});
    }
}