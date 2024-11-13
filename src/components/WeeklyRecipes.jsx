import Image from "next/image";
import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import getCurrentSessionId from "@/utils/currentSession";

export default async function WeeklyRecipes() {
  const { userId } = await auth();
  const session_id = await getCurrentSessionId();

  const recipes_results = await db.query(
    `SELECT recipes.* FROM weekly
JOIN recipes ON recipes.id = weekly.recipe_id
WHERE user_clerk_id = $1 AND  session_id = $2 ;`,
    [userId, session_id]
  );
  console.log(recipes_results);

  const recipes = recipes_results.rows;
  return (
    <>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={200}
              height={200}
            />
            <h2>{recipe.name}</h2>
          </div>
        );
      })}
    </>
  );
}
