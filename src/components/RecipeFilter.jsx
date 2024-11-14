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
    <div className="collapse bg-base-200 text-white">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium bg-orange-500 flex align-middle">
        Filters
      </div>
      <div className="collapse-content bg-orange-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="filter-group">
            <h3 className="text-lg font-semibold mb-3">Difficulty</h3>
            <ul className="space-y-2">
              {difficultyTags.map((tag) => (
                <li key={tag}>
                  <label className="inline-flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                      className="checkbox checkbox-warning border-orange-100"
                    />
                    <span>{tag}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h3 className="text-lg font-semibold mb-3">Intolerances</h3>
            <ul className="space-y-2">
              {intoleranceTags.map((tag) => (
                <li key={tag}>
                  <label className="inline-flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                      className="checkbox checkbox-warning border-orange-100"
                    />
                    <span>{tag}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h3 className="text-lg font-semibold mb-3">Meal</h3>
            <ul className="space-y-2">
              {mealTags.map((tag) => (
                <li key={tag}>
                  <label className="inline-flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                      className="checkbox checkbox-warning border-orange-100"
                    />
                    <span>{tag}</span>
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
