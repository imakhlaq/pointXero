import { Router } from 'express';
import authRoutes from './authRouter';

const app = Router();

app.use(authRoutes);

export default app;
