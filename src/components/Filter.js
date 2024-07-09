import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange, items, search }) {

  const [searchChange, setSearchChange] = useState(items)

    function handleSubmit(event) {
      event.preventDefault();
      const filteredItems = items.filter((item) => item.name.includes(searchChange));

      setSearchChange(filteredItems);
    }
  
  
    return (
    <div className="Filter">
      <form onSubmit={ handleSubmit }>
        <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search}  />
        </form>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
