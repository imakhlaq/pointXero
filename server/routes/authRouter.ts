import { Router } from 'express';
import logIn from '../controllers/auth/logIn';
import signUp from '../controllers/auth/signUp';

const app = Router();

app.post('/signup', signUp);
app.post('/login', logIn);

export default app;
