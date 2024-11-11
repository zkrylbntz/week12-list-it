import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import RecipesClient from "./RecipesClient";

export default async function RecipesPage() {
  const { userId } = await auth();

  // Fetch all recipes
  const allRecipesResult = await db.query(`SELECT * FROM recipes`);
  const recipes = allRecipesResult.rows;
  console.log("Fetched Recipes:", recipes); // Log fetched recipes

  // Get unique tags from all recipes
  const allTagsResult = await db.query(
    `SELECT DISTINCT jsonb_array_elements_text(recipe_tags) AS tag FROM recipes`
  );
  const availableTags = allTagsResult.rows.map((row) => row.tag);
  console.log("Available Tags:", availableTags); // Log available tags

  // If the user has selected any tags, filter recipes based on the user's tags
  let filteredRecipes = recipes;
  const userTagsResult = await db.query(
    `SELECT tags FROM users WHERE clerk_id = $1`,
    [userId]
  );
  const userTags = userTagsResult.rows[0]?.tags || [];
  console.log("User Tags:", userTags); // Log user tags

  if (userTags.length > 0) {
    // Filter recipes by matching recipe_tags with userTags
    filteredRecipes = recipes.filter((recipe) => {
      const recipeTags =
        typeof recipe.recipe_tags === "string"
          ? JSON.parse(recipe.recipe_tags)
          : recipe.recipe_tags;

      // Log recipe tags for debugging
      console.log("Recipe Tags:", recipeTags);

      if (userTags.length === 0) {
        return true; // Allow all recipes to pass
      }

      // Check if any of the recipe tags match the user's selected tags
      return recipeTags.some((tag) =>
        userTags.some((userTag) => tag.toLowerCase() === userTag.toLowerCase())
      );
    });

    console.log("Filtered Recipes:", filteredRecipes); // Log filtered recipes

    return (
      <div>
        <RecipesClient
          recipes={filteredRecipes}
          availableTags={availableTags}
        />
      </div>
    );
  }
}
