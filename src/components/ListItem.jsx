import React, { useState } from 'react';
import './Components.css';
//this is a component that accepts prop and turns it into a list item, it also accepts handleClick function that removes items from the list

const ListItem = (props) => {
  //adding functionality to cross items on the shopping list and uncross them
  const [isCrossed, setIsCrossed] = useState(false);
  const handleClick = () => {
    setIsCrossed(!isCrossed);
  };
  const handleRemove = () => {
    props.handleRemove(props.name);
  };
  const listItemStyle = {
    textDecoration: isCrossed ? "line-through" : "none"
  };
  return (
    <li style={listItemStyle}>
      {/*This is where each item is added as a text*/}
      <span onClick={handleClick}>{props.name}</span>
       {/*This is the button to remove an item set to display x*/}     
      <button className="RemoveButton" onClick={handleRemove}>x</button>
    </li>
  );
};

export default ListItem;
