// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import "../font.css"
const Navbar = () => {
  return (
    <header className="text-black mx-12 px-36 py-12 flex justify-between font-sans">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-[14vw] h-[6vw] object-cover "
        />
      </Link>
      <nav className="flex space-x-8 md:text-lg sm:text-base flex items-center " style={{ fontFamily: 'shopee-bold' }}>
        <Link to="/menu" className="hover:text-black font-bold">MENU</Link>
        <Link to="/locations" className="hover:text-black font-bold">LOCATIONS</Link>
        <Link to="/franchising" className="hover:text-black font-bold">FRANCHISING</Link>
        <Link to="/about" className="hover:text-black font-bold">ABOUT US</Link>
        <Link to="/careers" className="hover:text-black font-bold">CAREERS</Link>
        <Link to="/news" className="hover:text-black font-bold">NEWS</Link>
        {/* <Link to="/order-now" className="hover:text-gray-400">Order Now</Link> */}
        </nav>
      <Link to="/locations">
          <button className="mt-3 mb-4 bg-red-700 text-white md:text-xl font-bold py-6 px-[6vw] rounded-full hover:bg-gray-800" style={{ fontFamily: 'shopee-bold' }}>
            ORDER NOW
          </button>
        </Link>
        
    </header>
  );
};

export default Navbar;
