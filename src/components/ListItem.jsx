import React, { useState } from 'react';
import './Components.css';
//this is a component that accepts prop and turns it into a list item, it also accepts handleClick function that removes items from the list

const ListItem = (props) => {
  //adding functionality to cross items on the shopping list and uncross them
  const [isCrossed, setIsCrossed] = useState(false);
  const handleClick = (event) => {
    if (event.target.tagName !== "BUTTON") {
      setIsCrossed(!isCrossed);
    }
  };
  

  const handleRemove = () => {
    props.handleRemove(props.name);
  };
  
  const listItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    zIndex: 1
  };

  const itemTextStyle = {
    textDecoration: isCrossed ? "line-through" : "none",
  }

  return (
    <li style={listItemStyle}>
      <span style={itemTextStyle} onClick={handleClick}>{props.name}</span>
      <button className='RemoveButton' onClick={handleRemove}>
        <span className="RemoveButton__text">x</span>
      </button>
    </li>
  );
};

export default ListItem;
