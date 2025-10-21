import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: create state to track if item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Step 2: handle button click
  function handleAddToCartClick() {
    // toggle the value each time button is clicked
    setIsInCart((prevState) => !prevState);
  }

  // Step 3: dynamically set className and button text
  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";
  const buttonClass = isInCart ? "remove" : "add";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddToCartClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
