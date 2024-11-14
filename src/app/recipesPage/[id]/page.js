import { db } from "@/utils/dbConnection";
import Image from "next/image";
import "./page.css";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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

async function handleRefresh(formValues) {
  "use server";

  revalidatePath(`/recipesPage `);
  redirect(`/recipesPage`);
}

export default async function SingleRecipePage({ params }) {
  const recipes = (
    await db.query(`SELECT * FROM recipes WHERE id = ${params.id}`)
  ).rows;
  return (
    <>
      <br />
      <br />

      <div>
        <form action={handleRefresh}>
          <input type="hidden" />
          <button type="submit" className="btn btn-success m-10">
            Back to recipes
          </button>
        </form>
      </div>
      <br />


      <div className="recipes-container2">
        <div className="recipe-card2">


          {recipes.map((recipe) => (
            <div key={recipes.id}>
              <div>
                <h2 className="text-white text-4xl p-5 m-5">{recipe.name}</h2>
              </div>
              <div className="sibling">
                {/* <div className="image"> */}
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  width={300}
                  height={300}
                  className="recipe-image2"
                />
                {/* </div> */}
                <ul>
                  <div className="card-content2">
                    <p className="cook-time2">INGREDIENTS</p>
                    {recipe.ingredients.map((ingredient) => {
                      return (
                        <ul
                          className="cook-time2"
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
                <div className="instructions2">
                  <p className="cook-time2">
                    INSTRUCTIONS: {recipe.instructions}
                  </p>
                  <p className="cook-time2">PREP TIME: {recipe.prep_time}</p>
                  <p className="cook-time2">COOK TIME: {recipe.cook_time}</p>
                  <p className="cook-time2">
                    TOTAL TIME: {recipe.full_cook_time}
                  </p>
                  <p className="cook-time2">SERVINGS: {recipe.servings}</p>
                </div>
              </div>
            </div>
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
