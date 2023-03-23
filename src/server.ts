import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333, async () => {
  console.log('Server started on port 3333!');
});
