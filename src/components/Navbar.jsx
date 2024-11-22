import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-white shadow-md border-b ml-24">
      <div className="text-xl font-semibold text-gray-800">
        Create Your Organisation
      </div>
      <div className="flex items-center space-x-4 relative">
        <span className="text-right text-[#11263C] font-open-sans text-[18px] font-bold leading-[26px]">
          Jawad Bhatti
        </span>
        <img
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </button>
        {menuVisible && (
          <div className="absolute right-0 mt-40 w-48 bg-white border rounded-md shadow-lg">
            <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
              My Profile
            </Link>
            <Link to="/logout" className="block px-4 py-2 hover:bg-gray-100">
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
