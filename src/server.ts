
import express from 'express';
import 'reflect-metadata';
import { dataSource } from './database/dataSource';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333, async () => {
  try {
    await dataSource.initialize();
    console.log('Server started on port 3333!');
  } catch (error) {
    console.log(error);
  }
});
