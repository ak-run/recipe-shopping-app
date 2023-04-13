import React, { useState } from 'react';
//component to take user input and add items to the shopping list
const InputText = (props) => {
  const [value, setValue] = useState('');
  //returning a form containing a text input and a submit button with an onSubmit event that calls handleSubmit function with the current value of the input as argument
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleSubmit(value);
      setValue('');
    }}>
      <input 
        type="text" 
        placeholder="Add an Item"
        value={value} 
        onChange={e => setValue(e.target.value)}/>
    </form>
  );
};

export default InputText;
