"use server";

import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import getCurrentSessionId from "@/utils/currentSession";

export default async function AddWeekly(recipe_id) {
  const { userId } = await auth();
  console.log(recipe_id);

  //   this is where we are determining the users current session
  const session_id = await getCurrentSessionId();

  const existingWeekly = await db.query(
    `SELECT * FROM weekly WHERE user_clerk_id = $1 AND recipe_id = $2 AND session_id = $3`,
    [userId, recipe_id, session_id]
  );

  if (existingWeekly.rowCount > 0) {
    console.log("This recipe is already in the user's weekly.");
    return { message: "Already in weekly" };
  }

  await db.query(
    `INSERT INTO weekly (recipe_id, user_clerk_id, session_id)
    VALUES ($1, $2, $3)`,
    [recipe_id, userId, session_id]
  );

  console.log("recipe added to favourites");
  return { message: "Added to favourites" };
}

export async function RemoveWeekly(recipe_id) {
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
