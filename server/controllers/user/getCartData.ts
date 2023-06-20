import { Request, Response } from "express";
import { prisma } from "../../db/database";

async function getCartData(req: Request, res: Response) {
  try {
    const cartData = await prisma.cart.findUnique({
      where: { userId: req.body.userId },
      include: {
        product: {
          include: {
            categories: true,
            features: true,
            image: true,
          },
        },
      },
    });

    return res.json(cartData);
  } catch (_err) {
    return res.status(500).json({
      timestamp: new Date(),
      statusCode: 500,
      errors: [{ message: "Internal Server Error" }],
    });
  }
}

export default getCartData;
