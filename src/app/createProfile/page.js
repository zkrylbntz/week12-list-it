import { auth } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// imported db instead of pg so we don't need to write out the pool in the function

export default async function CreateProfilePage({ params }) {
  const { userId } = await auth();
  console.log(userId);

  async function handleSubmit(formValues) {
    "use server";
    const username = formValues.get("user_name");
    // formValues.getAll selects all the values with the name: allergy or dietary_requirements and returns them as an array
    const dietaryRequirements = formValues.getAll("dietary_requirement");
    const allergies = formValues.getAll("allergy");

    // the following combines all the selected tags into a single array - which is the first step to get it ready for the database
    // by using a spread operator we can take all the elements from array 1 - dietaryRequirement and array 2 - allergies and combine them into one array
    const tags = [...dietaryRequirements, ...allergies];
    console.log(tags);

    await db.query(
      `INSERT INTO users (clerk_id, user_name, tags) VALUES ($1, $2, $3)`,
      // the tags must be inserted into the database in json as that is the value it expects (JSONB)
      [userId, username, JSON.stringify(tags)]
    );

    revalidatePath(`/recipesPage`);
    redirect(`/recipesPage`);
  }
  return (
    <>
      <h1>create profile</h1>

      <form action={handleSubmit} className="flex flex-col items-center p-10">
        <label htmlFor="user_name">My username:</label>
        <input type="text" id="user_name" name="user_name" required />
        {/* changed input method to checkboxes to allow the user to select multiple options, the values are dietary_requirements and allergies - these will need to combined and then converted into json to allow us to send it to the database which wants the input as jsonb  */}
        <fieldset>
          <legend>Dietary Requirements</legend>
          <label>
            <input
              type="checkbox"
              name="dietary_requirement"
              value="vegetarian"
            />
            Vegetarian
          </label>
          <label>
            <input type="checkbox" name="dietary_requirement" value="vegan" />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietary_requirement"
              value="pescatarian"
            />
            Pescatarian
          </label>
          <label>
            <input type="checkbox" name="dietary_requirement" value="none" />
            None
          </label>
        </fieldset>

        <fieldset>
          <legend>Intolerances/Allergies</legend>
          <label>
            <input type="checkbox" name="allergy" value="gluten" />
            Gluten
          </label>
          <label>
            <input type="checkbox" name="allergy" value="lactose" />
            Lactose
          </label>
          <label>
            <input type="checkbox" name="allergy" value="nuts" />
            Nuts
          </label>
          <label>
            <input type="checkbox" name="allergy" value="shellfish" />
            Shellfish
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
