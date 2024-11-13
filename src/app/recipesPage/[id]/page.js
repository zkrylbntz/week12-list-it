import { db } from "@/utils/dbConnection";
import Image from "next/image";

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
