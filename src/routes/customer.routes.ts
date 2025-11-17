import { Router } from "express";
import { viewCustomer } from "../controllers/customer.controller";

const router = Router();

/**
 * @swagger
 * /api/customer/viewcustomer/{rideId}:
 *   get:
 *     summary: View customer details
 *     description: Get customer information for a specific ride
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: rideId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The ride ID
 *     responses:
 *       200:
 *         description: Customer details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     customer:
 *                       type: object
 *                       properties:
 *                         user:
 *                           type: object
 *                           properties:
 *                             fullname:
 *                               type: string
 *                             email:
 *                               type: string
 *                             phone_number:
 *                               type: string
 *                             age:
 *                               type: integer
 *       400:
 *         description: Ride ID is required
 *       404:
 *         description: User not found
 */
router.get("/viewcustomer/:rideId", viewCustomer);

export default router;
