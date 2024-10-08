import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import RecipeCard from './RecipeCard';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route path="/recipes" element={<RecipeCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
