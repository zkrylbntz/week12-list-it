# Project name: List It

## Vercel link: https://week12-list-it.vercel.app/

## Repo link: https://github.com/zkrylbntz/week12-list-it

## Team members:

- Anu, https://github.com/anuseed
- Joe, https://github.com/joegalvinn
- Kat, https://github.com/kmday404
- Zak, https://github.com/zkrylbntz

## Project description:

A site which both allows you to plan your weekly meals and generates a shopping list based on the recipes you have selected.

### Problem domain:

People don't always know what ingredients are needed to create a meal they would like to make, and coming up with recipe ideas isn't always easy.

### User stories:

[x] As a user, I would like to log in to the site and set my food preferences/intolerances

[x] As a user, I would like to see recipes based on my preferences/intolerances

[x] As a user, I would like to add recipes I like to my weekly meal plan

[x] As a user, I would like to add all items from my recipes to my shopping list

[x] As a user, I would like to see all my items displayed in my shopping list

[x] As a user, I would like to check off the list the items I already have or whilst I am purchasing them

Wireframe: ![wireframe](./public/wireframe.png)

### Libraries, frameworks and packages the application requires in order to properly function:

pg, Daisy UI, tailwindcss, clerk

### Instructions on how to run your app:

1. Sign up from the home page using your email address or github
2. Set your user details (username and dietary requirements)
3. Browse the recipes, using the search and filter features if desired
4. Click "Start Weekly Shop" to enable the feature which allows you to add recipes to your plan
5. The heart button will add the recipe to your favourites, the basket button will add the recipe to your weekly plan
6. You can access your favourites, weekly plan and settings to change your user details from the 'User' drop down in the header
7. To view the full details of any individual recipe (including instructions, ingredients, servings etc) you can click on the image of the recipe (this works from both the recipe page and weekly meal page)
8. Access your shopping list from the 'List' header link or use the "view shoppinng list" button in the weekly meal page
9. If you remove individual recipes from your weekly meals, this will remove the ingredients from your list
10. To clear your weekly plan and list, you need only start a new weekly shop using the "Start Weekly Shop" button

### Lighthouse report:

Wireframe: ![screenshot of lighthouse report for recipe page](./public/recipesPage.png)

### Reflections:

**Additional features:**

[x] As a user, I would like to filter the recipes based on difficulty, food intolerances and meal type

[x] As a user, I would like to search for recipes

[ ] As a user, I would like to add or remove individual ingredients from my shopping list

[ ] As a user, I would like the ingredients on my list to consolidate and duplicates (updated the amounts needed)

[ ] As a user, I would like to be able to switch between light and dark themes

[ ] As a user, I would like to change the servings and this adjust the ingredient amounts needed

[ ] As a user, I would like to be able to view previous weekly shops

### References and resources used:

Data originated from https://dummyjson.com/recipes we used https://chatgpt.com/ to help rework the data adding and removing items to fit our app

Images from https://unsplash.com/ and https://pixabay.com/

Tech Educators https://techeducators.co.uk/

https://daisyui.com/

https://drawsql.app/

https://okso.app/

https://excalidraw.com/

https://cssgrid-generator.netlify.app/

https://blog.hubspot.com/

https://www.markdownguide.org/cheat-sheet/

### Errors and bugs we encountered while creating our app:

- key prop identifiers when adding data to the database
- inherited CSS properties being carried over
- incorrect recipe tags
- errors related to database data types like jsonb
- path names in our seed folders

Known bugs:

- Favourite and Basket buttons do not stay clicked in when user refreshes page  
  _(should be able to be fixed by using local storage)_
- When you go to the list page without having started a session you will get an error  
  _(should be able to be fixed by rewriting some of the sql queries in our code)_

### How to run this app yourself:

- clone this repo (this is a nextJS application)
- npm install (to install the packages mentioned above)
- set up your database (supabase) and add **your** environment variables to a .env.local file
- use our seed.sql to set up your tables and seed your database
- npm run dev
- Enjoy!
