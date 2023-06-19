import { Router } from "express";
import userAuth from "../middlewares/userAutth";
import addProduct from "../controllers/user/addProduct";

const app = Router();

app.post("/addproduct", userAuth, addProduct);

export default app;
