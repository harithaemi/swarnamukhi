import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import burger from "../assets/burger.png";

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ scroll function
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false); // close mobile menu too
  };

  return (
    <header
      className="
        w-full fixed top-0 left-0
        bg-gradient-to-b from-[#090602] to-[#221202] 
        shadow-md z-50
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" onClick={handleClick}>
          <img className="h-16 cursor-pointer" src={Logo} alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><Link to="/" onClick={handleClick} className="hover:text-orange-400">MY SWARNAMUKHI</Link></li>
          <li><Link to="/collection" onClick={handleClick} className="hover:text-orange-400">COLLECTION</Link></li>
          <li><Link to="/category" onClick={handleClick} className="hover:text-orange-400">CATEGORY</Link></li>
          <li><Link to="/aboutus" onClick={handleClick} className="hover:text-orange-400">ABOUT US</Link></li>
          <li><Link to="/media" onClick={handleClick} className="hover:text-orange-400">MEDIA</Link></li>
          <li><Link to="/news" onClick={handleClick} className="hover:text-orange-400">NEWS</Link></li>
          <li><Link to="/store" onClick={handleClick} className="hover:text-orange-400">LOCATION</Link></li>
          <li><Link to="/contact" onClick={handleClick} className="hover:text-orange-400">CONTACT US</Link></li>
        </ul>

        {/* Burger Icon */}
        <img
          src={burger}
          className="h-8 w-8 cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          alt="menu"
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#221202] px-6 pb-4">
          <ul className="flex flex-col gap-4 text-white font-medium">
            <li><Link to="/" onClick={handleClick}>MY SWARNAMUKHI</Link></li>
            <li><Link to="/collection" onClick={handleClick}>COLLECTION</Link></li>
            <li><Link to="/category" onClick={handleClick}>CATEGORY</Link></li>
            <li><Link to="/aboutus" onClick={handleClick}>ABOUT US</Link></li>
            <li><Link to="/media" onClick={handleClick}>MEDIA</Link></li>
            <li><Link to="/news" onClick={handleClick}>NEWS</Link></li>
            <li><Link to="/store" onClick={handleClick}>LOCATION</Link></li>
            <li><Link to="/contact" onClick={handleClick}>CONTACT US</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default AppBar;

