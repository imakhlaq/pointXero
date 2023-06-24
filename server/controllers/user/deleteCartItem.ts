import { Request, Response } from "express";
import { prisma } from "../../db/database";
import CustomError from "../../utils/CustomError";
import formatError from "../../utils/formatError";

async function deleteCartItem(req: Request, res: Response) {
  const { prodId } = req.params;
  const quantity = Number(req.query.quantity) ?? 1;

  try {
    const cart = await prisma.cart.findUnique({
      where: { userId: req.body.userId },
      include: {
        CartItem: true,
      },
    });

    if (!cart) {
      throw new CustomError("Cart doesn't exist", 404);
    }

    const cartItem = cart.CartItem.find((item) => item.productId === prodId);

    if (!cartItem) {
      throw new CustomError("Product doesn't exist", 404);
    }

      const newQuantity = cartItem.quantity - quantity;

    if (newQuantity <= 0) {
      const updateQuantity = await prisma.cartItem.delete({
        where: { id: cartItem.id },
      });
      return res
        .status(200)
        .json({ message: `${updateQuantity.id} is deleted}` });
    } else {
      const updateQuantity = await prisma.cartItem.update({
        where: { id: cartItem.id },
        data: {
          quantity: newQuantity,
        },
      });

      return res
        .status(200)
        .json({ message: `${updateQuantity.id} is deleted` });
    }
  } catch (_err) {
    const err = _err as CustomError;
    return res.status(404).json(formatError(err));
  }
}

export default deleteCartItem;
