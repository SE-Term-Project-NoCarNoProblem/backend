"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
exports.getMe = getMe;
exports.patchMe = patchMe;
const prisma_1 = require("../lib/prisma");
const prisma_2 = require("../../generated/prisma");
async function getUser(req, res) {
    try {
        const userId = req.params.id;
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }
        const user = await prisma_1.prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({
            success: true,
            data: user
        });
    }
    catch (error) {
        console.log('Error in getUser controller:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
async function getMe(req, res) {
    try {
        const userId = res.locals.user?.id;
        if (!userId) {
            return res.status(401).json({ error: 'User not authenticated' });
        }
        const includeParam = req.query.include;
        const includes = includeParam ? includeParam.split(',').map(i => i.trim()) : [];
        const include = {};
        if (includes.includes('customer')) {
            include.customer = true;
        }
        if (includes.includes('driver')) {
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
        if (includes.includes('admin')) {
            include.admin = true;
        }
        if (includes.includes('support')) {
            include.support = true;
        }
        const user = await prisma_1.prisma.user.findUnique({
            where: {
                id: userId
            },
            include: Object.keys(include).length > 0 ? include : undefined
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({
            success: true,
            data: user
        });
    }
    catch (error) {
        console.log('Error in getMe controller:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
async function patchMe(req, res) {
    try {
        const userId = res.locals.user?.id;
        if (!userId) {
            return res.status(401).json({ error: 'User not authenticated' });
        }
        const { fullname, email, gender, phone_number, favorite_pickup_location, favorite_dropoff_location, ...otherfields } = req.body;
        const allowedFields = ['fullname', 'email', 'gender', 'phone_number', 'favorite_pickup_location', 'favorite_dropoff_location'];
        const invalidFields = Object.keys(req.body).filter(field => !allowedFields.includes(field));
        if (invalidFields.length > 0) {
            return res.status(400).json({
                error: `Invalid fields: ${invalidFields.join(', ')}. Only ${allowedFields.join(', ')} can be updated.`
            });
        }
        //If user is a verified driver after update data change to waiting driver
        const existingUser = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
            include: {
                customer: true,
                driver: {
                    include: {
                        verified_driver: true
                    }
                }
            }
        });
        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        if ((favorite_pickup_location || favorite_dropoff_location) && !existingUser.customer) {
            return res.status(400).json({
                error: 'Favorite locations can only be updated by customers'
            });
        }
        const result = await prisma_1.prisma.$transaction(async (tx) => {
            const updatedUser = await tx.user.update({
                where: { id: userId },
                data: {
                    ...(fullname && { fullname }),
                    ...(email && { email }),
                    ...(phone_number && { phone_number }),
                    ...(gender && { gender })
                }
            });
            if (existingUser.customer) {
                if (favorite_pickup_location) {
                    await tx.$executeRaw `
                        UPDATE customer 
                        SET favorite_pickup_location = ${`(${favorite_pickup_location})`}::point
                        WHERE id = ${userId}::uuid
                    `;
                }
                if (favorite_dropoff_location) {
                    await tx.$executeRaw `
                        UPDATE customer 
                        SET favorite_dropoff_location = ${`(${favorite_dropoff_location})`}::point
                        WHERE id = ${userId}::uuid
                    `;
                }
            }
            if (existingUser.driver?.verified_driver) {
                const verifiedDriverId = existingUser.driver.verified_driver.id;
                // delete all vehicles associated with this verified driver
                await tx.vehicle.deleteMany({
                    where: { driver_id: verifiedDriverId }
                });
                // Then delete the verified driver
                await tx.verified_driver.delete({
                    where: { id: verifiedDriverId }
                });
                // Finally, add to waiting driver
                await tx.waiting_driver.create({
                    data: {
                        id: existingUser.driver.id,
                        requested_date: new Date()
                    }
                });
            }
            const finalUser = await tx.user.findUnique({
                where: { id: userId },
                include: {
                    customer: true,
                    driver: {
                        include: {
                            verified_driver: true,
                            waiting_driver: true
                        }
                    }
                }
            });
            return finalUser;
        });
        const responseData = {
            id: result?.id,
            fullname: result?.fullname,
            email: result?.email,
            phone_number: result?.phone_number,
            profile_pic: result?.profile_pic,
            gender: result?.gender,
            ...(result?.customer && result.customer?.favorite_pickup_location && { favorite_pickup_location: result.customer.favorite_pickup_location }),
            ...(result?.customer && result.customer?.favorite_dropoff_location && { favorite_dropoff_location: result.customer.favorite_dropoff_location })
        };
        res.json({
            success: true,
            data: responseData,
            message: existingUser.driver?.verified_driver
                ? 'User updated successfully. Driver status changed from verified to waiting due to profile update.'
                : 'User updated successfully.'
        });
    }
    catch (error) {
        console.log('Error in patchMe controller:', error);
        if (error instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return res.status(400).json({ error: 'Email or phone number already exists' });
            }
        }
        res.status(500).json({ error: 'Internal server error' });
    }
}
