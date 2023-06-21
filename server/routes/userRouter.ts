import { Router } from "express";
import userAuth from "../middlewares/userAutth";
import addProduct from "../controllers/user/addProduct";
import getCartData from "../controllers/user/getCartData";
import updateCart from "../controllers/user/updateCart";
import deleteCartItem from "../controllers/user/deleteCartItem";

const app = Router();

app.post("/addproduct", userAuth, addProduct);
app.get("/getcart", userAuth, getCartData);
app.post("/updatecart", userAuth, updateCart);
app.get("/deletecartitem/:prodId", userAuth, deleteCartItem);

export default app;
