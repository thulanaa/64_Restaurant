import React from "react";


const Menu = () => {
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
            {/* Menu Item */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img
                src="/images/menu-item.jpg"
                alt="Menu Item"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Delicious Pizza</h3>
                <p className="text-sm text-gray-600 mb-4">
                  A delightful blend of flavors and toppings.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold">$20</span>
                  <a
                    href="#"
                    className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
                  >
                    Order
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="ml-2 text-gray-600">(120 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default Menu;
