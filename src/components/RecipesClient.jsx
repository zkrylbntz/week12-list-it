"use client";

import "./recipesPage.css";
import { useState } from "react";
import Image from "next/image";
import RecipeFilter from "./RecipeFilter";

import Link from "next/link";
import BasketButton from "./BasketButton";

import FavouriteButton from "./FavouriteClient";
import addSession from "./SessionServer";

export default function RecipesClient({ recipes, availableTags }) {
  {
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

    const handleStartWeeklyShop = async () => {
      setIsWeeklyShopStarted(true);

      await addSession();
    };

    return (
      <div>
        <div className="search-filter-container">
          <input
            type="text"
            size={100}
            placeholder="Search by recipe name..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button
            onClick={handleStartWeeklyShop}
            className="weekly-shop-button"
          >
            Start Weekly Shop
          </button>
        </div>

        <RecipeFilter
          tags={availableTags}
          onFilterChange={handleFilterChange}
        />

        <div className="recipes-container">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => {
              const ingredients = Array.isArray(recipe.ingredients)
                ? recipe.ingredients
                : JSON.parse(recipe.ingredients);
              const recipeTags = Array.isArray(recipe.recipe_tags)
                ? recipe.recipe_tags
                : JSON.parse(recipe.recipe_tags);

              return (
                <div key={recipe.id} className="recipe-card">
                  <Link href={`/recipesPage/${recipe.id}`}>
                    <Image
                      src={recipe.image}
                      alt={recipe.name}
                      width={200}
                      height={200}
                      className="recipe-image"
                    />
                  </Link>
                  <div className="card-content">
                    <Link
                      href={`/recipesPage/${recipe.id}`}
                      className="recipe-name"
                    >
                      {recipe.name}
                    </Link>
                    <p className="cook-time">
                      Full Cook Time: {recipe.full_cook_time}
                    </p>
                    {isWeeklyShopStarted && (
                      <BasketButton recipe_id={recipe.id} />
                    )}
                    <FavouriteButton recipe_id={recipe.id} />
                  </div>
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
}
