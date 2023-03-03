import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';

export const sequelize = new Sequelize(process.env.DB_SCHEMA || "postgres", process.env.DB_USER || 'postgres',
process.env.DB_PASSWORD || '1337', {
  port: 5433,
  host: process.env.DB_HOST || 'db',
  dialect: "postgres",
});
