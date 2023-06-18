import { Request, Response } from "express";
import { z } from "zod";
import createProductDTO from "../../validations/createProductDTO";

async function addProduct(req: Request, res: Response) {
  try {
    const product = createProductDTO.parse(req.body);
  } catch (er) {}
}

export default addProduct;
