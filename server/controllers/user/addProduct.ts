import { Request, Response } from "express";
import { z, ZodError } from "zod";
import createProductDTO from "../../validations/createProductDTO";
import formatError from "../../utils/formatError";
import CustomError from "../../utils/CustomError";
import { prisma } from "../../db/database";

async function addProduct(req: Request, res: Response) {
  try {
    const product = createProductDTO.parse(req.body);

    const newProduct = await prisma.product.create({
      data: {
        title: product.title,
        public: product.public,
        features: {
          create: product.features.map((feature) => {
            return { feature };
          }),
        },
        userId: "0bc2404b-7ff8-4586-956b-3910a74bb194",
        description: product.description,
        brand: product.brand,
        currentPrice: product.currentPrice,
        marketPrice: product.marketPrice,

        categories: {
          create: product.categories.map((category) => {
            return { category };
          }),
        },
        image: {
          create: product.image.map((img) => {
            return { url: img };
          }),
        },
        size: {
          create: product.size.map((size) => {
            return { size: size.size, quantity: size.quantity };
          }),
        },
      },
    });

    return res.status(201).json(newProduct);
  } catch (_err) {
    if (_err instanceof ZodError) {
      return res.status(402).json(formatError(_err));
    }
    const err = _err as CustomError;

    return res.status(err.statusCode ?? 500).json(formatError(err));
  }
}

export default addProduct;
