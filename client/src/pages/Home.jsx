import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
    

      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="container mx-auto flex items-center justify-center h-full relative z-10">
          <div className="text-center mt-60 text-white">
            <h1 className="text-5xl font-cursive font-bold mb-4">Welcome to 64</h1>
            <p className="text-lg mb-6">Your favorite place for delicious meals</p>
            <a
              href="#"
              className="px-8 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 p-10 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 text-white p-6 rounded-lg flex items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Offer"
              className="w-32 h-32 rounded-full border-4 border-yellow-500"
            />
            <div className="ml-6">
              <h3 className="text-xl font-cursive">Tasty Thursdays</h3>
              <p className="text-lg font-bold">
                <span className="text-yellow-500">20%</span> Off
              </p>
              <a
                href="#"
                className="mt-4 inline-block px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="bg-gray-900 text-white p-6 rounded-lg flex items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Offer"
              className="w-32 h-32 rounded-full border-4 border-yellow-500"
            />
            <div className="ml-6">
              <h3 className="text-xl font-cursive">Pizza Days</h3>
              <p className="text-lg font-bold">
                <span className="text-yellow-500">15%</span> Off
              </p>
              <a
                href="#"
                className="mt-4 inline-block px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
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

export default Home;
