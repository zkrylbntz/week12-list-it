"use client";

// import { BiSolidHeartCircle } from "react-icons/bi";
import { auth } from "@clerk/nextjs/server";

import { useState } from "react";
import "./favouritebutton.css";
import AddFavourite from "./FavouriteServer";

export default function FavouriteButton({ clerk_id, recipe_id }) {
  // const [btnClass, setBtnClass] = useState(false);
  const [btnColor, setBtnColor] = useState("white");

  // const handleFavouriteSubmit = (clerk_id, recipe_id);

  const handleFavouriteSubmit = async () => {
    // Toggle the button color
    setBtnColor(btnColor === "white" ? "red" : "white");

    await AddFavourite(clerk_id, recipe_id);
  };
  return (
    <>
      {/* <button
        className="favourite-button"
        //   formAction={addfavourite}
        onClick={() => {
          btnColor === "white" ? setBtnColor("red") : setBtnColor("white");
        }}
        style={{ backgroundColor: btnColor }}
      >
        <BiSolidHeartCircle size={24} />
      </button> */}
      <button
        type="submit"
        className="btn"
        // onClick={() => {
        //   btnColor === "white" ? setBtnColor("red") : setBtnColor("white");
        // }}
        onClick={handleFavouriteSubmit}
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
