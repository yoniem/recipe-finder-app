import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <img className="card-img-top" src={recipe.image} alt={recipe.title} />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text">{recipe.description}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
