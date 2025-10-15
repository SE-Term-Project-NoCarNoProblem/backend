import {Request, Response} from 'express';
import {prisma} from '../lib/prisma';
import {deleteRequest, getRequest, getIdToCustomerMap } from '../lib/requestStore';
import { logger } from '../utils/logger';
import { z } from 'zod';


export const rideValidator = z.object({
  id: z.uuid(),
  pickup_lat: z.number(),
  pickup_lng: z.number(),
  dropoff_lat: z.number(),
  dropoff_lng: z.number(),
  price: z.number(),
  customer_id: z.uuid(),
  driver_id: z.uuid(),
  vehicle_id: z.uuid(),
  timestamp: z.string().or(z.date()),
  ride_status: z.enum(['ongoing', 'completed', 'cancelled']),
});




