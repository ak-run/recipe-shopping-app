import React, { useState } from 'react';
import './App.css';
import ListDisplay from './components/ListDisplay';
import InputText from './components/InputText';

function ShoppingList () {
  const [items, setItems] = useState([]);
  {/* ListDisplay component receives items array and a handleClick function to delete items */}
  const handleRemove = (item) => {
    setItems(items.filter((i) => i !== item));
  };
  return (
    <div id="list-container">
      <ListDisplay items={items} handleRemove={handleRemove} />
    {/* InputText component receives a handleSubmit function to add new items */}
      <InputText handleSubmit={(item) => {
          setItems(items.concat(item));
        }}
      />
    </div>
  )
}

export default ShoppingList;
