import "./page.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="main-content">
        <div className="concept concept-one">
          <div className="hover hover-1"></div>
          <div className="hover hover-2"></div>
          <div className="hover hover-3"></div>
          <div className="hover hover-4"></div>
          <div className="hover hover-5"></div>
          <div className="hover hover-6"></div>
          <div className="hover hover-7"></div>
          <div className="hover hover-8"></div>
          <div className="hover hover-9"></div>
          <h1 className="title">
            <Image
              className="image"
              src="/output-onlinepngtools (2) (1).png"
              alt="empty plate, no food here"
              height={500}
              width={600}
            />
          </h1>
        </div>
      </div>

      <div className="card glass">
        <div className="card-body">
          <h2 className="card-title">Meal Planning Made Simple!</h2>
          <h3>Welcome to List It!</h3>
          <p>
            Your personal assistant to delicious, nutritious meals. Planning
            your shop doesn&apos;t have to be hard! With List It, you&apos;ll
            have access to a wide array of recipes that fit your lifestyle.
            Whether you&apos;re vegan, pescatarian, or simply looking for good
            eats, we&apos;ve got recipes to match. Our app helps you save time,
            reduce food waste, and cook meals that nourish you and your family.
          </p>
          <ul className={"list-disc list-inside"}>
            Key features of List It:
            <li>Easy search for recipes by dietary preference</li>
            <li>Personalised meal recommendations</li>
            <li>Generates your shopping list from your selected recipes</li>
            <li>Saves your favourites for later</li>
          </ul>
          <p>Discover delicious ways to eat healthier with List It!</p>

          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
