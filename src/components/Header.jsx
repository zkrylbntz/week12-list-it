import Link from "next/link";
import "./header.css";
import { Roboto_Flex } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const RobotoFlex = Roboto_Flex({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const JosefinSans = Josefin_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div className="headerContainer">
      <nav className="navBar">
        <div className="dropdown" id="navButton">
          <div tabIndex={0} role="button">
            User
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-orange-400 z-[1] w-35 p-2 shadow"
            id="navButtonDrop"
          >
            <li>
              <Link className={RobotoFlex.className} href="/Settings">
                Settings
              </Link>
            </li>
            <li>
              <Link className={RobotoFlex.className} href="/WeeklyMeals">
                Weekly Meals
              </Link>
            </li>
            <li>
              <Link className={RobotoFlex.className} href="/FavMeals">
                Favourite Meals
              </Link>
            </li>
            <li>
              <a>Log out</a>
            </li>
          </ul>
        </div>
        <Link id="navButton2" className={RobotoFlex.className} href="/">
          Recipes
        </Link>
        <Link
          id="navButton3"
          className={RobotoFlex.className}
          href="/Ingredients"
        >
          Ingredients
        </Link>
        <Link id="navButton" className={RobotoFlex.className} href="/List">
          List
        </Link>
      </nav>
    </div>
  );
}