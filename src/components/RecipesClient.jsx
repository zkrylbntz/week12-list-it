"use client";

import { useState } from "react";
import Image from "next/image";
import RecipeFilter from "./RecipeFilter";

export default function RecipesClient({ recipes, availableTags }) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]); // Add selectedTags state

  const handleFilterChange = (tags) => {
    setSelectedTags(tags); // Update selected tags state

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filtered = recipes.filter((recipe) => {
      // Check if recipe matches selected tags
      const matchesTags =
        tags.length === 0 ||
        tags.every((tag) =>
          recipe.recipe_tags.some((recipeTag) =>
            recipeTag.toLowerCase().includes(tag.toLowerCase())
          )
        );

      // Check if recipe name includes the search term
      const matchesSearchTerm = recipe.name
        .toLowerCase()
        .includes(lowerCaseSearchTerm);

      return matchesTags && matchesSearchTerm;
    });

    setFilteredRecipes(filtered);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Trigger filtering with the updated search term and current tags
    handleFilterChange(selectedTags);
  };

  return (
    <div>
      {/* Search bar for recipe names */}
      <input
        type="text"
        size={100}
        placeholder="Search by recipe name..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full"
      />

      {/* Tag-based filters */}
      <RecipeFilter tags={availableTags} onFilterChange={handleFilterChange} />

      <div>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => {
            const ingredients = Array.isArray(recipe.ingredients)
              ? recipe.ingredients
              : JSON.parse(recipe.ingredients);
            const recipeTags = Array.isArray(recipe.recipe_tags)
              ? recipe.recipe_tags
              : JSON.parse(recipe.recipe_tags);

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
