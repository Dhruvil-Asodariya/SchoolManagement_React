import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaBars, FaTimes, FaChevronDown, FaChalkboardTeacher, FaChalkboard } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { PiStudentFill } from "react-icons/pi";
// import { RiParentFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { MdSubject, MdCurrencyRupee, MdOutlineLibraryBooks } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { LuNotebookPen } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import "./MasterPage.css";
import Swal from "sweetalert2";

const MasterPage = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isLocked, setIsLocked] = useState(false);
    const [password, setPassword] = useState("");
    const correctPassword = "admin123"; // Change this to integrate with authentication logic

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        const dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
    };

    const handleLockScreen = () => setIsLocked(true);
    const handleUnlock = () => {
        if (password === correctPassword) {
            setIsLocked(false);
            setPassword("");
        } else {
            Swal.fire({
                icon: "warning",
                title: "Incorrect Password",
                confirmButtonText: "Try Again",
                position: "top", // Aligns the alert at the top of the screen
                toast: false, // Use a regular modal (not a toast)
                showConfirmButton: true,
                timer: 5000, // Optional: auto-close the alert after a delay (in milliseconds)
                customClass: {
                    popup: "top-10 w-[500px] h-[300px]", // Increase width and height of the alert
                },
            });
        }
    };
    {/* Lock Screen Modal */ }
    {
        isLocked && (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-black bg-opacity-50 text-white z-3">
                <div className="bg-gradient p-4 rounded shadow-lg w-100" style="max-width: 400px; background: linear-gradient(to right, #a855f7, #3b82f6, #10b981);">
                    <h2 className="text-center text-white fw-bold mb-3">Screen Locked</h2>
                    <input
                        type="password"
                        className="form-control text-white fw-bold bg-dark border-light mb-3"
                        placeholder="Enter Password"
                        id="passwordInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button
                        className="btn w-100 text-white fw-bold py-2"
                        style="background: linear-gradient(to right, #3b82f6, #14b8a6, #10b981); border: none;"
                        onClick={handleUnlock}>
                        Unlock
                    </button>
                </div>
            </div>
        )
    }

    const username = sessionStorage.getItem("role");

    //  ------------------------------------------------Admin Panel ------------------------------------------------

    if (username == "Admin") {
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
                                        <CiLock />
                                        <button className="btn" onClick={handleLockScreen}>
                                            <span className="lock-span">Lock Screen</span>
                                        </button>
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
                                        <FaChalkboard />
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
                                        <MdCurrencyRupee />
                                        {isSidebarOpen && <span className="link-span">Fees</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/leave">
                                        <LuNotebookPen />
                                        {isSidebarOpen && <span className="link-span">Leave</span>}
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

    } else if (username == "Student") {
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
                                        <FaChalkboard />
                                        {isSidebarOpen && <span className="link-span">Dashboard</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/course">
                                        <MdOutlineLibraryBooks />
                                        {isSidebarOpen && <span className="link-span">Couse</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/holiday">
                                        <SlCalender />
                                        {isSidebarOpen && <span className="link-span">Hiloday</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/add_leave">
                                        <LuNotebookPen />
                                        {isSidebarOpen && <span className="link-span">Leave</span>}
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

    } else if (username == "Teacher") {
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
                                    <li>
                                        <Link className="link-li" to="/leave">
                                            <LuNotebookPen />
                                            {isSidebarOpen && <span className="link-span">Leave</span>}
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
                                        <FaChalkboard />
                                        {isSidebarOpen && <span className="link-span">Dashboard</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/course">
                                        <MdOutlineLibraryBooks />
                                        {isSidebarOpen && <span className="link-span">Couse</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/holiday">
                                        <SlCalender />
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

    } else if (username == "Principal") {
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
                                    <li>
                                        <Link className="link-li" to="/leave">
                                            <LuNotebookPen />
                                            {isSidebarOpen && <span className="link-span">Leave</span>}
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
                                        <FaChalkboard />
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
                                        <SlCalender />
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

    } else if (username == "Parent") {
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
                                        <FaChalkboard />
                                        {isSidebarOpen && <span className="link-span">Dashboard</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/course">
                                        <MdOutlineLibraryBooks />
                                        {isSidebarOpen && <span className="link-span">Couse</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/holiday">
                                        <SlCalender />
                                        {isSidebarOpen && <span className="link-span">Hiloday</span>}
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-li" to="/leave">
                                        <LuNotebookPen />
                                        {isSidebarOpen && <span className="link-span">Leave</span>}
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
