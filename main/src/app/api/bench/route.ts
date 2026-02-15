import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";

import { db } from "@/db";
import { promenliviprevodi } from "@/db/schema";

export async function GET() {
  const start = performance.now();

  await db
    .select()
    .from(promenliviprevodi);

  return NextResponse.json({ ms: performance.now() - start });
}
