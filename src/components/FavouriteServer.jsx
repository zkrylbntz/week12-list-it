"use server";

import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";

export default async function AddFavourite(recipe_id) {
  const { userId } = await auth();
  console.log(recipe_id);

  //gets the favourites that are linked to the logged in user
  const existingFavourite = await db.query(
    `SELECT * FROM favourites WHERE user_clerk_id = $1 AND recipe_id = $2`,
    [userId, recipe_id]
  );

  if (existingFavourite.rowCount > 0) {
    console.log("This recipe is already in the user's favourite.");
    return { message: "Already in favourites" };
  }

  await db.query(
    `INSERT INTO favourites (user_clerk_id, recipe_id)
    VALUES ($1, $2)`,
    [userId, recipe_id]
  );

  console.log("recipe added to favourites");
  return { message: "Added to favourites" };
}
