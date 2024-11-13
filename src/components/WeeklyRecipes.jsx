import Image from "next/image";
import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import getCurrentSessionId from "@/utils/currentSession";
import Link from "next/link";

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

  async function handleDelete(formValues) {
    "use server";
    const recipe_id = formValues.get("id");
    const deleteWeekly = await db.query(
      `DELETE FROM weekly WHERE recipe_id = $1 AND user_clerk_id = $2`,
      [recipe_id, userId]
    );
    revalidatePath(`/WeeklyMeals`);
    redirect(`/WeeklyMeals`);
  }
  return (
    <>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Link href={`/recipesPage/${recipe.id}`}>
              <Image
                src={recipe.image}
                alt={recipe.name}
                width={200}
                height={200}
              />
            </Link>
            <h2>{recipe.name}</h2>
            <form action={handleDelete} key={recipe.id}>
              <input type="hidden" name="id" value={recipe.id} />
              <button type="submit">Remove from Weekly</button>
            </form>
          </div>
        );
      })}
      <Link href={`/list`}>
        <button>Click here, to see your shopping list</button>
      </Link>
    </>
  );
}
