import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaBars, FaTimes, FaChevronDown, FaChalkboardTeacher, FaChalkboard  } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { PiStudentFill } from "react-icons/pi";
// import { RiParentFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { MdSubject, MdCurrencyRupee,MdOutlineLibraryBooks   } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import "./MasterPage.css";

const MasterPage = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        const dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
    };

    const username = sessionStorage.getItem("role");

// ------------------------------------------------Admin Panel------------------------------------------------

    if(username == "Admin"){
        return (
            <div className="app">
                <header className="header">
                    <div>
                        <div className="inline">
                            <img className="rounded img logo-img" src="logo-sm.svg" alt="Logo" />
                        </div>
                        <div className="inline ">
                            <span className="header-name logo-text">DASON</span>
                        </div>
                    </div>
                    <div className="header-contain">
                        <Link className="dropdown-link-li" to="/profile">
                            <img className="rounded-circle img" src="21421.jpg" alt="Profile" />
                        </Link>
                        <div className="dropdown">
                            <button className="dropdown-btn btn" onClick={toggleDropdown}>
                                <span className="button">Asodariya <FaChevronDown /></span>
                            </button>
                            <div className="dropdown-content">
                                <ul>
                                    <li>
                                        <Link className="dropdown-link-li" to="/profile">
                                            <ImProfile />
                                            <span className="dropdown-link-span">Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-link-li" to="/change_password">
                                            <RiLockPasswordLine />
                                            <span className="dropdown-link-span">Change Password</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-link-li" to="/logout">
                                            <IoIosLogOut />
                                            <span className="dropdown-link-span">Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="layout">
                    <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                        <nav>
                            <button onClick={toggleSidebar} className="toggle-button">
                                {isSidebarOpen ? <FaTimes /> : <FaBars />}
                            </button>
                            <ul>
                                <li>
                                    <Link className="link-li" to="/dashboard">
                                        <FaChalkboard  />
                                        {isSidebarOpen && <span className="link-span">Dashboard</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/student">
                                        <PiStudentFill />
                                        {isSidebarOpen && <span className="link-span">Student</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/teacher">
                                        <FaChalkboardTeacher />
                                        {isSidebarOpen && <span className="link-span">Teacher</span>}
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link className="link-li" to="/parent">
                                        <RiParentFill />
                                        {isSidebarOpen && <span className="link-span">Parent</span>}
                                    </Link>
                                </li> */}
                                <li>
                                    <Link className="link-li" to="/class">
                                        <SiGoogleclassroom />
                                        {isSidebarOpen && <span className="link-span">Class</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/holiday">
                                        <SlCalender />
                                        {isSidebarOpen && <span className="link-span">Holiday</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/subject">
                                        <MdSubject />
                                        {isSidebarOpen && <span className="link-span">Subject</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="">
                                        <MdCurrencyRupee  />
                                        {isSidebarOpen && <span className="link-span">Fees</span>}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <main className="content">
                        {children}
                    </main>
                </div>
            </div>
        );

// ------------------------------------------------Student Panel------------------------------------------------

    }else if(username == "Student"){
        return (
            <div className="app">
                <header className="header">
                    <div>
                        <div className="inline">
                            <img className="rounded img logo-img" src="logo-sm.svg" alt="Logo" />
                        </div>
                        <div className="inline ">
                            <span className="header-name logo-text">DASON</span>
                        </div>
                    </div>
                    <div className="header-contain">
                        <Link className="dropdown-link-li" to="/profile">
                            <img className="rounded-circle img" src="21421.jpg" alt="Profile" />
                        </Link>
                        <div className="dropdown">
                            <button className="dropdown-btn btn" onClick={toggleDropdown}>
                                <span className="button">Asodariya <FaChevronDown /></span>
                            </button>
                            <div className="dropdown-content">
                                <ul>
                                    <li>
                                        <Link className="dropdown-link-li" to="/profile">
                                            <ImProfile />
                                            <span className="dropdown-link-span">Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-link-li" to="/change_password">
                                            <RiLockPasswordLine />
                                            <span className="dropdown-link-span">Change Password</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-link-li" to="/logout">
                                            <IoIosLogOut />
                                            <span className="dropdown-link-span">Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="layout">
                    <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                        <nav>
                            <button onClick={toggleSidebar} className="toggle-button">
                                {isSidebarOpen ? <FaTimes /> : <FaBars />}
                            </button>
                            <ul>
                                <li>
                                    <Link className="link-li" to="/dashboard">
                                        <FaChalkboard  />
                                        {isSidebarOpen && <span className="link-span">Dashboard</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/course">
                                        <MdOutlineLibraryBooks   />
                                        {isSidebarOpen && <span className="link-span">Couse</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/holiday">
                                        <SlCalender   />
                                        {isSidebarOpen && <span className="link-span">Hiloday</span>}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <main className="content">
                        {children}
                    </main>
                </div>
            </div>
        );

// ------------------------------------------------Teacher Panel------------------------------------------------

    }else if(username == "Teacher"){
        return (
            <div className="app">
                <header className="header">
                    <div>
                        <div className="inline">
                            <img className="rounded img logo-img" src="logo-sm.svg" alt="Logo" />
                        </div>
                        <div className="inline ">
                            <span className="header-name logo-text">DASON</span>
                        </div>
                    </div>
                    <div className="header-contain">
                        <Link className="dropdown-link-li" to="/profile">
                            <img className="rounded-circle img" src="21421.jpg" alt="Profile" />
                        </Link>
                        <div className="dropdown">
                            <button className="dropdown-btn btn" onClick={toggleDropdown}>
                                <span className="button">Asodariya <FaChevronDown /></span>
                            </button>
                            <div className="dropdown-content">
                                <ul>
                                    <li>
                                        <Link className="dropdown-link-li" to="/profile">
                                            <ImProfile />
                                            <span className="dropdown-link-span">Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-link-li" to="/change_password">
                                            <RiLockPasswordLine />
                                            <span className="dropdown-link-span">Change Password</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-link-li" to="/logout">
                                            <IoIosLogOut />
                                            <span className="dropdown-link-span">Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="layout">
                    <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                        <nav>
                            <button onClick={toggleSidebar} className="toggle-button">
                                {isSidebarOpen ? <FaTimes /> : <FaBars />}
                            </button>
                            <ul>
                                <li>
                                    <Link className="link-li" to="/dashboard">
                                        <FaChalkboard  />
                                        {isSidebarOpen && <span className="link-span">Dashboard</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/course">
                                        <MdOutlineLibraryBooks   />
                                        {isSidebarOpen && <span className="link-span">Couse</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/holiday">
                                        <SlCalender   />
                                        {isSidebarOpen && <span className="link-span">Hiloday</span>}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <main className="content">
                        {children}
                    </main>
                </div>
            </div>
        );

// ------------------------------------------------Principal Panel------------------------------------------------

    }else if(username == "Principal"){
        return (
            <div className="app">
                <header className="header">
                    <div>
                        <div className="inline">
                            <img className="rounded img logo-img" src="logo-sm.svg" alt="Logo" />
                        </div>
                        <div className="inline ">
                            <span className="header-name logo-text">DASON</span>
                        </div>
                    </div>
                    <div className="header-contain">
                        <Link className="dropdown-link-li" to="/profile">
                            <img className="rounded-circle img" src="21421.jpg" alt="Profile" />
                        </Link>
                        <div className="dropdown">
                            <button className="dropdown-btn btn" onClick={toggleDropdown}>
                                <span className="button">Asodariya <FaChevronDown /></span>
                            </button>
                            <div className="dropdown-content">
                                <ul>
                                    <li>
                                        <Link className="dropdown-link-li" to="/profile">
                                            <ImProfile />
                                            <span className="dropdown-link-span">Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-link-li" to="/change_password">
                                            <RiLockPasswordLine />
                                            <span className="dropdown-link-span">Change Password</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-link-li" to="/logout">
                                            <IoIosLogOut />
                                            <span className="dropdown-link-span">Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="layout">
                    <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                        <nav>
                            <button onClick={toggleSidebar} className="toggle-button">
                                {isSidebarOpen ? <FaTimes /> : <FaBars />}
                            </button>
                            <ul>
                                <li>
                                    <Link className="link-li" to="/dashboard">
                                        <FaChalkboard  />
                                        {isSidebarOpen && <span className="link-span">Dashboard</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/student">
                                        <PiStudentFill />
                                        {isSidebarOpen && <span className="link-span">Student</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/teacher">
                                        <FaChalkboardTeacher />
                                        {isSidebarOpen && <span className="link-span">Teacher</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/holiday">
                                        <SlCalender   />
                                        {isSidebarOpen && <span className="link-span">Hiloday</span>}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <main className="content">
                        {children}
                    </main>
                </div>
            </div>
        );

// ------------------------------------------------Parent Panel------------------------------------------------

    }else if(username == "Parent"){
        return (
            <div className="app">
                <header className="header">
                    <div>
                        <div className="inline">
                            <img className="rounded img logo-img" src="logo-sm.svg" alt="Logo" />
                        </div>
                        <div className="inline ">
                            <span className="header-name logo-text">DASON</span>
                        </div>
                    </div>
                    <div className="header-contain">
                        <Link className="dropdown-link-li" to="/profile">
                            <img className="rounded-circle img" src="21421.jpg" alt="Profile" />
                        </Link>
                        <div className="dropdown">
                            <button className="dropdown-btn btn" onClick={toggleDropdown}>
                                <span className="button">Asodariya <FaChevronDown /></span>
                            </button>
                            <div className="dropdown-content">
                                <ul>
                                    <li>
                                        <Link className="dropdown-link-li" to="/profile">
                                            <ImProfile />
                                            <span className="dropdown-link-span">Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-link-li" to="/change_password">
                                            <RiLockPasswordLine />
                                            <span className="dropdown-link-span">Change Password</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-link-li" to="/logout">
                                            <IoIosLogOut />
                                            <span className="dropdown-link-span">Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="layout">
                    <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                        <nav>
                            <button onClick={toggleSidebar} className="toggle-button">
                                {isSidebarOpen ? <FaTimes /> : <FaBars />}
                            </button>
                            <ul>
                                <li>
                                    <Link className="link-li" to="/dashboard">
                                        <FaChalkboard  />
                                        {isSidebarOpen && <span className="link-span">Dashboard</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/course">
                                        <MdOutlineLibraryBooks   />
                                        {isSidebarOpen && <span className="link-span">Couse</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/holiday">
                                        <SlCalender   />
                                        {isSidebarOpen && <span className="link-span">Hiloday</span>}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <main className="content">
                        {children}
                    </main>
                </div>
            </div>
        );
    }
};

MasterPage.propTypes = {
    children: PropTypes.node.isRequired,  // 'children' is a required prop of type 'node'
};

export default MasterPage;
