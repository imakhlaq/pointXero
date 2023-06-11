import { Router } from 'express';
import signIn from '../controllers/auth/login';
import logIn from '../controllers/auth/signin';

const app = Router();

app.post('/signin', signIn);
app.post('/login', logIn);

export default app;
