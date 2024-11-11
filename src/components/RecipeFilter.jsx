"use client";

import { useState } from "react";

export default function RecipeFilter({ tags, onFilterChange }) {
  const [selectedTags, setSelectedTags] = useState([]);

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
          <div>
            {tags.map((tag, index) => (
              <li key={index}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
