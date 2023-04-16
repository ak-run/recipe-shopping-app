import React from "react";
import "./Components.css";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="cooking" className="card-img-top" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.body}</p>
        <a href="#" className="btn btn-primary">
          {props.buttontext}
        </a>
      </div>
    </div>
  );
};

export default Card;
