import RecipesClient from "./RecipesClient";

export default async function Weekly() {
  const { userId } = await auth();
  console.log(userId);

  const handleWeeklyShop = await db.query(
    `INSERT INTO weekly ( recipe_id, user_clerk_id, session_id) VALUES ($1, $2, $3 )`,
    [recipe.id, userId, session.id]
  );

  console.log(recipe.id, session.id);

  return (
    <div>
      <RecipesClient />
    </div>
  );
}
