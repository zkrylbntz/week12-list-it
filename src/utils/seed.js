// this is a developer file to seed the database with our data from recipeData.json
// we need to import the data into this file from recipeData.jsonrecipeData3.json
// we need to import our db connection
//  we will only seed the database once with a script using for each as our data is in an array, so something like for each item in the array insert into recipes data from recipeData into the values of the database
//  we could look at adding a seperate developer file with a form connected to our database if we manually wanted to add recipes to our database after we have seeded the database with all our recipes using the script outlined above - would need to wrangle some of the data before inserting it especially the jsonb

//  we could also use this file to save all the queries from our supbase sql queries for reference

import { db } from "./dbConnection.js";
import recipeData3 from "@/lib";

db.query(
  `INSERT INTO recipes(name, ingredients, instructions, prep_time, cook_time, full_cook_time, servings, image, recipe_tags) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`[
    (recipes.name,
    recipes.ingredients,
    recipes.instructions,
    recipes.prep_time,
    recipes.cook_time,
    recipes.full_cook_time,
    recipes.servings,
    recipes.image,
    recipes.recipe_tags)
  ]
);

console.log("These are recipe names", recipeData3.name);
