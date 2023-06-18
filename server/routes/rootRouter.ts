import { Router } from "express";
import authRoutes from "./authRouter";
import shopRouter from "./shopRouter";
import userRouter from "./userRouter";

const app = Router();

app.use("/product", shopRouter);
app.use("/user", userRouter);
app.use(authRoutes);

export default app;
