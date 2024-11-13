import { db } from "@/utils/dbConnection";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

export default async function Favourites() {
  const { userId } = await auth();
  const recipes = (
    await db.query(
      `SELECT recipes.id, recipes.image, recipes.name, recipes.full_cook_time FROM recipes JOIN favourites ON recipes.id = favourites.recipe_id WHERE user_clerk_id = $1`,
      [userId]
    )
  ).rows;

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
    <div className="flex flex-col items-center space-y-5 m-5">
      <br />
      <br />
      <br />

      <h1 className="text-2xl text-center p-5 m-5 ">
        These are your favourites
      </h1>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div
            key={recipe.id + "-" + recipe.name}
            className="flex flex-col items-center"
          >
            <Link href={`/recipesPage/${recipe.id}`}>
              <p className="text-xl p-5">{recipe.name}</p>
              <Image
                src={recipe.image}
                alt={recipe.name}
                width={250}
                height={250}
              />
            </Link>

            <form action={handleDelete} key={recipe.id}>
              <input type="hidden" name="id" value={recipe.id} />
              <button className="btn btn-error m-5" type="submit">
                Remove from Favourites
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
              <p>Choose your favourites</p>
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
