import React, { useState } from "react";
import "./App.css";
import ListDisplay from "./components/ListDisplay";
import InputText from "./components/InputText";
import Footer from "./components/footer";

function ShoppingList() {
  const [items, setItems] = useState([]);

  /* ListDisplay component receives items array and a handleClick function to delete items */

  const handleRemove = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <>
      <h1 className="my-shopping-list">Create a Shopping List</h1>
      <p>
        Enter an ingredient in the box below and hit enter to add an item to
        your shopping list.
      </p>
      <div id="list-container">
        <ListDisplay items={items} handleRemove={handleRemove} />
        {/* InputText component receives a handleSubmit function to add new items */}
        <InputText
          handleSubmit={(item) => {
            setItems(items.concat(item));
          }}
        />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default ShoppingList;
