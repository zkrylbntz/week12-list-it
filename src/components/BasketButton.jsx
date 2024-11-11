"use client";

import { GrBasket } from "react-icons/gr";

import { useState } from "react";
import "./favouritebutton.css";

export default function BasketButton() {
  const [btnClass, setBtnClass] = useState(false);
  const [btnColor, setBtnColor] = useState("white");
  return (
    <>
      <button
        className="border-black border-2 p-1 basket-button"
        //   formAction={addfavourite}
        onClick={() => {
          btnColor === "white" ? setBtnColor("green") : setBtnColor("white");
        }}
        style={{ backgroundColor: btnColor }}
      >
        <GrBasket size={24} />
      </button>
    </>
  );
}
