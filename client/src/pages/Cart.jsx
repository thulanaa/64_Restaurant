import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Delicious Pizza",
      price: 20,
      quantity: 1,
    },
    {
      id: 2,
      name: "Tasty Burger",
      price: 15,
      quantity: 2,
    },
  ]);

  const navigate = useNavigate();

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + amount),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    const totalAmount = calculateTotal();
    navigate("/payment", { state: { totalAmount } });
  };

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 shadow rounded-lg"
            >
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right">
            <h3 className="text-2xl font-bold">Total: ${calculateTotal()}</h3>
          </div>
          <div className="text-right mt-4">
            <button
              onClick={Payment}
              className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
