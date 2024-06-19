import React from 'react';
import { Link } from 'react-router-dom';
import but1 from "../assets/Rectangle 189.svg"
import arr from "../assets/Group 59.svg"
import { FaSquareInstagram , FaSquareFacebook } from "react-icons/fa6"; // Import react-icons
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="text-black relative -mt-[5vw] flex-col">

      <nav className="w-full flex justify-center  flex space-x-10 items-center text-[1.5vw]" style={{ fontFamily: 'shopee-bold' }}>
        <Link to="/menu" className="hover:text-black font-bold">MENU</Link>
        <Link to="/locations" className="hover:text-black font-bold">LOCATIONS</Link>
        <Link to="/franchising" className="hover:text-black font-bold">FRANCHISING</Link>
        <Link to="/about" className="hover:text-black font-bold">ABOUT US</Link>
        <Link to="/careers" className="hover:text-black font-bold">CAREERS</Link>
        <Link to="/news" className="hover:text-black font-bold">NEWS</Link>
        </nav>
        <p className="w-full flex justify-center text-[1vw] mt-[2vw]" style={{ fontFamily: 'shopee-medium' }}>ALL RIGHTS RESERVED | DOMOISHI ©2024</p>
    
        <div className="w-full flex justify-center">
        <img
        src={but1}
        className="object-cover w-[8vw]"
    />
    <p className="absolute" style={{ fontFamily: 'shopee-bold' }}>FOLLOW US</p>
    <img
        src={arr}
        className="object-cover w-[2.5vw] absolute translate-x-20 "
    />
        <a href="https://www.instagram.com/domoishi">
          <FaSquareInstagram  className="p-2 text-lg rounded-lg" size="4em" />
        </a>
        <a href="https://www.tiktok.com/@domoishi">
          <AiFillTikTok className="p-2 rounded-lg" size="4em" />
        </a>
        <a href="https://www.facebook.com/domoishi" >
          <FaSquareFacebook className="p-2 rounded-lg" size="4em" />
        </a>
    </div>
    </footer>
  );
};

export default Footer;
