import express, { Express } from 'express';
import rootRouter from './routes/rootRouter';

const app: Express = express();
const port = 3000;

app.use(rootRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
