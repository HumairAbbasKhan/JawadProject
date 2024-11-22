import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-[7%]  shadow-lg">
      <div className="flex flex-col items-center py-4 space-y-6">
        <Link to="/" className="text-gray-800 flex flex-col items-center">
          <img src="./assets/images/home.png" />
        </Link>
        <Link
          to="/profile"
          className="text-gray-800 flex flex-col items-center"
        >
          <img src="./assets/images/habits.png" />
        </Link>
        <Link to="/orders" className="text-gray-800 flex flex-col items-center">
          <span>Orders</span>
        </Link>
        <Link to="/logout" className="text-gray-800 flex flex-col items-center">
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
