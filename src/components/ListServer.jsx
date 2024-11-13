"use server";

import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import getCurrentSessionId from "@/utils/currentSession";

export default async function AddList(recipe_id) {
  const { userId } = await auth();
  console.log(recipe_id);

  //   this is where we are determining the users current session
  const session_id = await getCurrentSessionId();

  await db.query(
    `INSERT INTO weekly (recipe_id, user_clerk_id, session_id)
    VALUES ($1, $2, $3)`,
    [recipe_id, userId, session_id]
  );
}
