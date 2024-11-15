// CreateProfilePage.js
import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import CheckChecked from "@/components/CheckChecked"; // Import CheckChecked

export default async function CreateProfilePage() {
  const { userId } = await auth();

  //function to get user submitted data
  async function handleSubmit(formValues) {
    "use server";
    const username = formValues.get("user_name");
    const dietaryRequirements = formValues.getAll("dietary_requirement");

    const tags = [...dietaryRequirements];

    // Insert the user into the database
    await db.query(
      `INSERT INTO users (clerk_id, user_name, tags) VALUES ($1, $2, $3)`,
      [userId, username, JSON.stringify(tags)]
    );

    revalidatePath(`/recipesPage`);
    redirect(`/recipesPage`);
  }

  return (
    <>
      <h1>Create Profile</h1>
      <CheckChecked handleSubmit={handleSubmit} />
    </>
  );
}
