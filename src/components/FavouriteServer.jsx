"use server";

import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";

export default async function AddFavourite(recipe_id) {
  const { userId } = await auth();
  console.log(recipe_id);

  await db.query(
    `INSERT INTO favourites (user_clerk_id, recipe_id)
    VALUES ($1, $2)`,
    [userId, recipe_id]
  );
}
