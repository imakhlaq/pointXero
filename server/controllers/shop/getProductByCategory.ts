import { Request, Response } from "express";
import { product, Product } from "../../db/schema/product";

async function getProductByCategory(req: Request, res: Response) {
  const { category } = req.params;
  const { page, limit } = req.query;

  let productList;

  if (!page || !limit) {
    return productList;
  }
}
export default getProductByCategory;
