import BasketButton from "@/components/BasketButton";
import FavouriteClient from "@/components/FavouriteClient";
import { db } from "@/utils/dbConnection";
import Image from "next/image";
import Link from "next/link";

export default async function Favourites() {
  const favourites = (
    await db.query(
      `SELECT recipes.id, recipes.image, recipes.name, recipes.full_cook_time FROM recipes JOIN favourites ON recipes.id = favourites.recipe_id`
    )
  ).rows;

  console.log(favourites);

  return (
    <>
      <br />
      <br />
      <br />

      <h1>These are your favourites</h1>
      {/* <FavouriteClient />
      <BasketButton /> */}

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
