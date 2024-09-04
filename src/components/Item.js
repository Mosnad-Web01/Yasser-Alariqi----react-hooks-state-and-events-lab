import React, { useState } from "react";

function Item({ name, category }) {

  const [isAdded , setIsAdded] = useState(false)
  const handleAddToCart = () => {
    setIsAdded(!isAdded)
  }

  const customeClass = isAdded ? "in-cart" : "";

  return (
    <li className={customeClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{isAdded ? "In Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
