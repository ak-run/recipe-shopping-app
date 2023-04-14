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
        

      </div>
    </>
  );
}

export default App;
