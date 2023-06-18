import { Request, Response } from "express";

async function getProductByCategory(req: Request, res: Response) {
  const { category } = req.params;
  const { page, limit } = req.query;

  let productList;

  if (!page || !limit) {
  }
}

export default getProductByCategory;
