import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma/client";

export async function resolveTicket(req: Request, res: Response) {
    const ticketId = req.params.id;
    const support_id=req.params.support_id;
    const { detail } = req.body;
    try {

        const updated=await prisma.support_ticket.update({
            where: {
                id: ticketId,
            },
            data: {
                support_id:support_id,
                detail: detail,
                resolved_at: new Date()
            },
        });
        return res.status(200).json({ ok: true, data: updated });

    } catch (error) {
        console.log("Error in resolveTicket controller:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

