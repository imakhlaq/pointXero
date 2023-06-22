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
        userId: req.body.userId,
        description: product.description,
        brand: product.brand,
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
        versions: {
          create: product.versions.map((version) => {
            return {
              marketPrice: product.marketPrice,
              currentPrice: product.currentPrice,
              quantity: version.quantity,
              version: version.version,
            };
          }),
        },
      },
      include: {
        features: true,
        categories: true,
        image: true,
        versions: true,
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
