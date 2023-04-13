import React, { useState } from 'react';
import './App.css';
import ListDisplay from './components/ListDisplay';
import InputText from './components/InputText';

function ShoppingList () {
  const [items, setItems] = useState([]);
  return (
    <div id="list-container">
    {/* ListDisplay component receives items array and a handleClick function to delete items */}
      <ListDisplay items={items} handleClick={(item) => {
        setItems(items.slice().filter((i) => i !== item));
      }}/>
    {/* InputText component receives a handleSubmit function to add new items */}
      <InputText handleSubmit={(item) => {
          setItems(items.concat(item));
        }}
      />
    </div>
  )
}

export default ShoppingList;
