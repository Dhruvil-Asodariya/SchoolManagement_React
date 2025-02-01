// import React from "react";
import { Link } from "react-router-dom";
// import { FaSchool } from "react-icons/fa";
import "../styles/Navbar.css"; // Import the CSS file for navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <p><FaSchool className="navbar-icon" /></p>
      <p className="p">School Management System</p> */}
      <Link to="/profile" className="navbar-title">Profile</Link>
    </nav>
  );
};
export default Navbar;
