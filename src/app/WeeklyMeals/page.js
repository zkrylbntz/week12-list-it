import WeeklyRecipes from "@/components/WeeklyRecipes";

export default function WeeklyMeals() {
  return (
    <>
      <br />
      <br />
      <br />

      <h1 className="text-2xl text-center pt-5 mt-5 text-white">
        These are your weekly recipes{" "}
      </h1>
      <WeeklyRecipes />
    </>
  );
}
