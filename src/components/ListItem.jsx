import React from 'react';
//this is a component that accepts prop and turns it into a list item, it also accepts handleClick function that removes items from the list
const ListItem = (props) => (
  <li onClick={()=> props.handleClick(props.name)}>{props.name}</li>
);

export default ListItem;
