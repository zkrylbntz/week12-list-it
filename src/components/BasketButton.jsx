"use client";

import { GrBasket } from "react-icons/gr";

import { useState } from "react";
import "./favouritebutton.css";
import AddWeekly from "./WeeklyServer";

export default function BasketButton({ recipe_id }) {
  const [btnClass, setBtnClass] = useState(false);
  const [btnColor, setBtnColor] = useState("white");
  const [isClicked, setIsClicked] = useState(false);

  //this function changes the colour of the basket button and keeps it selected
  //when a user refreshes, it does not state seleted, local storage will need to be used to fix this
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
        aria-label="add-to-basket-button"
        onClick={handleWeeklyShop}
        disabled={isClicked}
        style={{ backgroundColor: btnColor }}
      >
        <GrBasket size={24} />
      </button>
    </>
  );
}
