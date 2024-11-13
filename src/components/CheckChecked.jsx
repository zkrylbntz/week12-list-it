// "use client";

// import { useState } from "react";

// export default function CheckChecked({ handleSubmit }) {
//   const [username, setUsername] = useState("");
//   const [selectedDietaryRequirements, setSelectedDietaryRequirements] =
//     useState([]);

//   const handleCheckboxChange = (event) => {
//     const value = event.target.value;
//     setSelectedDietaryRequirements((prev) =>
//       prev.includes(value)
//         ? prev.filter((item) => item !== value)
//         : [...prev, value]
//     );
//   };

//   const validateAndSubmit = (e) => {
//     e.preventDefault();

//     if (username.trim() === "") {
//       alert("Please provide a username.");
//       return;
//     }

//     if (selectedDietaryRequirements.length === 0) {
//       alert("Please select at least one dietary requirement.");
//       return;
//     }

//     const formData = new FormData();
//     formData.set("user_name", username);
//     selectedDietaryRequirements.forEach((req) =>
//       formData.append("dietary_requirement", req)
//     );
//     handleSubmit(formData);
//   };

//   return (
//     <form
//       onSubmit={validateAndSubmit}
//       className="flex flex-col items-center p-10"
//     >
//       <label htmlFor="user_name">Username:</label>
//       <input
//         type="text"
//         id="user_name"
//         name="user_name"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />

//       <fieldset>
//         <legend>Dietary Requirements</legend>
//         <label>
//           <input
//             type="checkbox"
//             name="dietary_requirement"
//             value="vegetarian"
//             checked={selectedDietaryRequirements.includes("vegetarian")}
//             onChange={handleCheckboxChange}
//           />
//           Vegetarian
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="dietary_requirement"
//             value="vegan"
//             checked={selectedDietaryRequirements.includes("vegan")}
//             onChange={handleCheckboxChange}
//           />
//           Vegan
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="dietary_requirement"
//             value="pescatarian"
//             checked={selectedDietaryRequirements.includes("pescatarian")}
//             onChange={handleCheckboxChange}
//           />
//           Pescatarian
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="dietary_requirement"
//             value="none"
//             checked={selectedDietaryRequirements.includes("none")}
//             onChange={handleCheckboxChange}
//           />
//           None
//         </label>
//       </fieldset>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// CheckChecked.js
// CheckChecked.js
// CheckChecked.js
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
    <form
      onSubmit={validateAndSubmit}
      className="flex flex-col items-center p-10"
    >
      <label htmlFor="user_name">Username:</label>
      <input
        type="text"
        id="user_name"
        name="user_name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <fieldset>
        <legend>Dietary Requirements</legend>
        <label>
          <input
            type="radio"
            name="dietary_requirement"
            value="vegetarian"
            checked={selectedDietaryRequirement === "vegetarian"}
            onChange={handleRadioChange}
          />
          Vegetarian
        </label>
        <label>
          <input
            type="radio"
            name="dietary_requirement"
            value="vegan"
            checked={selectedDietaryRequirement === "vegan"}
            onChange={handleRadioChange}
          />
          Vegan
        </label>
        <label>
          <input
            type="radio"
            name="dietary_requirement"
            value="pescatarian"
            checked={selectedDietaryRequirement === "pescatarian"}
            onChange={handleRadioChange}
          />
          Pescatarian
        </label>
        <label>
          <input
            type="radio"
            name="dietary_requirement"
            value="none"
            checked={selectedDietaryRequirement === "none"}
            onChange={handleRadioChange}
          />
          None
        </label>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
}
