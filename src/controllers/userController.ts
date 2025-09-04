import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { Prisma } from '../../generated/prisma';

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

export async function getMe(req: Request, res:Response){
    try{
        //waiting to change to auth check soon
        const userId = req.headers['user-id'] as string;

        if(!userId){
            return res.status(401).json({ error: 'User not authenticated'});
        }

        const includeParam = req.query.include as string;
        const includes = includeParam ? includeParam.split(',').map(i => i.trim()): [];

        const include: Prisma.userInclude = {};

        if(includes.includes('customer')){
            include.customer = true;
        }

        if(includes.includes('driver')){
            include.driver = {
                include: {
                    verified_driver: includes.includes('vehicles') ? {
                        include: {
                            vehicle: true
                        }
                    } : true,
                    waiting_driver: true,
                    rejected_driver: true
                }
            };
        }

        if(includes.includes('admin')){
            include.admin = true;
        }

        if(includes.includes('support')){
            include.support = true;
        }

        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: Object.keys(include).length > 0 ? include : undefined
        });

        if(!user){
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({
            success: true,
            data: user
        });
    }catch (error){
        console.log('Error in getMe controller:', error);
        res.status(500).json({error: 'Internal server error'});
    }
}