import {useState} from 'react';

function Item({ name, category }) {

  const [addCart, setAddCart] = useState(false)

  function handleAddCart() {
    setAddCart(preValue => !preValue)
  }

  const classItem = addCart ? "in-cart" : ""

  return (
    <li className={classItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddCart}>{addCart ? 'Remove from Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
