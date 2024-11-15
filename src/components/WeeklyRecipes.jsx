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
    <div className="flex flex-col items-center space-y-8 p-8">
      <Link href={`/list`}>
        <button className="btn bg-white text-black px-6 py-3 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          View Shopping List
        </button>
      </Link>

      {recipes.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="card bg-orange-500 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <Link href={`/recipesPage/${recipe.id}`}>
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  width={400}
                  height={300}
                  className="object-cover h-60 w-full"
                />
              </Link>
              <div className="p-6">
                <h2 className="text-2xl text-white font-semibold mb-3 text-center">
                  {recipe.name}
                </h2>

                <form action={handleDelete}>
                  <input type="hidden" name="id" value={recipe.id} />
                  <button
                    type="submit"
                    className="btn bg-white w-full mt-4 text-black font-medium py-2 rounded-lg transition-colors duration-200 hover:shadow-x1"
                  >
                    Remove from Weekly
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      ) : (
        //this optional return renders when a user has not added any recipes to thier weekly meals
        <div className="card bg-base-100 shadow-lg rounded-lg w-96 overflow-hidden text-center">
          <figure>
            <Image
              src="/emptyPlate.jpg"
              alt="Empty plate, no food here"
              height={400}
              width={640}
              className="object-cover"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-semibold mb-2">
              Oops, no recipes!
            </h2>
            <p className="mb-4">Choose your recipes for your weekly shop.</p>
            <Link href={`/recipesPage`}>
              <button className="btn btn-primary text-white w-full py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                Click Here
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
