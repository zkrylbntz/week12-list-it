//this page renders the users favourite recipes
import { db } from "@/utils/dbConnection";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

//function to select the current logged in users favourites
export default async function Favourites() {
  const { userId } = await auth();
  const recipes = (
    await db.query(
      `SELECT recipes.id, recipes.image, recipes.name, recipes.full_cook_time FROM recipes JOIN favourites ON recipes.id = favourites.recipe_id WHERE user_clerk_id = $1`,
      [userId]
    )
  ).rows;

  //function to delete a favourite
  async function handleDelete(formValues) {
    "use server";
    const recipe_id = formValues.get("id");
    const deleteFavourite = await db.query(
      `DELETE FROM favourites WHERE recipe_id = $1 AND user_clerk_id = $2`,
      [recipe_id, userId]
    );
    revalidatePath(`/favourites`);
    redirect(`/favourites`);
  }

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <br />
      <h1 className="text-2xl text-center pt-5 mt-5 text-white">
        These are your favourites
      </h1>

      {recipes.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id + "-" + recipe.name}
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
                    Remove from Favourites
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      ) : (
        //this optional return renders when a user has not favourited any recipes
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
            <p className="mb-4">Choose your favourites</p>
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
