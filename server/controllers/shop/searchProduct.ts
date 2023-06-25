import { Request, Response } from "express";
import { prisma } from "../../db/database";

async function searchProduct(req: Request, res: Response) {
  const { searchTerm } = req.params;

  const allProducts = await prisma.product.findMany({
    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
          },
        },
        {
          description: {
            contains: searchTerm,
          },
        },
      ],
    },
    include: {
      versions: true,
      image: true,
    },
  });

  return res.status(200).json(allProducts);
}

export default searchProduct;
