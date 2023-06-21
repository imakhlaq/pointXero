import { Request, Response } from "express";
import { prisma } from "../../db/database";
import { z } from "zod";
import CustomError from "../../utils/CustomError";
import formatError from "../../utils/formatError";

const bodyDTO = z.object({ prodId: z.string() });

async function updateCart(req: Request, res: Response) {
  try {
    const { prodId } = bodyDTO.parse(req.body);

    const product = await prisma.product.findUnique({ where: { id: prodId } });

    if (!product) {
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
      const cartData = await prisma.cart.create({
        data: {
          userId: req.body.userId,
          CartItem: {
            create: {
              price: product?.currentPrice!,
              productId: prodId,
              quantity: 1,
            },
          },
          cartPrice: product?.currentPrice!,
        },
        include: {
          CartItem: {
            include: {
              product: true,
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
        +product?.currentPrice * (productExistsInCart.quantity + 1);
      console.log(totalPrice);
      console.log(productExistsInCart);
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
              price: product?.currentPrice!,
              quantity: 1,
            },
          },
          cartPrice: cartExit.cartPrice,
        },
        include: {
          CartItem: {
            include: {
              product: true,
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
