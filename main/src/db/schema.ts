import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, int, text, unique, serial, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const promenliviprevodi = mysqlTable("promenliviprevodi", {
	id: int().autoincrement().notNull(),
	du: text(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "promenliviprevodi_id"}),
]);

export const usersTable = mysqlTable("users_table", {
	id: serial().notNull(),
	name: varchar({ length: 255 }).notNull(),
	age: int().notNull(),
	email: varchar({ length: 255 }).notNull(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "users_table_id"}),
	unique("id").on(table.id),
]);


export type InsertUsers = typeof usersTable.$inferInsert