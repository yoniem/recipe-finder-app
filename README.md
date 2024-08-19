Recipe Finder App

Overview
The Recipe Finder App allows users to search for recipes based on ingredients, cuisines, and meal types. Users can view detailed recipes, including ingredients, instructions, and nutritional information.

Table of Contents
Demo
Features
Technologies Used
Setup
Usage
Project Structure
Contributing
License
Demo
Check out the live demo of the project here.

Features
Search for recipes by ingredient, cuisine, or meal type.
View detailed recipe information, including ingredients, instructions, and nutritional facts.
Save favorite recipes for easy access later.
Responsive design, optimized for both desktop and mobile devices.
Technologies Used
Frontend: React, Bootstrap
Backend: Node.js, Express
API: Edamam Recipe Search API
Styling: CSS, Bootstrap
Setup
To set up the project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yoniem/recipe-finder-app.git
cd recipe-finder-app
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add your API key:

env
Copy code
REACT_APP_API_KEY=your_edamam_api_key
REACT_APP_API_ID=your_edamam_api_id
Start the development server:

bash
Copy code
npm start
Visit the app in your browser:

Open http://localhost:3000 in your browser.
Usage
Search Recipes:

Enter ingredients, cuisines, or meal types in the search bar to find matching recipes.
View Recipe Details:

Click on a recipe to view detailed information.
Save Recipes:

Click the save button to add recipes to your favorites.
Project Structure
css
Copy code
recipe-finder-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.js
│   │   ├── RecipeList.js
│   │   ├── RecipeDetail.js
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── .gitignore
├── README.md
└── package.json
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more information.
