import { Router } from "express";
import getUnApprovedProducts from "../controllers/admin/getunApprovedProducts";
import adminAuth from "../middlewares/adminAuth";
import approveProduct from "../controllers/admin/approveProduct";
import deleteItem from "../controllers/admin/deleteItem";
import deleteUser from "../controllers/admin/deleteUser";

const app = Router();

app.get("/unapprovedproducts", adminAuth, getUnApprovedProducts);
app.delete("/deleteitem/:prodId", adminAuth, deleteItem);
app.delete("/deleteuser/:userId", adminAuth, deleteUser);
app.post("/approveproduct", adminAuth, approveProduct);

export default app;
