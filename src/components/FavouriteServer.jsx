"use server";

import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";

export default async function AddFavourite(recipe_id) {
  const { userId } = await auth();
  console.log(recipe_id);

  // async function handleSubmitFavourite(formData) {
  //   // const recipe_id = formData.get("recipe_id");

  await db.query(
    `INSERT INTO favourites (user_clerk_id, recipe_id)
    VALUES ($1, $2)`,
    [userId, recipe_id]
  );
  // }
  // return (
  //   <>
  //     <form action={handleSubmitFavourite}>
  //       <label htmlFor="user_clerk_id"></label>
  //       <input
  //         type="hidden"
  //         name="user_clerk_id"
  //         id="user_clerk_id"
  //         defaultValue={userId}
  //       />
  //       <label htmlFor="recipe_id"></label>
  //       <input
  //         type="hidden"
  //         name="recipe_id"
  //         id="recipe_id"
  //         defaultValue={recipe_id}
  //       />
  //     </form>
  //   </>
  // );
}
