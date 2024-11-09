// This page is for rendering the entire recipe it selects all columns from our recipes table
// for the image the next.config.mjs has been modified to allow all url in src

import { db } from "@/utils/dbConnection";
import Image from "next/image";

export default async function RecipesPage() {
  // this query will change when we add the filters based on the user tags
  const recipes_results = await db.query(`SELECT * FROM recipes`);
  const recipes = recipes_results.rows;

  return (
    <>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Image
              src={recipe.image}
              alt={recipe.name}
              width={200}
              height={200}
            />
            <h2>{recipe.name}</h2>
            <ul>
              <h2>INGREDIENTS</h2>
              {recipe.ingredients.map((ingredient) => {
                return (
                  <ul key={recipe.id + "-" + ingredient.name}>
                    <li>
                      {ingredient.name} {ingredient.prep}
                    </li>
                  </ul>
                );
              })}
            </ul>
            <p>Instructions:{recipe.instructions}</p>
            <p>Prep Time:{recipe.prep_time}</p>
            <p>Cook Time:{recipe.cook_time}</p>
            <p>Full Cook Time:{recipe.full_cook_time}</p>
            <p>Servings:{recipe.servings}</p>
            {/* we may not want to render the tags for each individual recipe, this is just for testing */}
            <ul>
              Recipe Tags:
              {recipe.recipe_tags.map((recipe_tag) => {
                return <li key={recipe.id + "-" + recipe_tag}>{recipe_tag}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
