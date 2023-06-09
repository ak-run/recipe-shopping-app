import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import RecipeCard from "./RecipeCard";
import Footer from "./components/footer";

function RecipeFinder() {
  const APP_ID = "fa099eb5";
  const APP_KEY = "2f165b5ae763968bfd4088e30dcdcff5";

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const searchRecipes = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = response.data;
      setRecipes(data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h1 class="my-shopping-list">Recipe Finder</h1>
        <p>
          Enter an ingredient or recipe in the box below and hit enter to search
          for a recipe.
        </p>
        <form onSubmit={searchRecipes}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for recipes..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
        <RecipeCard recipes={recipes} />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default RecipeFinder;
