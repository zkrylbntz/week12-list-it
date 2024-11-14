"use client";

import { GrBasket } from "react-icons/gr";

import { useState } from "react";
import "./favouritebutton.css";
import AddWeekly from "./WeeklyServer";

export default function BasketButton({ recipe_id }) {
  const [btnClass, setBtnClass] = useState(false);
  const [btnColor, setBtnColor] = useState("white");
  const [isClicked, setIsClicked] = useState(false);

  const handleWeeklyShop = async () => {
    setBtnColor(btnColor === "white" ? "green" : "white");
    setIsClicked(true);

    await AddWeekly(recipe_id);
  };

  return (
    <>
      <button
        type="submit"
        className="btn"
        onClick={handleWeeklyShop}
        disabled={isClicked}
        style={{ backgroundColor: btnColor }}
      >
        <GrBasket size={24} />
      </button>
    </>
  );
}
