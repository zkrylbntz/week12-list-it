// To set up your database you will need the following queries 

CREATE TABLE IF NOT EXISTS recipes ( 
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  ingredients JSONB,
  instructions TEXT,
  prep_time INT,
  cook_time INT,
  full_cook_time INT,
  servings INT,
  recipe_tags JSONB,
  image TEXT
);

INSERT INTO recipes (name, ingredients, instructions, prep_time, cook_time, full_cook_time, servings, image,recipe_tags ) VALUES 
(
  'Classic Margherita Pizza', 
  '[
        { "name": "Pizza dough", "prep": "", "type": "", "amount": "" },
        { "name": "Tomato sauce", "prep": "", "type": "", "amount": "" },
        { "name": "Mozzarella cheese", "prep": "fresh", "type": "", "amount": "" },
        { "name": "Basil", "prep": "fresh", "type": "", "amount": "" },
        { "name": "Olive oil", "prep": "", "type": "condiment", "amount": "" },
        { "name": "Salt", "prep": "to taste", "type": "condiment", "amount": "" },
        { "name": "Pepper", "prep": "to taste", "type": "condiment", "amount": "" }
   ]',
  'Preheat the oven to 475°F (245°C). Roll out the pizza dough and spread tomato sauce evenly. Top with slices of fresh mozzarella and fresh basil leaves. Drizzle with olive oil and season with salt and pepper. Bake in the preheated oven for 12-15 minutes or until the crust is golden brown. Slice and serve hot.',
  '20', '15', '35', '4', 'https://cdn.dummyjson.com/recipe-images/1.webp', 
  '[
        "Pizza",
        "Italian",
        "Easy",
        "Dinner",
        "Vegetarian",
        "None"
   ]'
),
(
  'Vegan Stir-Fry', 
  '[
        { "name": "Tofu", "prep": "cubed", "type": "", "amount": "225 g" },
        { "name": "Broccoli", "prep": "florets", "type": "", "amount": "200 g" },
        { "name": "Carrots", "prep": "sliced", "type": "", "amount": "150 g" },
        { "name": "Bell peppers", "prep": "sliced", "type": "", "amount": "1" },
        { "name": "Soy sauce", "prep": "", "type": "condiment", "amount": "50 ml" },
        { "name": "Ginger", "prep": "minced", "type": "", "amount": "1 tbsp" },
        { "name": "Garlic", "prep": "minced", "type": "", "amount": "1 clove" },
        { "name": "Sesame oil", "prep": "", "type": "condiment", "amount": "15 ml" },
        { "name": "Rice", "prep": "cooked", "type": "", "amount": "2 cups" }
   ]',
  'In a wok, heat sesame oil over medium-high heat. Add minced ginger and garlic, sauté until fragrant. Add cubed tofu and stir-fry until golden brown. Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp. Pour soy sauce over the stir-fry and toss to combine. Serve over cooked rice.',
  '15', '20', '35', '3', 'https://cdn.dummyjson.com/recipe-images/2.webp', 
  '[
        "Vegetarian",
        "Vegan",
        "Stir-fry",
        "Asian",
        "Lunch",
        "Lactose free",
        "Gluten free",
        "Medium",
        "None"
   ]'
),
(
  'Chocolate Chip Cookies', 
  ' [
        {
          "name": "All-purpose flour",
          "prep": "",
          "type": "",
          "amount": "250 g"
        },
        { "name": "Butter", "prep": "softened", "type": "", "amount": "200 g" },
        { "name": "Brown sugar", "prep": "", "type": "", "amount": "100 g" },
        { "name": "White sugar", "prep": "", "type": "", "amount": "100 g" },
        { "name": "Eggs", "prep": "", "type": "", "amount": "2 large" },
        {
          "name": "Vanilla extract",
          "prep": "",
          "type": "",
          "amount": "1 tsp"
        },
        { "name": "Baking soda", "prep": "", "type": "", "amount": "1 tsp" },
        { "name": "Salt", "prep": "", "type": "", "amount": "1 pinch" },
        { "name": "Chocolate chips", "prep": "", "type": "", "amount": "200 g" }
      ]'
,

   'Preheat the oven to 350°F (175°C). In a bowl, cream together softened butter, brown sugar, and white sugar. Beat in eggs one at a time, then stir in vanilla extract. Combine flour, baking soda, and salt. Gradually add to the wet ingredients. Fold in chocolate chips. Drop rounded tablespoons of dough onto ungreased baking sheets. Bake for 10-12 minutes or until edges are golden brown. Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack.',
   '15', '10', '25','24','https://cdn.dummyjson.com/recipe-images/3.webp', ' [
        "Cookies",
        "Dessert",
        "Baking",
        "Snack",
        "Vegetarian",
        "Easy",
        "None"
      ]
'
),
(
  'Chicken Alfredo Pasta', 
  '[
        { "name": "Fettuccine pasta", "prep": "", "type": "", "amount": "200 g" },
        { "name": "Chicken breast", "prep": "sliced", "type": "", "amount": "300 g" },
        { "name": "Heavy cream", "prep": "", "type": "", "amount": "150 ml" },
        { "name": "Parmesan cheese", "prep": "grated", "type": "", "amount": "50 g" },
        { "name": "Garlic", "prep": "minced", "type": "", "amount": "2 cloves" },
        { "name": "Butter", "prep": "", "type": "", "amount": "30 g" },
        { "name": "Salt and pepper", "prep": "to taste", "type": "seasoning", "amount": "1/2 tsp salt, 1/4 tsp pepper" },
        { "name": "Fresh parsley", "prep": "for garnish", "type": "", "amount": "1 tbsp" }
   ]',
  'Cook the fettuccine pasta according to package instructions. In a pan, melt butter over medium heat. Add minced garlic and sauté until fragrant. Add sliced chicken breast and cook until golden brown. Pour in heavy cream, add grated Parmesan, and stir until sauce thickens. Season with salt and pepper to taste. Toss the pasta in the sauce and garnish with fresh parsley. Serve hot.',
  '15', '20', '35', '4', 'https://cdn.dummyjson.com/recipe-images/4.webp', 
  '[
        "Pasta",
        "Italian",
        "Dinner",
        "Creamy",
        "Easy",
        "None"
   ]'
),
(
  'Mango Salsa Chicken',
  '[
    { "name": "Chicken thighs", "prep": "", "type": "", "amount": "4" },
    { "name": "Mango", "prep": "diced", "type": "", "amount": "1" },
    { "name": "Red onion", "prep": "finely chopped", "type": "", "amount": "1 small" },
    { "name": "Cilantro", "prep": "chopped", "type": "", "amount": "2 tbsp" },
    { "name": "Lime juice", "prep": "", "type": "", "amount": "2 tbsp" },
    { "name": "Jalapeño", "prep": "minced", "type": "", "amount": "1" },
    { "name": "Salt and pepper", "prep": "", "type": "seasoning", "amount": "1/4 tsp salt, 1/8 tsp pepper" },
    { "name": "Cooked rice", "prep": "for serving", "type": "", "amount": "2 cups" }
  ]',
  'Season chicken thighs with salt and pepper. Grill or bake chicken until fully cooked. In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice. Dice the cooked chicken and mix it with the mango salsa. Serve over cooked rice.',
  '15', '25', '40', '3', 'https://cdn.dummyjson.com/recipe-images/5.webp',
  '["Chicken", "Salsa", "Dinner", "Lactose free", "Gluten free", "None"]'
),
(
  'Quinoa Salad with Avocado',
  '[
    { "name": "Quinoa", "prep": "cooked", "type": "", "amount": "200 g" },
    { "name": "Avocado", "prep": "diced", "type": "", "amount": "1" },
    { "name": "Cherry tomatoes", "prep": "halved", "type": "", "amount": "200 g" },
    { "name": "Cucumber", "prep": "diced", "type": "", "amount": "100 g" },
    { "name": "Red bell pepper", "prep": "diced", "type": "", "amount": "1" },
    { "name": "Feta cheese", "prep": "crumbled", "type": "", "amount": "75 g" },
    { "name": "Lemon vinaigrette dressing", "prep": "", "type": "", "amount": "50 ml" },
    { "name": "Salt", "prep": "", "type": "seasoning", "amount": "1/2 tsp" },
    { "name": "Pepper", "prep": "", "type": "seasoning", "amount": "1/4 tsp" }
  ]',
  'In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese. Drizzle with lemon vinaigrette dressing and toss to combine. Season with salt and pepper to taste. Chill in the refrigerator before serving.',
  '20', '15', '35', '4', 'https://cdn.dummyjson.com/recipe-images/6.webp',
  '["Salad", "Quinoa", "Lunch", "Side Dish", "Vegetarian", "Gluten free", "None"]'
),
(
  'Tomato Basil Bruschetta',
  '[
    { "name": "Baguette", "prep": "sliced", "type": "", "amount": "1" },
    { "name": "Tomatoes", "prep": "diced", "type": "", "amount": "4" },
    { "name": "Fresh basil", "prep": "chopped", "type": "", "amount": "1 bunch" },
    { "name": "Garlic cloves", "prep": "minced", "type": "", "amount": "2" },
    { "name": "Balsamic glaze", "prep": "", "type": "", "amount": "50 ml" },
    { "name": "Olive oil", "prep": "", "type": "", "amount": "15 ml" },
    { "name": "Salt", "prep": "", "type": "seasoning", "amount": "1/4 tsp" },
    { "name": "Pepper", "prep": "", "type": "seasoning", "amount": "1/8 tsp" }
  ]',
  'Preheat the oven to 375°F (190°C). Place baguette slices on a baking sheet and toast in the oven until golden brown. In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil. Season with salt and pepper to taste. Top each toasted baguette slice with the tomato-basil mixture. Drizzle with balsamic glaze before serving.',
  '15', '10', '25', '6', 'https://cdn.dummyjson.com/recipe-images/7.webp',
  '["Bruschetta", "Italian", "Appetizer", "Lactose free", "None", "Vegan"]'
),
(
  'Beef and Broccoli Stir-Fry',
  '[
    { "name": "Beef sirloin", "prep": "thinly sliced", "type": "", "amount": "300 g" },
    { "name": "Broccoli", "prep": "florets", "type": "", "amount": "200 g" },
    { "name": "Soy sauce", "prep": "", "type": "sauce", "amount": "50 ml" },
    { "name": "Oyster sauce", "prep": "", "type": "sauce", "amount": "30 ml" },
    { "name": "Sesame oil", "prep": "", "type": "oil", "amount": "15 ml" },
    { "name": "Garlic cloves", "prep": "minced", "type": "seasoning", "amount": "2" },
    { "name": "Ginger", "prep": "minced", "type": "seasoning", "amount": "1 tbsp" },
    { "name": "Cornstarch", "prep": "", "type": "thickener", "amount": "1 tbsp" },
    { "name": "White rice", "prep": "cooked", "type": "", "amount": "430 g" }
  ]',
  'In a bowl, mix soy sauce, oyster sauce, sesame oil, and cornstarch to create the sauce. In a wok, stir-fry thinly sliced beef until browned. Remove from the wok. Stir-fry broccoli florets, minced garlic, and minced ginger in the same wok. Add the cooked beef back to the wok and pour the sauce over the mixture. Stir until everything is coated and heated through. Serve over cooked white rice.',
  '20', '15', '35', '4', 'https://cdn.dummyjson.com/recipe-images/8.webp',
  '["Beef", "Stir-fry", "Asian", "Dinner", "Lactose free", "Gluten free", "None"]'
),
(
  'Caprese Salad',
  '[
    { "name": "Tomatoes", "prep": "sliced", "type": "", "amount": "3" },
    { "name": "Mozzarella cheese", "prep": "fresh, sliced", "type": "", "amount": "200 g" },
    { "name": "Basil leaves", "prep": "fresh", "type": "", "amount": "10" },
    { "name": "Balsamic glaze", "prep": "", "type": "", "amount": "50 ml" },
    { "name": "Extra virgin olive oil", "prep": "", "type": "oil", "amount": "30 ml" },
    { "name": "Salt", "prep": "", "type": "seasoning", "amount": "1/4 tsp" },
    { "name": "Pepper", "prep": "", "type": "seasoning", "amount": "1/8 tsp" }
  ]',
  'Arrange alternating slices of tomatoes and fresh mozzarella on a serving platter. Tuck fresh basil leaves between the slices. Drizzle with balsamic glaze and extra virgin olive oil. Season with salt and pepper to taste. Serve immediately as a refreshing salad.',
  '10', '0', '10', '2', 'https://cdn.dummyjson.com/recipe-images/9.webp',
  '["Salad", "Caprese", "Lunch", "Vegetarian", "Easy", "None", "Gluten free"]'
),
(
  'Shrimp Scampi Pasta',
  '[
    { "name": "Linguine pasta", "prep": "", "type": "pasta", "amount": "200 g" },
    { "name": "Shrimp", "prep": "peeled and deveined", "type": "seafood", "amount": "300 g" },
    { "name": "Garlic cloves", "prep": "minced", "type": "seasoning", "amount": "2" },
    { "name": "Olive oil", "prep": "", "type": "oil", "amount": "15 ml" },
    { "name": "White wine", "prep": "", "type": "liquid", "amount": "50 ml" },
    { "name": "Lemon juice", "prep": "", "type": "liquid", "amount": "15 ml" },
    { "name": "Parmesan cheese", "prep": "grated", "type": "cheese", "amount": "30 g" },
    { "name": "Salt", "prep": "", "type": "seasoning", "amount": "1/4 tsp" },
    { "name": "Pepper", "prep": "", "type": "seasoning", "amount": "1/8 tsp" }
  ]',
  'Cook linguine pasta according to package instructions. In a skillet, sauté minced garlic in olive oil until fragrant. Add shrimp and cook until pink and opaque. Pour in white wine and lemon juice. Simmer until the sauce slightly thickens and coat the pasta. Serve hot with grated parmesan cheese.',
  '10', '15', '25', '2', 'https://cdn.dummyjson.com/recipe-images/10.webp',
  '["Seafood", "Pasta", "Dinner", "Medium", "None", "Pescatarian"]'
),
(
  'Chicken Biryani',
  '[
    { "name": "Basmati rice", "prep": "", "type": "grain", "amount": "300 g" },
    { "name": "Chicken", "prep": "cut into pieces", "type": "meat", "amount": "500 g" },
    { "name": "Onions", "prep": "thinly sliced", "type": "vegetable", "amount": "2 large" },
    { "name": "Tomatoes", "prep": "chopped", "type": "vegetable", "amount": "2 medium" },
    { "name": "Yogurt", "prep": "", "type": "dairy", "amount": "150 g" },
    { "name": "Ginger-garlic paste", "prep": "", "type": "seasoning", "amount": "2 tbsp" },
    { "name": "Biryani masala", "prep": "", "type": "spice blend", "amount": "1 tbsp" },
    { "name": "Green chilies", "prep": "sliced", "type": "vegetable", "amount": "2" },
    { "name": "Coriander leaves", "prep": "fresh", "type": "herb", "amount": "1/4 cup" },
    { "name": "Mint leaves", "prep": "", "type": "herb", "amount": "1/4 cup" },
    { "name": "Ghee", "prep": "", "type": "fat", "amount": "2 tbsp" },
    { "name": "Salt", "prep": "to taste", "type": "seasoning", "amount": "1 tsp" }
  ]',
  'Marinate chicken with yogurt, ginger-garlic paste, biryani masala, and salt. In a pot, sauté sliced onions until golden brown. Remove half for later use. Layer marinated chicken, chopped tomatoes, half of the fried onions, and rice in the pot. Top with ghee, green chilies, fresh coriander leaves, mint leaves, and the remaining fried onions. Cover and cook on low heat until the rice is fully cooked and aromatic. Serve hot, garnished with additional coriander and mint leaves.',
  '30', '45', '75', '6', 'https://cdn.dummyjson.com/recipe-images/11.webp',
  '["Biryani", "Chicken", "Main course", "Indian", "Pakistani", "Asian", "Lunch", "Dinner", "None", "Gluten free"]'
),
(
  'Chicken Karahi',
  '[
    { "name": "Chicken", "prep": "cut into pieces", "type": "meat", "amount": "500 g" },
    { "name": "Tomatoes", "prep": "chopped", "type": "vegetable", "amount": "3 large" },
    { "name": "Green chilies", "prep": "sliced", "type": "vegetable", "amount": "3" },
    { "name": "Ginger", "prep": "julienned", "type": "seasoning", "amount": "1 tbsp" },
    { "name": "Garlic", "prep": "minced", "type": "seasoning", "amount": "1 tbsp" },
    { "name": "Coriander powder", "prep": "", "type": "spice", "amount": "1 tsp" },
    { "name": "Cumin powder", "prep": "", "type": "spice", "amount": "1 tsp" },
    { "name": "Red chili powder", "prep": "", "type": "spice", "amount": "1/2 tsp" },
    { "name": "Garam masala", "prep": "", "type": "spice blend", "amount": "1/2 tsp" },
    { "name": "Cooking oil", "prep": "", "type": "fat", "amount": "3 tbsp" },
    { "name": "Coriander leaves", "prep": "fresh", "type": "herb", "amount": "1/4 cup" },
    { "name": "Salt", "prep": "to taste", "type": "seasoning", "amount": "1 tsp" }
  ]',
  'In a wok (karahi), heat cooking oil and sauté minced garlic until golden brown. Add chicken pieces and cook until browned on all sides. Add chopped tomatoes, green chilies, ginger, and spices. Cook until tomatoes are soft. Cover and simmer until the chicken is tender and the oil separates from the masala. Garnish with fresh coriander leaves and serve hot with naan or rice.',
  '20', '30', '50', '4', 'https://cdn.dummyjson.com/recipe-images/12.webp',
  '["Chicken", "Karahi", "Main course", "Indian", "Pakistani", "Asian", "Lunch", "Dinner", "None", "Gluten free", "Lactose free"]'
),
(
  'Aloo Keema',
  '[
    { "name": "Ground beef", "prep": "", "type": "meat", "amount": "500 g" },
    { "name": "Potatoes", "prep": "peeled and diced", "type": "vegetable", "amount": "2 medium" },
    { "name": "Onions", "prep": "finely chopped", "type": "vegetable", "amount": "1 large" },
    { "name": "Tomatoes", "prep": "chopped", "type": "vegetable", "amount": "2 medium" },
    { "name": "Ginger-garlic paste", "prep": "", "type": "seasoning", "amount": "1 tbsp" },
    { "name": "Cumin powder", "prep": "", "type": "spice", "amount": "1 tsp" },
    { "name": "Coriander powder", "prep": "", "type": "spice", "amount": "1 tsp" },
    { "name": "Turmeric powder", "prep": "", "type": "spice", "amount": "1/2 tsp" },
    { "name": "Red chili powder", "prep": "", "type": "spice", "amount": "1/2 tsp" },
    { "name": "Cooking oil", "prep": "", "type": "fat", "amount": "3 tbsp" },
    { "name": "Fresh coriander leaves", "prep": "", "type": "herb", "amount": "1/4 cup" },
    { "name": "Salt", "prep": "to taste", "type": "seasoning", "amount": "1 tsp" }
  ]',
  'In a pan, heat cooking oil and sauté chopped onions until golden brown. Add ginger-garlic paste and sauté until fragrant. Add ground beef and cook until browned. Drain excess oil if needed. Add diced potatoes, chopped tomatoes, and spices. Mix well. Cover and simmer until the potatoes are tender and the masala is well-cooked. Garnish with fresh coriander leaves and serve hot with naan or rice.',
  '25', '35', '60', '5', 'https://cdn.dummyjson.com/recipe-images/13.webp',
  '["Keema", "Potatoes", "Main course", "Pakistani", "Asian", "Lunch", "Dinner", "None", "Gluten free", "Lactose free"]'
),
(
  'Chapli Kebabs',
  '[
    { "name": "Ground beef", "prep": "", "type": "meat", "amount": "500 g" },
    { "name": "Onions", "prep": "finely chopped", "type": "vegetable", "amount": "1 medium" },
    { "name": "Tomatoes", "prep": "finely chopped", "type": "vegetable", "amount": "1 large" },
    { "name": "Green chilies", "prep": "chopped", "type": "vegetable", "amount": "2" },
    { "name": "Coriander leaves", "prep": "chopped", "type": "herb", "amount": "1/4 cup" },
    { "name": "Pomegranate seeds", "prep": "", "type": "fruit", "amount": "1 tbsp" },
    { "name": "Ginger-garlic paste", "prep": "", "type": "seasoning", "amount": "1 tbsp" },
    { "name": "Cumin powder", "prep": "", "type": "spice", "amount": "1 tsp" },
    { "name": "Coriander powder", "prep": "", "type": "spice", "amount": "1 tsp" },
    { "name": "Red chili powder", "prep": "", "type": "spice", "amount": "1/2 tsp" },
    { "name": "Egg", "prep": "", "type": "protein", "amount": "1" },
    { "name": "Cooking oil", "prep": "", "type": "fat", "amount": "as needed for frying" },
    { "name": "Salt", "prep": "to taste", "type": "seasoning", "amount": "1 tsp" }
  ]',
  'In a large bowl, mix ground beef, chopped onions, tomatoes, green chilies, coriander leaves, and pomegranate seeds. Add ginger-garlic paste, cumin powder, coriander powder, red chili powder, and salt. Mix well. Add an egg to bind the mixture and form into round flat kebabs. Heat cooking oil in a pan and shallow fry the kebabs until browned on both sides. Serve hot with naan or mint chutney.',
  '30', '20', '50', '4', 'https://cdn.dummyjson.com/recipe-images/14.webp',
  '["Kebabs", "Beef", "Indian", "Pakistani", "Asian", "Lunch", "Dinner", "Snacks", "None", "Gluten free", "Lactose free"]'
),
(
  'Saag (Spinach) with Makki di Roti',
  '[
    { "name": "Mustard greens", "prep": "washed and chopped", "type": "vegetable", "amount": "500 g" },
    { "name": "Spinach", "prep": "washed and chopped", "type": "vegetable", "amount": "250 g" },
    { "name": "Cornmeal (makki ka atta)", "prep": "", "type": "grain", "amount": "200 g" },
    { "name": "Onions", "prep": "finely chopped", "type": "vegetable", "amount": "1 medium" },
    { "name": "Green chilies", "prep": "chopped", "type": "vegetable", "amount": "2" },
    { "name": "Ginger", "prep": "grated", "type": "spice", "amount": "1 tbsp" },
    { "name": "Ghee", "prep": "", "type": "fat", "amount": "2 tbsp" },
    { "name": "Salt", "prep": "to taste", "type": "seasoning", "amount": "1 tsp" }
  ]',
  'Boil mustard greens and spinach until tender. Drain and blend into a coarse paste. In a pan, sauté chopped onions, green chilies, and grated ginger in ghee until golden brown. Add the greens paste and cook until it thickens. Meanwhile, knead cornmeal with water to make a dough. Roll into rotis (flatbreads). Cook the rotis on a griddle until golden brown. Serve hot saag with makki di roti and a dollop of ghee.',
  '40', '30', '70', '3', 'https://cdn.dummyjson.com/recipe-images/15.webp',
  '["Saag", "Roti", "Main course", "Indian", "Pakistani", "Asian", "Breakfast", "Lunch", "Dinner", "Vegan", "None", "Gluten free", "Lactose free"]'
),
(
  'Japanese Ramen Soup',
  '[
    { "name": "Ramen noodles", "prep": "", "type": "grain", "amount": "200 g" },
    { "name": "Chicken broth", "prep": "", "type": "broth", "amount": "500 ml" },
    { "name": "Soy sauce", "prep": "", "type": "sauce", "amount": "2 tbsp" },
    { "name": "Mirin", "prep": "", "type": "seasoning", "amount": "1 tbsp" },
    { "name": "Sesame oil", "prep": "", "type": "fat", "amount": "1 tsp" },
    { "name": "Shiitake mushrooms", "prep": "sliced", "type": "vegetable", "amount": "50 g" },
    { "name": "Bok choy", "prep": "chopped", "type": "vegetable", "amount": "1 cup" },
    { "name": "Green onions", "prep": "sliced", "type": "vegetable", "amount": "2" },
    { "name": "Soft-boiled eggs", "prep": "", "type": "protein", "amount": "2" },
    { "name": "Grilled chicken slices", "prep": "", "type": "meat", "amount": "100 g" },
    { "name": "Norwegian seaweed (nori)", "prep": "", "type": "seafood", "amount": "1 sheet" }
  ]',
  'Cook ramen noodles according to package instructions and set aside. In a pot, combine chicken broth, soy sauce, mirin, and sesame oil. Bring to a simmer. Add sliced shiitake mushrooms and chopped bok choy. Cook until vegetables are tender. Divide the cooked noodles into serving bowls and ladle the hot broth over them. Top with green onions, soft-boiled eggs, grilled chicken slices, and nori. Serve hot and enjoy the authentic Japanese ramen!',
  '20', '25', '45', '2', 'https://cdn.dummyjson.com/recipe-images/16.webp',
  '["Ramen", "Japanese", "Soup", "Asian", "Dinner", "Lactose free"]'
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY, 
  clerk_id TEXT unique,
  user_name TEXT,
  tags JSONB 
);

CREATE TABLE IF NOT EXISTS favourites (
  recipe_id INT REFERENCES recipes(id),
  user_clerk_id TEXT REFERENCES users(clerk_id),
  PRIMARY KEY (recipe_id, user_clerk_id)
);

CREATE TABLE IF NOT EXISTS sessions (
  id SERIAL PRIMARY KEY,
  user_clerk_id TEXT REFERENCES users(clerk_id)
);

CREATE TABLE IF NOT EXISTS weekly (
   recipe_id INT REFERENCES recipes(id),
    user_clerk_id TEXT REFERENCES users(clerk_id),
    session_id INT REFERENCES sessions(id),
    PRIMARY KEY (recipe_id, user_clerk_id, session_id)
);



