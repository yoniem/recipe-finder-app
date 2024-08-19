import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import axios from 'axios';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const fetchRecipes = async (ingredient) => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    try {
      const response = await axios.get(url);
      setRecipes(response.data.meals);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSearch = () => {
    fetchRecipes(search);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
