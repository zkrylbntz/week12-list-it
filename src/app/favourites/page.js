import { db } from "@/utils/dbConnection";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

export default async function Favourites() {
  const { userId } = await auth();
  const favourites = (
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
    <>
      <br />
      <br />
      <br />

      <h1>These are your favourites</h1>

      {favourites.map((recipe) => (
        <div key={recipe.id + "-" + recipe.name} className="mt-2">
          <Link href={`/recipesPage/${recipe.id}`}>
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={200}
              height={200}
            />
          </Link>
          <Link href={`/recipesPage/${recipe.id}`}>{recipe.name}</Link>
          <p>Full Cook Time: {recipe.full_cook_time}</p>
          <form action={handleDelete} key={recipe.id}>
            <input type="hidden" name="id" value={recipe.id} />
            <button className="btn btn-error" type="submit">
              Remove from Favourites
            </button>
          </form>
        </div>
      ))}
    </>
  );
}
