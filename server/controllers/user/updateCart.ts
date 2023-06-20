import { Request, Response } from "express";
import { prisma } from "../../db/database";
import { z } from "zod";

const bodyDTO = z.object({ prodId: z.string() });

async function updateCart(req: Request, res: Response) {
  try {
    const { prodId } = bodyDTO.parse(req.body);

    const cartExit = prisma.cart.findUnique({
      where: { userId: req.body.userId },
    });
    if (!cartExit) {
      const cartData = await prisma.cart.create({
        data: {
          userId: req.body.userId,
          product: {
            connect: { id: prodId },
          },
          cartPrice: 222,
        },
        include: {
          product: true,
        },
      });

      return res.json(cartData);
    }

    const cartData = await prisma.cart.update({
      where: { userId: req.body.userId },
      data: {
        userId: req.body.userId,
        product: {
          connect: { id: prodId },
        },
        cartPrice: 222,
      },
      include: {
        product: true,
      },
    });

    return res.json(cartData);
  } catch (_err) {
    console.log(_err);
    return res.status(500).json({
      timestamp: new Date(),
      statusCode: 500,
      errors: [{ message: "Internal Server Error" }],
    });
  }
}

export default updateCart;
