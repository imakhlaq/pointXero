import express, { Express } from 'express';
import rootRouter from './routes/rootRouter';
import config from './config/envConfig';
import cors from 'cors';

const app: Express = express();
const port = config.PORT;

app.use(cors());
app.use(express.json());

app.use(rootRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
