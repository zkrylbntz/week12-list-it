import Image from "next/image";
import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import getCurrentSessionId from "@/utils/currentSession";
import Link from "next/link";

export default async function List() {
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
            {recipe.ingredients.map((ingredient) => {
              return (
                <ul key={recipe.id + "-" + ingredient.name}>
                  <li>
                    <input type="checkbox" className="checkbox" />
                    {ingredient.amount} {ingredient.name} {ingredient.prep}
                  </li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
