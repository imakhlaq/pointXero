import { Request, Response } from "express";
import { prisma } from "../../db/database";
import { Product } from "@prisma/client";
import formatError from "../../utils/formatError";
import CustomError from "../../utils/CustomError";

async function getProductByCategory(req: Request, res: Response) {
  const { category } = req.params;
  const { page, limit } = req.query;

  let productList: Product[];

  try {
    if (!page || !limit || +page <= 0 || +limit <= 0) {
      productList = await prisma.product.findMany({
        where: {
          AND: [
            { public: true },
            { adminApprove: true },
            { categories: { some: { category: category } } },
          ],
        },
        include: {
          features: true,
          categories: true,
          image: true,
          versions: true,
        },
      });
    } else {
      const skip: number = (+page - 1) * +limit;
      const take: number = (+page - 1) * +limit + +limit;

      productList = await prisma.product.findMany({
        skip,
        take,
        where: {
          AND: [
            { public: true },
            { adminApprove: true },
            { categories: { some: { category: category } } },
          ],
        },
        include: {
          features: true,
          categories: true,
          image: true,
          versions: true,
        },
      });
    }
    return res.status(200).json(productList);
  } catch (err) {
    return res.status(500).json(formatError(err as CustomError));
  }
}

export default getProductByCategory;
