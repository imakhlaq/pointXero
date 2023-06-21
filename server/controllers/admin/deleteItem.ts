import { Request, Response } from "express";
import CustomError from "../../utils/CustomError";
import customError from "../../utils/CustomError";
import formatError from "../../utils/formatError";
import { prisma } from "../../db/database";

async function deleteItem(req: Request, res: Response) {
  const { prodId } = req.params;

  try {
    if (!prodId) {
      throw new CustomError("Product Id is missing", 402);
    }
    const prodDelete = await prisma.product.delete({ where: { id: prodId } });

    return res.status(200).json({ message: `${prodDelete.title} is delete` });
  } catch (_err) {
    const err = _err as customError;
    return res.status(402).json(formatError(err));
  }
}

export default deleteItem;
