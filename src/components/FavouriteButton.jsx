"use client";

import { BiSolidHeartCircle } from "react-icons/bi";

import { useState } from "react";
import "./favouritebutton.css";
// import clsx from "clsx";

export default function FavouriteButton() {
  const [btnClass, setBtnClass] = useState(false);
  const [btnColor, setBtnColor] = useState("white");
  return (
    <>
      <button
        className="favourite-button"
        //   formAction={addfavourite}
        onClick={() => {
          btnColor === "white" ? setBtnColor("red") : setBtnColor("white");
        }}
        style={{ backgroundColor: btnColor }}
      >
        <BiSolidHeartCircle size={24} />
      </button>
      <br />
      <button
        className="btn"
        onClick={() => {
          btnColor === "white" ? setBtnColor("red") : setBtnColor("white");
        }}
        style={{ backgroundColor: btnColor }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </>
  );
}
