import React, { Component } from "react";
import Card from "./navCards";

import cooking from "../assets/cooking.jpg";
import shopping from "../assets/foodShopping.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

class Cards extends Component {
  render() {
    return (
      <>
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-6">
              <Link
                to="/RecipeFinder"
                className="Link nav-card-link"
                onClick={scrollToTop}
              >
                <Card
                  imgsrc={cooking}
                  title="Find a recipe"
                  body="Search our recipe database by ingredient to find your next dish."
                  buttontext="Search recipes"
                />
              </Link>
            </div>
            <div className="col-md-6">
              <Link
                to="/ShoppingList"
                className="Link nav-card-link"
                onClick={scrollToTop}
              >
                <Card
                  imgsrc={shopping}
                  title="Create a shopping list"
                  body="Enter the ingredients for your next shop to create your shopping list."
                  buttontext="Create list"
                />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
