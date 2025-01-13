import React, { useState } from "react";

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    alert(`${product.name} added to cart!`);
  };

  const menuItems = [
    {
      id: 1,
      name: "Delicious Pizza",
      price: 20,
      description: "A delightful blend of flavors and toppings.",
      image: "/images/menu-item.jpg",
      reviews: 120,
      rating: 4,
    },
    // Add more menu items here
  ];

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-cursive font-bold mb-8">Our Menu</h2>
          <ul className="flex justify-center space-x-4 mb-8">
            <li className="cursor-pointer px-4 py-2 bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white">
              All
            </li>
            <li className="cursor-pointer px-4 py-2 bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white">
              Burgers
            </li>
            <li className="cursor-pointer px-4 py-2 bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white">
              Pizza
            </li>
            <li className="cursor-pointer px-4 py-2 bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white">
              Pasta
            </li>
          </ul>
          <div className="grid grid-cols-1 pl-10 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                onClick={() => addToCart(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold">${item.price}</span>
                    <button
                      className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
                    >
                      Order
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500">
                      {"★".repeat(item.rating)}
                      {"☆".repeat(5 - item.rating)}
                    </span>
                    <span className="ml-2 text-gray-600">({item.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
