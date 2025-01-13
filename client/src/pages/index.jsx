import React from "react";



const index = () => {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
    
    <header className="bg-gradient-to-tr from-black to-neutral-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="#" className="text-2xl font-bold font-cursive">
            ^_^ 64 Restaurant
          </a>
          <nav className="hidden md:flex space-x-6 flex-1 justify-center">
            <a href="#" className="hover:text-yellow-500 uppercase">
              Home
            </a>
            <a href="#" className="hover:text-yellow-500 uppercase">
              Menu
            </a>
            <a href="#" className="hover:text-yellow-500 uppercase">
              Reservations
            </a>
            <a href="#" className="hover:text-yellow-500 uppercase">
              Promo
            </a>
            <a href="#" className="hover:text-yellow-500 uppercase">
              About
            </a>
            <a href="#" className="hover:text-yellow-500 uppercase">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">
              Logout
            </button>
          </div>
          <button className="md:hidden text-2xl">☰</button>
        </div>
            </header>
       
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
      <footer class="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-6">
    <div class="justify-center pt-4 ml-9">
<div class="flex justify-center space-x-4 mt-8
">
    <a href="#" class="text-white hover:text-gray-400">Privacy Policy</a>
    <a href="#" class="text-white hover:text-gray-400">Terms of Service</a>
    <a href="#" class="text-white hover:text-gray-400">Contact Us</a>
  </div>
  </div>
<div class="container mx-auto flex flex-col md:flex-row justify-between items-center">

  <div class="flex items-center space-x-4 ">
       <a href="/" className="text-2xl font-bold pl-10 font-cursive">
          ^_^ 64 Restaurant
        </a>
    <p class="text-sm justify-center pl-96 pt-5">© 2025 Your Company. All rights reserved.</p>
  </div>

 
  <div class="flex pr-10 space-x-6 mt-4 md:mt-0">
    <a href="https://facebook.com" target="_blank" class="hover:text-gray-400">
      <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.588 0 0 .588 0 1.313v21.374C0 23.411.588 24 1.325 24h11.495v-9.339H9.692V10.69h3.128V8.413c0-3.1 1.891-4.791 4.65-4.791 1.325 0 2.462.1 2.794.143v3.242l-1.918.001c-1.504 0-1.796.714-1.796 1.76v2.309h3.59l-.467 3.97h-3.123V24h6.116c.728 0 1.316-.589 1.316-1.313V1.313C24 .588 23.412 0 22.675 0z" />
      </svg>
    </a>
    <a href="https://twitter.com" target="_blank" class="hover:text-gray-400">
      <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M24 4.557a9.917 9.917 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.373 4.482A13.945 13.945 0 011.671 3.149a4.921 4.921 0 001.523 6.573 4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.946 4.894a4.935 4.935 0 01-2.224.084 4.923 4.923 0 004.6 3.417 9.868 9.868 0 01-6.1 2.104c-.396 0-.786-.023-1.175-.069a13.933 13.933 0 007.548 2.212c9.055 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.015-.637A9.936 9.936 0 0024 4.557z" />
      </svg>
    </a>
    <a href="https://instagram.com" target="_blank" class="hover:text-gray-400">
      <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 0c3.259 0 3.66.012 4.947.072 1.259.06 2.208.26 2.999.555a5.92 5.92 0 012.147 1.37 5.92 5.92 0 011.37 2.147c.295.791.495 1.74.555 2.999.06 1.287.072 1.688.072 4.947s-.012 3.66-.072 4.947c-.06 1.259-.26 2.208-.555 2.999a5.92 5.92 0 01-1.37 2.147 5.92 5.92 0 01-2.147 1.37c-.791.295-1.74.495-2.999.555-1.287.06-1.688.072-4.947.072s-3.66-.012-4.947-.072c-1.259-.06-2.208-.26-2.999-.555a5.92 5.92 0 01-2.147-1.37 5.92 5.92 0 01-1.37-2.147c-.295-.791-.495-1.74-.555-2.999-.06-1.287-.072-1.688-.072-4.947s.012-3.66.072-4.947c.06-1.259.26-2.208.555-2.999a5.92 5.92 0 011.37-2.147A5.92 5.92 0 014.947.627c.791-.295 1.74-.495 2.999-.555C8.34.012 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 3c-2.623 0-4.877.002-5.993.03-.924.024-1.572.144-2.07.326-.453.166-.787.373-1.123.71a3.785 3.785 0 00-.71 1.123c-.182.498-.302 1.146-.326 2.07C3.002 7.123 3 9.377 3 12c0 2.623.002 4.877.03 5.993.024.924.144 1.572.326 2.07.166.453.373.787.71 1.123.336.336.67.544 1.123.71.498.182 1.146.302 2.07.326 1.116.027 3.37.03 5.993.03s4.877-.002 5.993-.03c.924-.024 1.572-.144 2.07-.326.453-.166.787-.373 1.123-.71.336-.336.544-.67.71-1.123.182-.498.302-1.146.326-2.07.027-1.116.03-3.37.03-5.993s-.002-4.877-.03-5.993c-.024-.924-.144-1.572-.326-2.07-.166-.453-.373-.787-.71-1.123a3.785 3.785 0 00-1.123-.71c-.498-.182-1.146-.302-2.07-.326C16.877 3.002 14.623 3 12 3z" />
      </svg>
    </a>
  </div>
  
</div>

</footer>
    </div>
  );
};

export default index;
