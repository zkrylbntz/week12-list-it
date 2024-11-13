"use client";

import { useState } from "react";

export default function RecipeFilter({ onFilterChange }) {
  // Define the filter groups
  const difficultyTags = ["easy", "medium", "hard"];
  const intoleranceTags = ["gluten free", "lactose free"];
  const mealTags = ["breakfast", "lunch", "dinner"];

  // State to track selected tags
  const [selectedTags, setSelectedTags] = useState([]);

  // Function to handle changes to the selected tags
  const handleTagChange = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updatedTags);
    onFilterChange(updatedTags);
  };

  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">Filters</div>
      <div className="collapse-content">
        <div>
          <div className="filter-group">
            <h3 className="text-lg font-semibold">Difficulty</h3>
            <ul>
              {difficultyTags.map((tag) => (
                <li key={tag}>
                  <label>
                    <input
                      type="checkbox"
                      value={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                      className="checkbox checkbox-warning border-orange-400"
                    />
                    {tag}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h3 className="text-lg font-semibold">Intolerances</h3>
            <ul>
              {intoleranceTags.map((tag) => (
                <li key={tag}>
                  <label>
                    <input
                      type="checkbox"
                      value={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                      className="checkbox checkbox-warning border-orange-400"
                    />
                    {tag}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h3 className="text-lg font-semibold">Meal</h3>
            <ul>
              {mealTags.map((tag) => (
                <li key={tag}>
                  <label>
                    <input
                      type="checkbox"
                      value={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                      className="checkbox checkbox-warning border-orange-400"
                    />
                    {tag}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
