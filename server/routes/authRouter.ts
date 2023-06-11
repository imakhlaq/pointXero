import { Router } from 'express';
import logIn from '../controllers/auth/logIn';
import signup from '../controllers/auth/signup';

const app = Router();

app.post('/signup', signup);
app.post('/login', logIn);

export default app;
