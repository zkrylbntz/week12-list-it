import { db } from "@/utils/dbConnection";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const myParams = await params;

  const { rows: recipes } = await db.query(
    `SELECT * FROM recipes WHERE id = ${myParams.id}`
  );
  const recipe = recipes[0];

  return {
    title: `${recipe.name}`,
    description: `This is a recipe for ${recipe.name}. Like the sound of it? Add it to your list and buy it on your next shop!`,
  };
}

export default async function SingleRecipePage({ params }) {
  const recipes = (
    await db.query(`SELECT * FROM recipes WHERE id = ${params.id}`)
  ).rows;
  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="p-20">
          <h2>RECIPE: {recipe.name}</h2>
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={200}
            height={200}
          />
          <ul>
            <p>INGREDIENTS</p>
            {recipe.ingredients.map((ingredient) => {
              return (
                <ul key={recipe.id + "-" + ingredient.name}>
                  <li>
                    {ingredient.amount} {ingredient.name} {ingredient.prep}
                  </li>
                </ul>
              );
            })}
          </ul>
          <p>INSTRUCTIONS: {recipe.instructions}</p>
          <p>PREP TIME: {recipe.prep_time}</p>
          <p>COOK TIME: {recipe.cook_time}</p>
          <p>TOTAL TIME: {recipe.full_cook_time}</p>
          <p>SERVINGS: {recipe.servings}</p>
        </div>
      ))}
    </>
  );
}

// export async function generateMetadata({ params }) {
//   const recipes = (
//     await db.query(`SELECT name FROM recipes WHERE id = ${params.id}`)
//   ).rows;
//   return {
//     title: `${recipes[0].name}`,
//   };
// }
