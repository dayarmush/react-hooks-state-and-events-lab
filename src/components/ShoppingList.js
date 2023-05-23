import React from "react";
import Item from "./Item";
import { useState } from 'react'

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory ] = useState('All')

  function handleSelectedCategory(e) {
    setSelectedCategory(preValue => preValue = e.target.value)
  }

  const itemFilter = items.filter(item => item.category === selectedCategory)

  const allItems = selectedCategory === 'All' ? items : itemFilter

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectedCategory} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {allItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
