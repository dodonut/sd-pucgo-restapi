import { getConnectionManager } from "typeorm";
import dotenv from 'dotenv'
import user from '../entities/user'

dotenv.config();

export const conn = getConnectionManager().create({
    type: "postgres",
    url: process.env.DB_URL,
    ssl: true,
    entities: [user]
})