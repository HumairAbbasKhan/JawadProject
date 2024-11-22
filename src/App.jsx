import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";
import Personalisation from "./pages/Personalisation";
import Home from "./pages/Home"; // Create a Home component as the default page

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/personalisation" element={<Personalisation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
