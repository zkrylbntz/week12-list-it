"use client";

import { useState } from "react";
import Image from "next/image";
import RecipeFilter from "./RecipeFilter";
import Link from "next/link";
import BasketButton from "./BasketButton";

export default function RecipesClient({ recipes, availableTags }) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [isWeeklyShopStarted, setIsWeeklyShopStarted] = useState(false);

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

  const handleStartWeeklyShop = () => {
    setIsWeeklyShopStarted(true);
  };

  return (
    <div>
      <button onClick={handleStartWeeklyShop}>Start Weekly Shop</button>
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
                {isWeeklyShopStarted && (
                  <div>
                    <BasketButton />
                  </div>
                )}
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
