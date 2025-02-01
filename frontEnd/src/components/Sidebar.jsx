import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars,FaChalkboardTeacher,FaReceipt  } from "react-icons/fa"; // Import the hamburger icon
import { PiStudentFill } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import "../styles/Navbar.css";

const Sidebar = () => {
  // State to manage sidebar visibility (collapsed or expanded)
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarVisible ? "expanded" : "collapsed"}`}>
        {/* Close Button */}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {/* Replace FaTimes with FaBars */}
          <FaBars className="sidebar-toggle-icon" />
        </button>

        {/* Navigation Links */}
        <nav className="sidebar-links m-top">
          <Link to="/student" className="sidebar-link">
            <PiStudentFill className="sidebar-icon" />
            {isSidebarVisible && "Student"}
          </Link>
          <Link to="/about" className="sidebar-link">
            <FaChalkboardTeacher className="sidebar-icon" />
            {isSidebarVisible && "Teacher"}
          </Link>
          <Link to="/about" className="sidebar-link">
            <RiParentFill className="sidebar-icon" />
            {isSidebarVisible && "Parent"}
          </Link>
          <Link to="/about" className="sidebar-link">
            <MdSubject className="sidebar-icon" />
            {isSidebarVisible && "Subject"}
          </Link>
          <Link to="/about" className="sidebar-link">
            <FaReceipt className="sidebar-icon" />
            {isSidebarVisible && "Fees"}
          </Link>
        </nav>
      </div>

      {/* Button to open sidebar */}
      {!isSidebarVisible && (
        <button className="sidebar-toggle-open" onClick={toggleSidebar}>
          <FaBars className="sidebar-toggle-icon" />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
