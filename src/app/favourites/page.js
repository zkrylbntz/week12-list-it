import { db } from "@/utils/dbConnection";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function Favourites() {
  const { userId } = await auth();
  const favourites = (
    await db.query(
      `SELECT recipes.id, recipes.image, recipes.name, recipes.full_cook_time FROM recipes JOIN favourites ON recipes.id = favourites.recipe_id WHERE user_clerk_id = $1`,
      [userId]
    )
  ).rows;

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
        </div>
      ))}
    </>
  );
}
