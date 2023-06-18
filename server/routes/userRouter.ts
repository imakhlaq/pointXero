import { Router } from "express";
import userAuth from "../middlewares/userAutth";

const app = Router();

app.post("/addProduct", userAuth);

export default app;
