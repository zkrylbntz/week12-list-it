// // This page is for rendering the entire recipe it selects all columns from our recipes table
// // for the image the next.config.mjs has been modified to allow all url in src

// import { db } from "@/utils/dbConnection";
// import { auth } from "@clerk/nextjs/server";
// import Image from "next/image";

// export default async function RecipesPage() {
//   const { userId } = await auth();
//   console.log(userId, "THIS IS THE USERID ON THE RECIPESPAGE");

//   //  Select the tags of the user that is currently logged in
//   const userTags = await db.query(
//     `SELECT tags FROM users WHERE clerk_id = $1`,
//     [userId]
//   );
//   // the userTags.rows[0] selects only the user logged in
//   const wrangledUserTags = userTags.rows[0];
//   console.log(wrangledUserTags, "THESE ARE THE WRANGLED");

//   const recipes_results = await db.query(
//     `SELECT *
// FROM recipes
// WHERE EXISTS (
//   SELECT 1
//   FROM jsonb_array_elements_text(recipe_tags) AS tag
//   WHERE tag ILIKE ANY($1::text[])
// )`,
//     // LIKE is used to compare two strings the ILIKE means it ignores case ( our tags are in uppercase in the database but stored inputed in lowercase from the form )
//     [wrangledUserTags.tags]
//   );
//   const recipes = recipes_results.rows;

//   return (
//     <>
//       <h1>HI</h1>
//       {recipes.map((recipe) => {
//         return (
//           <div key={recipe.id}>
//             <Image
//               src={recipe.image}
//               alt={recipe.name}
//               width={200}
//               height={200}
//             />
//             <h2>{recipe.name}</h2>
//             <ul>
//               <h2>INGREDIENTS</h2>
//               {recipe.ingredients.map((ingredient) => {
//                 return (
//                   <ul key={recipe.id + "-" + ingredient.name}>
//                     <li>
//                       {ingredient.name} {ingredient.prep}
//                     </li>
//                   </ul>
//                 );
//               })}
//             </ul>
//             <p>Instructions:{recipe.instructions}</p>
//             <p>Prep Time:{recipe.prep_time}</p>
//             <p>Cook Time:{recipe.cook_time}</p>
//             <p>Full Cook Time:{recipe.full_cook_time}</p>
//             <p>Servings:{recipe.servings}</p>
//             {/* we may not want to render the tags for each individual recipe, this is just for testing */}
//             <ul>
//               Recipe Tags:
//               {recipe.recipe_tags.map((recipe_tag) => {
//                 return <li key={recipe.id + "-" + recipe_tag}>{recipe_tag}</li>;
//               })}
//             </ul>
//           </div>
//         );
//       })}
//     </>
//   );
// }

import RecipesServer from "@/components/RecipesServer";

export default function RecipesPage() {
  return (
    <>
      <div className="mt-16">
        <RecipesServer />
      </div>{" "}
    </>
  );
}
