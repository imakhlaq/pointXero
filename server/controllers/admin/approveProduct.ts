import { Request, Response } from "express";
import { z, ZodError } from "zod";
import { prisma } from "../../db/database";
import formatError from "../../utils/formatError";

const prodId = z.object({
  id: z.string({
    required_error: "Product id is required",
    invalid_type_error: "Product id must be a string",
  }),
});

async function approveProduct(req: Request, res: Response) {
  try {
    const { id } = prodId.parse(req.body);

    const prod = await prisma.product.update({
      where: { id },
      data: { adminApprove: true },
    });

    return prod;
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(404).json(formatError(err));
    }
    return res.status(500).json({ error: "Server Error" });
  }
}

export default approveProduct;
