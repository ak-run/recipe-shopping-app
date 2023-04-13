//to link the pages, importing from react-router-dom
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import ShoppingList from './ShoppingList';
import Axios from "axios";


function App() {
  const APP_ID = "fa099eb5";
  const APP_KEY = "2f165b5ae763968bfd4088e30dcdcff5";
  const url = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result);
  };

  // const [recipes, setRecipes] = useState([]);
  // const [search, setSearch] = useState("");
  // const [query, setQuery] = useState("chicken");

  // useEffect(() => {
  //   getRecipes();
  // }, [query])
  
  // const getRecipes = async () => {
  //   const response = await fetch
  //         (url);
  //   const data = await response.json();
  //   setRecipes(data.hits);
  // };

  // const updateSearch = e => {
  //   setSearch(e.target.value);
  // };

  // const getSearch = e => {
  //   e.preventDefault();
  //   setQuery(search);
  //   setSearch("");
  // }
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Router>
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
                <Route path="/ShoppingList" element={<ShoppingList />} />
              </Routes>
            </div>
          </Router>
        </header>
       {/* adding search bar
        <div className='search-bar'> 
      <form className="search-form" onSubmit={getSearch}  >
        <input className="search-bar" type="text" value={search}
             onChange={updateSearch} />
        <button className="search-button" type="submit" >
             Search
        </button>
      </form>
    </div> */}

      </div>
    </>
  );
}

export default App;
