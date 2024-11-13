import WeeklyRecipes from "@/components/WeeklyRecipes";

export default function WeeklyMeals() {
  return (
    <>
      <br />
      <br />
      <br />

      <h1 className="text-2xl text-center p-5 m-5 ">
        These are your weekly recipes{" "}
      </h1>
      <WeeklyRecipes />
    </>
  );
}
