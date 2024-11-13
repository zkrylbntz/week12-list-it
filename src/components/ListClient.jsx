// import Image from "next/image";
import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";
import getCurrentSessionId from "@/utils/currentSession";

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
    // <div className="content-container">
    // {recipes.map((recipe) => {
    //   return (
    //     <div className="content" key={recipe.id}>
    //       {recipe.ingredients.map((ingredient) => {
    //         return (
    //           <ul
    //             className="list-text"
    //             key={recipe.id + "-" + ingredient.name}
    //           >
    //             <li>
    //               <input type="checkbox" className="checkbox" />
    //               &nbsp;&nbsp;
    //               {ingredient.amount} {ingredient.name} {ingredient.prep}
    //             </li>
    //           </ul>
    //         );
    //       })}
    //     </div>
    //   );
    // })}
    // </div>
    <>
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
    </>
  );
}
