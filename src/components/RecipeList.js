// src/components/RecipeList.js

import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div className="container mt-4">
      <h2>Recipe List</h2>
      <div className="row">
        {recipes.map((recipe, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img src={recipe.image} className="card-img-top" alt={recipe.name} />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">{recipe.description}</p>
                <a href={recipe.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
