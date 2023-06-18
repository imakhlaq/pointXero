import { Router } from "express";
import getUnApprovedProducts from "../controllers/admin/getunApprovedProducts";

const app = Router();

app.get("/unapproved", getUnApprovedProducts);

export default app;
