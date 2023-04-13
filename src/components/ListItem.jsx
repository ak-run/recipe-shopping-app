import React, { useState } from 'react';
//this is a component that accepts prop and turns it into a list item, it also accepts handleClick function that removes items from the list


const ListItem = (props) => {
  //adding functionality to cross items on the shopping list and uncross them
  const [isCrossed, setIsCrossed] = useState(false);

  const handleClick = () => {
    setIsCrossed(!isCrossed);
  };

  const listItemStyle = {
    textDecoration: isCrossed ? "line-through" : "none"
  };

  return (
    <li onClick={handleClick} style={listItemStyle}>
      {props.name}
    </li>
  );
};

export default ListItem;
