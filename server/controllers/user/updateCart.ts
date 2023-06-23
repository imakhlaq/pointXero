import { Request, Response } from "express";
import { prisma } from "../../db/database";
import { z } from "zod";
import CustomError from "../../utils/CustomError";
import formatError from "../../utils/formatError";

const bodyDTO = z.object({ prodId: z.string(), versionId: z.string() });

async function updateCart(req: Request, res: Response) {
  try {
    const { prodId, versionId } = bodyDTO.parse(req.body);

    const product = await prisma.product.findUnique({
      where: { id: prodId },
      include: { versions: true },
    });
    if (!product) {
      throw new CustomError("Product does not exits", 404);
    }

    const productVersion = await prisma.version.findUnique({
      where: { id: versionId },
    });
    if (!productVersion) {
      throw new CustomError("Product does not exits", 404);
    }

    const cartExit = await prisma.cart.findUnique({
      where: { userId: req.body.userId },
      include: {
        CartItem: {
          include: {
            cart: true,
            product: true,
          },
        },
      },
    });
    if (!cartExit) {
      const currentPrice = productVersion?.currentPrice;

      const cartData = await prisma.cart.create({
        data: {
          userId: req.body.userId,
          CartItem: {
            create: {
              price: currentPrice!,
              productId: prodId,
              quantity: 1,
              versionId: versionId,
            },
          },
          cartPrice: currentPrice!,
        },
        include: {
          CartItem: {
            include: {
              product: true,
              version: true,
            },
          },
        },
      });

      return res.json(cartData);
    }

    const productExistsInCart = cartExit.CartItem.find(
      (item) => item.productId === prodId
    );

    if (productExistsInCart) {
      const qty = productExistsInCart?.quantity + 1 ?? 1;

      const totalPrice =
        +cartExit.cartPrice +
        +productVersion?.currentPrice * (productExistsInCart.quantity + 1);

      const cartData = await prisma.cart.update({
        where: { userId: req.body.userId },
        data: {
          userId: req.body.userId,
          CartItem: {
            update: {
              where: { id: productExistsInCart.id },
              data: {
                quantity: qty,
              },
            },
          },
          cartPrice: totalPrice,
        },
        include: {
          CartItem: {
            include: {
              product: true,
              version: true,
            },
          },
        },
      });
      return res.json(cartData);
    } else {
      const cartData = await prisma.cart.update({
        where: { userId: req.body.userId },
        data: {
          userId: req.body.userId,
          CartItem: {
            create: {
              productId: prodId,
              price: productVersion?.currentPrice!,
              quantity: 1,
              versionId: versionId,
            },
          },
          cartPrice: cartExit.cartPrice,
        },
        include: {
          CartItem: {
            include: {
              product: true,
              version: true,
            },
          },
        },
      });

      return res.json(cartData);
    }
  } catch (_err) {
    const err = _err as CustomError;
    return res.status(500).json(formatError(err));
  }
}

export default updateCart;
