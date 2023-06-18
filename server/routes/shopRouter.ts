import { Router } from "express";
import getProductByCategory from "../controllers/shop/getProductByCategory";
import getProductById from "../controllers/shop/getProductById";

const app = Router();

app.get("/bycategory/:category", getProductByCategory);

app.get("/byproductid/:productId", getProductById);

export default app;
