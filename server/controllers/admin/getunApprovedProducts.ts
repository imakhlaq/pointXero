import { Request, Response } from "express";
import { Product } from "@prisma/client";
import { prisma } from "../../db/database";
import formatError from "../../utils/formatError";
import CustomError from "../../utils/CustomError";

async function getUnApprovedProducts(req: Request, res: Response) {
  const { page, limit } = req.query;

  let productList: Product[];
  try {
    if (!page || !limit || +page <= 0 || +limit <= 0) {
      productList = await prisma.product.findMany({
        where: {
          AND: [{ public: true }, { adminApprove: false }],
        },
      });
    } else {
      const skip: number = (+page - 1) * +limit;
      const take: number = (+page - 1) * +limit + +limit;









      productList = await prisma.product.findMany({
        skip,
        take,
        where: { AND: [{ public: true }, { adminApprove: false }] },
      });
    }
    return res.status(200).json(productList);
  } catch (err) {
    return res.status(500).json(formatError(err as CustomError));
  }
}

export default getUnApprovedProducts;
