import { db } from "@/utils/dbConnection";
import Image from "next/image";
import "./page.css";

export async function generateMetadata({ params }) {
  const myParams = await params;

  const { rows: recipes } = await db.query(
    `SELECT * FROM recipes WHERE id = ${myParams.id}`
  );
  const recipe = recipes[0];

  return {
    title: `${recipe.name}`,
    description: `This is a recipe for ${recipe.name}. Like the sound of it? Add it to your list and buy it on your next shop!`,
  };
}

export default async function SingleRecipePage({ params }) {
  const recipes = (
    await db.query(`SELECT * FROM recipes WHERE id = ${params.id}`)
  ).rows;
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div className="recipes-container">
        <div className="recipe-card">
          {recipes.map((recipe) => (
            <>
              <div>
                <h2 className="text-white text-4xl p-5 m-5">{recipe.name}</h2>
              </div>
              <div key={recipe.id} className="sibling">
                {/* <div className="image"> */}
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  width={300}
                  height={300}
                  className="recipe-image"
                />
                {/* </div> */}
                <ul>
                  <div className="card-content">
                    <p className="cook-time">INGREDIENTS</p>
                    {recipe.ingredients.map((ingredient) => {
                      return (
                        <ul
                          className="cook-time"
                          key={recipe.id + "-" + ingredient.name}
                        >
                          <li>
                            {ingredient.amount} {ingredient.name}{" "}
                            {ingredient.prep}
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                </ul>
                <div className="instructions">
                  <p className="cook-time">
                    INSTRUCTIONS: {recipe.instructions}
                  </p>
                  <p className="cook-time">PREP TIME: {recipe.prep_time}</p>
                  <p className="cook-time">COOK TIME: {recipe.cook_time}</p>
                  <p className="cook-time">
                    TOTAL TIME: {recipe.full_cook_time}
                  </p>
                  <p className="cook-time">SERVINGS: {recipe.servings}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

// export async function generateMetadata({ params }) {
//   const recipes = (
//     await db.query(`SELECT name FROM recipes WHERE id = ${params.id}`)
//   ).rows;
//   return {
//     title: `${recipes[0].name}`,
//   };
// }
