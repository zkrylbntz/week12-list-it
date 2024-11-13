// UpdateProfilePage.js
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import CheckChecked from "@/components/CheckChecked"; // Reuse CheckChecked for editing

export default async function UpdateProfilePage() {
  const { userId } = await auth();

  // Fetch the user's existing dietary requirements from the database
  const user = await db.query(
    `SELECT user_name, tags FROM users WHERE clerk_id = $1`,
    [userId]
  );

  if (!user.rows.length) {
    redirect("/createProfilePage"); // Redirect if user data does not exist
    return;
  }

  const { user_name: username, tags: currentDietaryRequirements } =
    user.rows[0];

  async function handleUpdate(formValues) {
    "use server";
    const username = formValues.get("user_name");
    const dietaryRequirements = formValues.getAll("dietary_requirement");
    const tags = [...dietaryRequirements];

    // Update the user's dietary requirements in the database
    await db.query(
      `UPDATE users SET user_name = $1, tags = $2 WHERE clerk_id = $3`,
      [username, JSON.stringify(tags), userId]
    );

    revalidatePath(`/recipesPage`);
    redirect(`/recipesPage`);
  }

  return (
    <>
      <h1>Update Profile</h1>
      <CheckChecked
        handleSubmit={handleUpdate}
        initialUsername={username}
        initialDietaryRequirements={currentDietaryRequirements}
      />
    </>
  );
}
