import { getConnectionManager } from "typeorm";
import dotenv from 'dotenv'
import user from '../entities/user'
import order from '../entities/order'
import meal from '../entities/meal'

dotenv.config();

export const conn = getConnectionManager().create({
    type: "postgres",
    url: process.env.DB_URL,
    ssl: true,
    entities: [user, order, meal]
})