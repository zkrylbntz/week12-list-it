import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";

export default async function getCurrentSessionId() {
  const { userId } = await auth();

  const result = await db.query(
    `SELECT id FROM sessions WHERE user_clerk_id = $1 ORDER BY id DESC LIMIT 1`,
    [userId]
  );

  const session_id = result.rows[0].id;
  return session_id;
}
