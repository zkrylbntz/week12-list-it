import { auth } from "@clerk/nextjs/server";

import pg from "pg";

export default async function CreateProfilePage({ params }) {
  const db = new pg.Pool({
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  });

  const { userId } = await auth();

  async function handleSubmit(formValues) {
    "use server";
    formValues = {
      username: formValues.get("user_name"),
      tags: formValues.get("tags"),
    };
    console.log(formValues);

    await db.query(
      `INSERT INTO users (clerk_id, user_name, tags) VALUES ($1, $2, $3)`,
      [userId, formValues.username, formValues.tags]
    );

    revalidatePath(`/createProfile`);
    redirect(`/user/${userId}`);
  }
  return (
    <>
      <h1>create profile</h1>

      <form action={handleSubmit} className="flex flex-col items-center p-10">
        <label htmlFor="Username">My username:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="tags">drop down for the tags?</label>
        <input type="text" id="tags" name="tags" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
