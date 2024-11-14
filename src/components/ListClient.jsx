// import Image from "next/image";
import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import getCurrentSessionId from "@/utils/currentSession";
import Link from "next/link";
import Image from "next/image";

// import "./listclient.css";

export default async function List() {
  const { userId } = await auth();
  const session_id = await getCurrentSessionId();

  const recipes_results = await db.query(
    `SELECT recipes.* FROM weekly
JOIN recipes ON recipes.id = weekly.recipe_id
WHERE user_clerk_id = $1 AND  session_id = $2 ;`,
    [userId, session_id]
  );
  console.log(recipes_results);

  const recipes = recipes_results.rows;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        {recipes.length > 0 ? (
          <div className="content-container">
            {recipes.map((recipe) => (
              <div className="content" key={recipe.id}>
                {recipe.ingredients.map((ingredient) => (
                  <ul
                    className="list-text"
                    key={recipe.id + "-" + ingredient.name}
                  >
                    <li>
                      <input type="checkbox" className="checkbox" />
                      &nbsp;&nbsp;
                      {ingredient.amount} {ingredient.name} {ingredient.prep}
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="content-container ">
            <div className="card bg-base-100 shadow-lg rounded-lg w-96 overflow-hidden text-center p-5">
              <figure>
                <Image
                  src="/emptyPlate.jpg"
                  alt="Empty plate, no food here"
                  height={400}
                  width={640}
                  className="object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <h2 className="card-title text-2xl font-semibold mb-2">
                  Oops, no ingredients!
                </h2>
                <p className="mb-4">
                  Choose recipes for your weekly shop, to add ingredients to
                  your list.
                </p>
                <Link href={`/recipesPage`}>
                  <button className="btn btn-primary text-white w-full py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    Click Here
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex flex-col items-center">
          <div className="card bg-orange-800 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Ingredients List</h2>
              {recipes.map((recipe) => {
                return (
                  <div key={recipe.id}>
                    {recipe.ingredients.map((ingredient) => {
                      return (
                        <ul key={recipe.id + "-" + ingredient.name}>
                          <li>
                            <input type="checkbox" className="checkbox" />
                            &nbsp;&nbsp;
                            {ingredient.amount} {ingredient.name}{" "}
                            {ingredient.prep}
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
