
import express from 'express';
import 'express-async-errors';
import { erroMiddleware } from './middlewares/ApiError';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get('/', (_request, response) => {
  return response.json({ message: 'Ô Loco meu!' });
});

app.use(erroMiddleware);
app.listen(3333);
