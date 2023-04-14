import React from 'react';
import ListItem from './ListItem';
import './Components.css';
//this is the component that displays shopping list by mapping all the items
const ListDisplay = (props) => {
    //to display shopping list: creating an array of ListItem components by mapping over the items array and passing name and handleClick props to each component
      const items = props.items.map((item, i) => (
        <ListItem
          key={i}
          name={item}
          handleRemove={props.handleRemove}
        />
      ));
  //returning unordered list containing all the ListItem components
  return (
    <ul className="ListDisplay">
      {items}
    </ul>
  );
};

export default ListDisplay;
