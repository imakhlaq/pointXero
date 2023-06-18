import { Request, Response } from "express";
import { prisma } from "../../db/database";
import { Product } from "@prisma/client";

async function getProductByCategory(req: Request, res: Response) {
  const { category } = req.params;
  const { page, limit } = req.query;

  let productList: Product[];

  if (!page || !limit || +page <= 0 || +limit <= 0) {
    productList = await prisma.product.findMany({
      where: { categories: { every: { category: category } } },
    });
  } else {
    const skip: number = (+page - 1) * +limit;
    const take: number = (+page - 1) * +limit + +limit;

    productList = await prisma.product.findMany({
      skip,
      take,
      where: { categories: { every: { category: category } } },
    });
  }
  return res.status(200).json(productList);
}

export default getProductByCategory;
