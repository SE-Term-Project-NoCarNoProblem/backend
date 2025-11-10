import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function approveDriver(req: Request, res: Response) {
  const { driverId } = req.params;
  const adminId = res.locals.user.id;

  try {
    // Check that the driver is currently waiting
    const waiting = await prisma.waiting_driver.findUnique({
      where: { id: driverId },
    });

    if (!waiting) {
      return res.status(400).json({ error: "Driver is not pending approval" });
    }

    await prisma.$transaction(async (tx) => {
      // Remove from waiting
      await tx.waiting_driver.delete({
        where: { id: driverId },
      });

      // Insert into verified
      await tx.verified_driver.create({
        data: {
          id: driverId,
          admin_id: adminId,
          timestamp: new Date(),
          status: "free",
        },
      });
    });

    return res.json({ message: "Driver approved successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to approve driver" });
  }
}


export async function rejectDriver(req: Request, res: Response) {
  const { driverId } = req.params;
  const adminId = res.locals.user.id;

  try {
    // Check that the driver is waiting
    const waiting = await prisma.waiting_driver.findUnique({
      where: { id: driverId },
    });

    if (!waiting) {
      return res.status(400).json({ error: "Driver is not pending approval" });
    }

    await prisma.$transaction(async (tx) => {
      await tx.waiting_driver.delete({
        where: { id: driverId },
      });

      await tx.rejected_driver.create({
        data: {
          id: driverId,
          admin_id: adminId,
          timestamp: new Date(),
        },
      });
    });

    return res.json({ message: "Driver rejected successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to reject driver" });
  }
}