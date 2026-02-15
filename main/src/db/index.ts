import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
  
//I switch between pool and no pool from here
export const pool = mysql.createPool(process.env.DATABASE_URL!);
export const db = drizzle({ client: pool });
// export const db = drizzle(process.env.DATABASE_URL!)