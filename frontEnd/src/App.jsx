// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MasterPage from "./MasterPage";
import Student from "./pages/Student";
import Login from "./pages/Login";
import Teacher from "./pages/Teacher";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import AddTeacher from "./pages/AddTeacher";
import Parent from "./pages/Parent";
import AddParent from "./pages/AddParent";
import Class from "./pages/Class";
import Subject from "./pages/Subject";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import Course from "./pages/Course";
import Material from "./pages/Material";
import Holiday from "./pages/Holiday";
import AddHoliday from "./pages/AddHoliday";
import AddMaterial from "./pages/AddMaterial";
import Logout from "./pages/Logout";
import Leave from "./pages/Leave";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap routes with MasterPage */}
        <Route path="/" element={ <Login /> } />
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/dashboard" element={ <MasterPage><Dashboard /></MasterPage> }/>
        <Route path="/student" element={ <MasterPage><Student /></MasterPage> }/>
        <Route path="/add_student" element={ <MasterPage><AddStudent /></MasterPage> }/>
        <Route path="/edit_student" element={ <MasterPage><EditStudent /></MasterPage> }/>
        <Route path="/teacher" element={ <MasterPage><Teacher /></MasterPage> }/>
        <Route path="/add_teacher" element={ <MasterPage><AddTeacher /></MasterPage> }/>
        <Route path="/parent" element={ <MasterPage><Parent /></MasterPage> }/>
        <Route path="/add_parent" element={ <MasterPage><AddParent /></MasterPage> }/>
        <Route path="/class" element={ <MasterPage><Class /></MasterPage> }/>
        <Route path="/subject" element={ <MasterPage><Subject /></MasterPage> }/>
        <Route path="/profile" element={ <MasterPage><Profile /></MasterPage> }/>
        <Route path="/change_password" element={ <MasterPage><ChangePassword /></MasterPage> }/>
        <Route path="/course" element={ <MasterPage><Course /></MasterPage> }/>
        <Route path="/material" element={ <MasterPage><Material /></MasterPage> }/>
        <Route path="/add_material" element={ <MasterPage><AddMaterial /></MasterPage> }/>
        <Route path="/holiday" element={ <MasterPage><Holiday /></MasterPage> }/>
        <Route path="/add_holiday" element={ <MasterPage><AddHoliday /></MasterPage> }/>
        <Route path="/leave" element={ <MasterPage><Leave /></MasterPage> }/>
      </Routes>
    </Router>
  );
};

export default App;
