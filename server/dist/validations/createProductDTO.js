"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var createProductDTO = zod_1.z.object({
    title: zod_1.z
        .string({
        required_error: "Title is required",
        invalid_type_error: "Title must be a string",
    })
        .min(4, "Title should be atleast have 4 character"),
    features: zod_1.z.array(zod_1.z.string()),
    public: zod_1.z.boolean(),
    description: zod_1.z.string({
        required_error: "Description is required",
        invalid_type_error: "Description must be a string",
    }),
    brand: zod_1.z.string({
        required_error: "Brand is required",
        invalid_type_error: "Brand must be a string",
    }),
    image: zod_1.z.array(zod_1.z.string().url()),
    categories: zod_1.z.array(zod_1.z.string()),
    versions: zod_1.z.array(zod_1.z.object({
        version: zod_1.z.string(),
        quantity: zod_1.z.string().pipe(zod_1.z.coerce.number()),
        currentPrice: zod_1.z
            .string({
            required_error: "Current Price is required",
            invalid_type_error: "Current Price must be a number",
        })
            .pipe(zod_1.z.coerce.number()),
        marketPrice: zod_1.z
            .string({
            required_error: "Market Price is required",
            invalid_type_error: "Market Price must be a number",
        })
            .pipe(zod_1.z.coerce.number()),
    })),
});
exports.default = createProductDTO;
