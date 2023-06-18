import { Router } from "express";
import authRoutes from "./authRouter";
import shopRouter from "./shopRouter";

const app = Router();

app.use("/product", shopRouter);
app.use(authRoutes);

export default app;
