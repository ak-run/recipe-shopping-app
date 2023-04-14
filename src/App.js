//to link the pages, importing from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState, Fragment } from 'react';
import './App.css';
import ShoppingList from './ShoppingList';
import Axios from "axios";
import RecipeCard from './RecipeCard';
function App() {
  const APP_ID = "fa099eb5";
  const APP_KEY = "2f165b5ae763968bfd4088e30dcdcff5";
  const url = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result);
  };
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const searchRecipes = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=fa099eb5&app_key=2f165b5ae763968bfd4088e30dcdcff5`
      );
      const data = response.data;
      setRecipes(data.hits);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="App">
      <Router>
        <header className="App-header">
            <div>
              <nav>
                <h1 onClick={getData}></h1>
                <h3>
                  <Link to="/ShoppingList">Make a Shopping List</Link>
                </h3>
                <h3>
                  <Link to="/App">Back to Homepage</Link>
                </h3>
              </nav>
              <Routes>
                <Route path="/" exact component={RecipeCard} />
                <Route path="/ShoppingList" exact element={<ShoppingList />} />
              </Routes>
            </div>
        </header>
        <div className="container mt-4">
      <h1>Recipe Finder</h1>
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
    </Router>
      </div>
    </>
  );
}
export default App;