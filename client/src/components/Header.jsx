import React from "react";

const Header= () => {
  return (
    
   

      <header className="bg-gradient-to-tr from-black to-neutral-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="/" className="text-2xl font-bold font-cursive">
            ^_^ 64 Restaurant
          </a>
          <nav className="hidden md:flex space-x-6 flex-1 justify-center">
            <a href="/" className="hover:text-yellow-500 uppercase">
              Home
            </a>
            <a href="/Menu" className="hover:text-yellow-500 uppercase">
              Menu
            </a>
            <a href="/Reservations" className="hover:text-yellow-500 uppercase">
              Reservations
            </a>
            <a href="/Promo" className="hover:text-yellow-500 uppercase">
              Promo
            </a>
            <a href="/About" className="hover:text-yellow-500 uppercase">
              About
            </a>
            <a href="/Contact" className="hover:text-yellow-500 uppercase">
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
       
        );
      };
  
export default Header;