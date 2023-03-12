import React, { useState } from "react";
import './styles.css'



const Cart = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (price) => {
    setItems([...items, price]);
    setTotalPrice(totalPrice + price);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Cart</h2>
      {items.length === 0 ? (
        <h1>Your cart is empty.</h1>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>${item.toFixed(2)}</li>
          ))}
          <li className="font-bold mt-2">Total: ${totalPrice.toFixed(2)}</li>
        </ul>
      )}
    </div>
  );
};

export default Cart;