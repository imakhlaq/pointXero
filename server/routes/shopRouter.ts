import { Router } from "express";
import getProductByCategory from "../controllers/shop/getProductByCategory";

const app = Router();

app.get("/:category", getProductByCategory);

export default app;
