
import 'dotenv/config';
import path from 'path';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${path.join(__dirname, '**', 'entities', '**', '*.{js,ts}')}`],
  migrations: [`${path.join('./', '**', 'database', 'migrations', '*', '.{js,ts}')}`],
  migrationsRun: true
});

