"use client";

import { useState } from "react";

export default function CheckChecked({
  handleSubmit,
  initialUsername = "",
  initialDietaryRequirements = [],
}) {
  const [username, setUsername] = useState(initialUsername);
  const [selectedDietaryRequirement, setSelectedDietaryRequirement] = useState(
    initialDietaryRequirements[0] || "" // Only one selection allowed, so initialize with the first one
  );

  const handleRadioChange = (event) => {
    setSelectedDietaryRequirement(event.target.value); // Set the single selected requirement
  };

  const validateAndSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      alert("Please provide a username.");
      return;
    }

    if (!selectedDietaryRequirement) {
      alert("Please select a dietary requirement.");
      return;
    }

    const formData = new FormData();
    formData.set("user_name", username);
    formData.append("dietary_requirement", selectedDietaryRequirement);
    handleSubmit(formData);
  };

  return (
    <div className="pt-12">
      <form
        onSubmit={validateAndSubmit}
        className="flex flex-col items-center bg-orange-500 shadow-md rounded-lg p-8  space-y-6 max-w-md mx-auto mt-10"
      >
        <label htmlFor="user_name" className="text-lg font-semibold text-white">
          Username:
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full p-2 border text-white border-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
        />

        <fieldset className="w-full p-4 border border-white rounded-lg">
          <legend className="text-lg font-semibold text-white mb-2">
            Dietary Preferences
          </legend>
          <div className="flex flex-col space-y-3">
            <label className="inline-flex items-center text-white">
              <input
                type="radio"
                name="dietary_requirement"
                value="vegetarian"
                checked={selectedDietaryRequirement === "vegetarian"}
                onChange={handleRadioChange}
                className="form-radio text-orange-500 focus:ring-0"
              />
              <span className="ml-2"> Vegetarian </span>
            </label>
            <label className="inline-flex items-center text-white">
              <input
                type="radio"
                name="dietary_requirement"
                value="vegan"
                checked={selectedDietaryRequirement === "vegan"}
                onChange={handleRadioChange}
                className="form-radio text-orange-500 focus:ring-0"
              />
              <span className="ml-2"> Vegan </span>
            </label>
            <label className="inline-flex items-center text-white">
              <input
                type="radio"
                name="dietary_requirement"
                value="pescatarian"
                checked={selectedDietaryRequirement === "pescatarian"}
                onChange={handleRadioChange}
                className="form-radio text-orange-500 focus:ring-0"
              />
              <span className="ml-2"> Pescatarian </span>
            </label>
            <label className="inline-flex items-center text-white">
              <input
                type="radio"
                name="dietary_requirement"
                value="none"
                checked={selectedDietaryRequirement === "none"}
                onChange={handleRadioChange}
                className="form-radio text-orange-500 focus:ring-0"
              />
              <span className="ml-2"> None </span>
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
