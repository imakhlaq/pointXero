import { Router } from "express";
import getUnApprovedProducts from "../controllers/admin/getunApprovedProducts";
import adminAuth from "../middlewares/adminAuth";
import approveProduct from "../controllers/admin/approveProduct";

const app = Router();

app.get("/unapprovedproducts", adminAuth, getUnApprovedProducts);
app.post("/approveproduct", adminAuth, approveProduct);

export default app;
