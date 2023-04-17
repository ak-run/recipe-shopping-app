import React from "react";
import "./App";
import "./App.css";
const RecipeCard = ({ recipes }) => {
  return (
    <div>
      {recipes.length > 0 ? (
        <ul className="list-group">
          {recipes.map((recipe, index) => (
            <li key={index} className="list-group-item">
              <h4>{recipe.recipe.label}</h4>
              <img
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                className="img-fluid"
              />
              <p>
                <strong>Source: </strong>
                {recipe.recipe.source}
              </p>
              <p>
                <a href={recipe.recipe.url} target="_blank" rel="noreferrer">
                  <button className="recipe-url">Go to the recipe</button>
                </a>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found. Please search for recipes above.</p>
      )}
    </div>
  );
};
export default RecipeCard;
