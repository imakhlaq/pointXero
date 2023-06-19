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
        userId: "d1a0af50-6193-4b54-af16-4667d7a11948",
        description: product.description,
        brand: product.brand,
        currentPrice: product.currentPrice,
        marketPrice: product.marketPrice,
        public: product.public,
        features: {
          create: product.features.map((feature) => {
            return { feature };
          }),
        },
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
      include: {
        features: true,
        categories: true,
        image: true,
        size: true,
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