import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemCategory, setItemCatagory] = useState("Produce")
  const [itemName, setItemName] = useState("")

  function handleCatagoryChange(event) {
    setItemCatagory(event.target.value)
  }

  function handleItemSubmit(event) {
      event.preventDefault()
      const newItem = {
        id: uuid(), 
        name: itemName,
        category: itemCategory,
      };
    
      onItemFormSubmit(newItem)

  }

function handleItemChange(event) {
  setItemName(event.target.value)
};





  return (
    <form className="NewItem" onSubmit={ handleItemSubmit }>
      <label>
        Name:
        <input type="text" name="name" value= { itemName } onChange={ handleItemChange } />
      </label>

      <label>
        Category:
        <select name="category" value= { itemCategory } onChange={handleCatagoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
