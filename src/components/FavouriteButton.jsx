import { SlHeart } from "react-icons/sl";
// import clsx from "clsx";

export default function FavouriteButton() {
  return (
    <>
      <button
      //   formAction={addfavourite}
      >
        <SlHeart size={24} className="hover:text-orange-600" />
      </button>
    </>
  );
}
