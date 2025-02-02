import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import DataTable from "react-data-table-component";

const Student = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Sample Student Data
    const students = [
        {
            id: 1, profile: "21421.jpg", firstName: "John", lastName: "Doe", parentName: "xyz", studentEmail: "johndoe@example.com", parentEmail: "parent@example.com", studentPhone: "1234567890", parentPhone: "8787342878", dob: "1990-01-01", age: 28, gender: "Male", class: "12", address: "123 Main St, City, State, Zip"
        },
        {
            id: 2, profile: "21421.jpg", firstName: "Jane", lastName: "Smith", parentName: "xyz", studentEmail: "janesmith@example.com", parentEmail: "parent@example.com", studentPhone: "9876543210", parentPhone: "8787342878", dob: "1995-05-15", age: 25, gender: "Female", class: "10", address: "456 Elm St, City, State, Zip"
        },
        {
            id: 3, profile: "21421.jpg", firstName: "John", lastName: "Doe", parentName: "xyz", studentEmail: "johndoe@example.com", parentEmail: "parent@example.com", studentPhone: "1234567890", parentPhone: "8787342878", dob: "1990-01-01", age: 28, gender: "Male", class: "12", address: "123 Main St, City, State, Zip"
        },
        {
            id: 4, profile: "21421.jpg", firstName: "Jane", lastName: "Smith", parentName: "xyz", studentEmail: "janesmith@example.com", parentEmail: "parent@example.com", studentPhone: "9876543210", parentPhone: "8787342878", dob: "1995-05-15", age: 25, gender: "Female", class: "10", address: "456 Elm St, City, State, Zip"
        },
        {
            id: 5, profile: "21421.jpg", firstName: "John", lastName: "Doe", parentName: "xyz", studentEmail: "johndoe@example.com", parentEmail: "parent@example.com", studentPhone: "1234567890", parentPhone: "8787342878", dob: "1990-01-01", age: 28, gender: "Male", class: "12", address: "123 Main St, City, State, Zip"
        },
        {
            id: 6, profile: "21421.jpg", firstName: "Jane", lastName: "Smith", parentName: "xyz", studentEmail: "janesmith@example.com", parentEmail: "parent@example.com", studentPhone: "9876543210", parentPhone: "8787342878", dob: "1995-05-15", age: 25, gender: "Female", class: "10", address: "456 Elm St, City, State, Zip"
        },
        {
            id: 7, profile: "21421.jpg", firstName: "John", lastName: "Doe", parentName: "xyz", studentEmail: "johndoe@example.com", parentEmail: "parent@example.com", studentPhone: "1234567890", parentPhone: "8787342878", dob: "1990-01-01", age: 28, gender: "Male", class: "12", address: "123 Main St, City, State, Zip"
        },
        {
            id: 8, profile: "21421.jpg", firstName: "Jane", lastName: "Smith", parentName: "xyz", studentEmail: "janesmith@example.com", parentEmail: "parent@example.com", studentPhone: "9876543210", parentPhone: "8787342878", dob: "1995-05-15", age: 25, gender: "Female", class: "10", address: "456 Elm St, City, State, Zip"
        },
        {
            id: 9, profile: "21421.jpg", firstName: "John", lastName: "Doe", parentName: "xyz", studentEmail: "johndoe@example.com", parentEmail: "parent@example.com", studentPhone: "1234567890", parentPhone: "8787342878", dob: "1990-01-01", age: 28, gender: "Male", class: "12", address: "123 Main St, City, State, Zip"
        },
        {
            id: 10, profile: "21421.jpg", firstName: "Jane", lastName: "Smith", parentName: "xyz", studentEmail: "janesmith@example.com", parentEmail: "parent@example.com", studentPhone: "9876543210", parentPhone: "8787342878", dob: "1995-05-15", age: 25, gender: "Female", class: "10", address: "456 Elm St, City, State, Zip"
        },
        {
            id: 11, profile: "21421.jpg", firstName: "John", lastName: "Doe", parentName: "xyz", studentEmail: "johndoe@example.com", parentEmail: "parent@example.com", studentPhone: "1234567890", parentPhone: "8787342878", dob: "1990-01-01", age: 28, gender: "Male", class: "12", address: "123 Main St, City, State, Zip"
        },
        {
            id: 12, profile: "21421.jpg", firstName: "Jane", lastName: "Smith", parentName: "xyz", studentEmail: "janesmith@example.com", parentEmail: "parent@example.com", studentPhone: "9876543210", parentPhone: "8787342878", dob: "1995-05-15", age: 25, gender: "Female", class: "10", address: "456 Elm St, City, State, Zip"
        }
    ];

    // Table Columns
    const columns = [
        { name: "Sr No.", selector: (row) => row.id, sortable: true },
        { name: "Profile", cell: row => <img src={row.profile} className="profile_img" alt="Profile" />, sortable: false },
        { name: "First Name", selector: (row) => row.firstName, sortable: true },
        { name: "Last Name", selector: (row) => row.lastName, sortable: true },
        { name: "Parent Name", selector: (row) => row.parentName, sortable: true },
        { name: "Student Email", selector: (row) => row.studentEmail, sortable: true },
        { name: "Parent Email", selector: (row) => row.parentEmail, sortable: true },
        { name: "Student Phone", selector: (row) => row.studentPhone, sortable: true },
        { name: "Parent Phone", selector: (row) => row.parentPhone, sortable: true },
        { name: "Date Of Birth", selector: (row) => row.dob, sortable: true },
        { name: "Age", selector: (row) => row.age, sortable: true },
        { name: "Gender", selector: (row) => row.gender, sortable: true },
        { name: "Class", selector: (row) => row.class, sortable: true },
        { name: "Address", selector: (row) => row.address, sortable: false },
        {
            name: "Action",
            cell: () => (
                <div className="d-flex gap-2">
                    <Link to={"/edit_student"}>
                        <button className="btn btn-sm btn-primary"><FaEdit /></button>
                    </Link>
                    <Link>
                        <button className="btn btn-sm btn-danger"><FaTrash /></button>
                    </Link>
                </div>
            ),
        },
    ];

    // Filter Students
    const filteredStudents = students.filter((student) =>
        Object.values(student).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="container py-10">
            {/* <h2 className="">Student List</h2> */}
            <div className="mb-4 d-flex justify-content-between align-items-center w-100">
                <Link to="/add_student">
                    <button className="btn btn-color shadow-sm">
                        + Add Student
                    </button>
                </Link>
                <input
                    type="text"
                    placeholder="Search..."
                    className="form-control w-25 ms-3"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>


            <div className="table-responsive shadow p-3 rounded">
                <DataTable
                    columns={columns}
                    data={filteredStudents}
                    pagination
                    highlightOnHover
                    striped
                />
            </div>
        </div>
    );
};

export default Student;
