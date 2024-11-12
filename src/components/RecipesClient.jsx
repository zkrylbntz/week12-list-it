"use client";

import { useState } from "react";
import Image from "next/image";
import RecipeFilter from "./RecipeFilter";

import FavouriteClient from "./FavouriteClient";

import Link from "next/link";
import BasketButton from "./BasketButton";

import FavouriteButton from "./FavouriteClient";
import { auth } from "@clerk/nextjs/server";

export default function RecipesClient({
  recipes,
  availableTags,
  handleWeeklyShop,
}) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]); // Add selectedTags state

  const [isWeeklyShopStarted, setIsWeeklyShopStarted] = useState(false);

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

  const handleStartWeeklyShop = () => {
    setIsWeeklyShopStarted(true);
  };

  // const handleWeeklyShop = (recipe)=>

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

      <button onClick={handleStartWeeklyShop}>Start Weekly Shop</button>

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
                    <BasketButton onClick={handleWeeklyShop} />
                  </div>
                )}
                <FavouriteButton recipe_id={recipe.id} />
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
