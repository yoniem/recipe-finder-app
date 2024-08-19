import React from 'react';
import RecipeCard from './RecipeCard';
import { Row, Col } from 'react-bootstrap';

const RecipeList = ({ recipes }) => (
  <Row>
    {recipes && recipes.length > 0 ? (
      recipes.map((recipe) => (
        <Col key={recipe.idMeal} md={4} className="mb-4">
          <RecipeCard recipe={recipe} />
        </Col>
      ))
    ) : (
      <Col>No recipes found</Col>
    )}
  </Row>
);

export default RecipeList;
