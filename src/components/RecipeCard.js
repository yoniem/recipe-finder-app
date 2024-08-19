import React from 'react';
import { Card } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => (
  <Card>
    <Card.Img variant="top" src={recipe.strMealThumb} alt={recipe.strMeal} />
    <Card.Body>
      <Card.Title>{recipe.strMeal}</Card.Title>
      <Card.Text>
        <a href={`https://www.themealdb.com/meal/${recipe.idMeal}`} target="_blank" rel="noopener noreferrer">
          View Recipe
        </a>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default RecipeCard;
