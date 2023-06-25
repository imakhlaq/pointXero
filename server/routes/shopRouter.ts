import { Router } from "express";
import getProductByCategory from "../controllers/shop/getProductByCategory";
import getProductById from "../controllers/shop/getProductById";
import searchProduct from "../controllers/shop/searchProduct";

const app = Router();

app.get("/bycategory/:category", getProductByCategory);
app.get("/byproductid/:productId", getProductById);
app.get("/productbysearch/:searchTerm", searchProduct);

export default app;
