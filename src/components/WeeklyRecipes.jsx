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
    <div className="flex flex-col items-center space-y-5 m-5">
      <Link href={`/list`}>
        <button className="btn btn-active btn-accent btn-lg">
          Shopping List
        </button>
      </Link>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id} className="flex flex-col items-center">
            <h2 className="text-xl p-5">{recipe.name}</h2>
            <Link href={`/recipesPage/${recipe.id}`}>
              <Image
                src={recipe.image}
                alt={recipe.name}
                width={250}
                height={250}
              />
            </Link>

            <form action={handleDelete} key={recipe.id}>
              <input type="hidden" name="id" value={recipe.id} />
              <button type="submit" className="btn btn-error m-5">
                Remove from Weekly
              </button>
            </form>
          </div>
        ))
      ) : (
        <div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                src="/emptyPlate.jpg"
                alt="empty plate, no food here"
                height={400}
                width={640}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Oops no recipes!</h2>
              <p>Choose your recipes for your weekly shop</p>
              <div className="card-actions justify-end">
                <Link href={`/recipesPage`}>
                  <button className="btn btn-primary">Click Here</button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
