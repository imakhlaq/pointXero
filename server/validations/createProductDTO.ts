import { z } from "zod";

const createProductDTO = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(4, "Title should be atleast have 4 character"),
  features: z.array(z.string()),
  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Description must be a string",
  }),
  brand: z.string({
    required_error: "Brand is required",
    invalid_type_error: "Brand must be a string",
  }),
  currentPrice: z
    .string({
      required_error: "Current Price is required",
      invalid_type_error: "Current Price must be a number",
    })
    .pipe(z.coerce.number()),
  marketPrice: z
    .string({
      required_error: "Market Price is required",
      invalid_type_error: "Market Price must be a number",
    })
    .pipe(z.coerce.number()),
  image: z.array(z.string().url()),
  categories: z.array(z.string()),
  size: z.array(
    z.object({ size: z.string(), quantity: z.string().pipe(z.coerce.number()) })
  ),
});

export default createProductDTO;

// extract the inferred type like this
export type createProduct = z.infer<typeof createProductDTO>;
