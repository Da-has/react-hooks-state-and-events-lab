import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Step 1: create state for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 2: handle <select> change
  function handleChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Step 3: filter items based on selected category
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
