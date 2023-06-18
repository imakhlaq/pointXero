import { Request, Response } from "express";
import { prisma } from "../../db/database";
import CustomError from "../../utils/CustomError";
import formatError from "../../utils/formatError";

async function getProductById(req: Request, res: Response) {
  const { productId } = req.params;
  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: {
      image: true,
      categories: true,
    },
  });
  try {
    if (!product) {
      throw new CustomError("Product doesn't exits", 404);
    }
    return res.json(product);
  } catch (_err) {
    //custom error
    const err = _err as CustomError;
    return res.status(err.statusCode ?? 500).json(formatError(err));
  }
}

export default getProductById;
