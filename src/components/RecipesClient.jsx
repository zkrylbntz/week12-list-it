"use client";

import { useState } from "react";
import Image from "next/image";
import RecipeFilter from "./RecipeFilter";

export default function RecipesClient({ recipes, availableTags }) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleFilterChange = (selectedTags) => {
    if (selectedTags.length === 0) {
      // If no tags are selected, show all recipes
      setFilteredRecipes(recipes);
    } else {
      // Convert selectedTags to lowercase for case-insensitive comparison
      const lowerCaseSelectedTags = selectedTags.map((tag) =>
        tag.toLowerCase()
      );

      // Filter recipes based on matching tags
      const filtered = recipes.filter((recipe) => {
        // Ensure recipe.recipe_tags is an array and compare with selectedTags
        const recipeTags =
          typeof recipe.recipe_tags === "string"
            ? JSON.parse(recipe.recipe_tags)
            : recipe.recipe_tags;

        // Convert each recipe tag to lowercase
        const lowerCaseRecipeTags = recipeTags.map((tag) => tag.toLowerCase());

        // Check if any of the recipe tags match any of the selected tags
        const allSelectedTagsMatch = lowerCaseSelectedTags.every((tag) =>
          lowerCaseRecipeTags.includes(tag)
        );

        return allSelectedTagsMatch;
      });

      setFilteredRecipes(filtered);
    }
  };

  return (
    <div>
      <RecipeFilter tags={availableTags} onFilterChange={handleFilterChange} />
      <div>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => {
            // Ensure ingredients and recipe_tags are arrays (parse if necessary)
            const ingredients =
              typeof recipe.ingredients === "string"
                ? JSON.parse(recipe.ingredients)
                : recipe.ingredients;
            const recipeTags =
              typeof recipe.recipe_tags === "string"
                ? JSON.parse(recipe.recipe_tags)
                : recipe.recipe_tags;

            return (
              <div key={recipe.id} className="mt-2">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  width={200}
                  height={200}
                />
                <h2>{recipe.name}</h2>
                <ul>
                  <h2>INGREDIENTS</h2>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.name} {ingredient.prep}
                    </li>
                  ))}
                </ul>
                <p>Instructions: {recipe.instructions}</p>
                <p>Prep Time: {recipe.prep_time}</p>
                <p>Cook Time: {recipe.cook_time}</p>
                <p>Full Cook Time: {recipe.full_cook_time}</p>
                <p>Servings: {recipe.servings}</p>
                <ul>
                  Recipe Tags:
                  {recipeTags.map((recipe_tag, index) => (
                    <li key={index}>{recipe_tag}</li>
                  ))}
                </ul>
              </div>
            );
          })
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}
