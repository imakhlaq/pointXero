import { Request, Response } from "express";
import { prisma } from "../../db/database";

async function getProductByCategory(req: Request, res: Response) {
  const { category } = req.params;
  const { page, limit } = req.query;

  let productList;

  if (!page || !limit) {
    productList = await prisma.product.findMany({
      where: { categories: { every: { category: category } } },
    });
  } else {
    productList = await prisma.product.findMany({
      where: { categories: { every: { category: category } } },
    });
  }

  return res.status(200).json(productList);
}

export default getProductByCategory;
