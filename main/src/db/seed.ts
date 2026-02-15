// import { db, pool } from ".";
import { db } from ".";
import { InsertUsers, promenliviprevodi } from "./schema";

// const toPush: InsertUsers[] = Array.from({length: 20000}, () => ({age: 24, email: 'testgfwrjgourehgowe@gwrjhgew.com', name: "Drago wtfw fwefew gerwerfqwd"}))
const start = performance.now()
// const req = []
// for(let i = 0; i < 1; i++) req.push(db.insert(promenliviprevodi).values(toPush))
// await Promise.all(req)
// const users = await db.select().from(promenliviprevodi)
// console.log(users.length)
const times = 20
// for(let i = 0; i < times; i++) await db.select().from(promenliviprevodi) //with Pool
for(let i = 0; i < 20; i++) await db.select().from(promenliviprevodi) //without Pool
const perf = performance.now() - start 
console.log(`Time took ${perf} ms`)
console.log(`Time per query: ${(perf / times).toFixed(2)} ms`)
// await pool.end()