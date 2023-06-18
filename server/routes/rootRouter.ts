import { Router } from "express";
import authRoutes from "./authRouter";
import shopRouter from "./shopRouter";
import userRouter from "./userRouter";
import adminRouter from "./adminRouter";

const app = Router();

app.use("/product", shopRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use(authRoutes);

export default app;
