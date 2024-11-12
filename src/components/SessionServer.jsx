"use server";

import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";

export default async function addSession() {
  const { userId } = await auth();

  await db.query(
    `INSERT INTO sessions (user_clerk_id)
    VALUES ($1)`,
    [userId]
  );
}
