import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold text-red-600">hopelink</div>

      <div className="relative w-full md:w-auto">
        <input
          type="text"
          className="w-full px-10 py-2 border border-gray-300 rounded-full md:w-96 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          placeholder="Search"
        />
        <span className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.41-1.42l4.48 4.49a1 1 0 11-1.42 1.41l-4.47-4.48zM8 14A6 6 0 108 2a6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      <div className="flex items-center space-x-6 text-gray-800 md:flex md:space-x-6">
        {}
        <div className="hidden space-x-6 md:flex">
          <Link to="/campaigns" className="font-bold hover:text-gray-500">
            Campaigns
          </Link>
          <Link to="/about-us" className="font-bold hover:text-gray-500">
            About Us
          </Link>
        </div>

        {}
        <div className="flex">
          <button className="px-4 py-2 font-semibold text-red-600 border border-red-600 rounded-l-full">
            Sign up
          </button>
          <button className="px-4 py-2 font-semibold text-white bg-red-600 border border-red-600 rounded-r-full">
            Sign in
          </button>
        </div>

        {}
        <button
          onClick={toggleMenu}
          className="flex items-center text-gray-800 md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white shadow-md z-50 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center py-4">
          <Link to="/campaigns" className="py-2 font-bold hover:text-gray-500">
            Campaigns
          </Link>
          <Link to="/about-us" className="py-2 font-bold hover:text-gray-500">
            About Us
          </Link>
          <div className="flex flex-col items-center mt-4 space-y-2">
            <button className="px-4 py-2 font-semibold text-red-600 border border-red-600 rounded-l-full">
              Sign up
            </button>
            <button className="px-4 py-2 font-semibold text-white bg-red-600 border border-red-600 rounded-r-full">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
