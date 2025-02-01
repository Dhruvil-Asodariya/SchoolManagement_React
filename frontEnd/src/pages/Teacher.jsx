import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import DataTable from "react-data-table-component";

const Teacher = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Sample Student Data
    const students = [
        {
            id: 1, profile: "21421.jpg", firstName: "John", lastName: "Doe", email: "johndoe@example.com", phone: "1234567890", dob: "1990-01-01", age: 28, gender: "Male", qualification: "B-tech", subjects: "React", address: "123 Main St, City, State, Zip"
        },
        {
            id: 2, profile: "21421.jpg", firstName: "Jane", lastName: "Smith", email: "janesmith@example.com", phone: "0987654321", dob: "1990-02-01", age: 25, gender: "Female", qualification: "M-tech", subjects: "Laravel", address: "456 Main St, City, State, Zip"
        },
        {
            id: 3, profile: "21421.jpg", firstName: "John", lastName: "Doe", email: "johndoe@example.com", phone: "1234567890", dob: "1990-01-01", age: 25, gender: "Male", qualification: "B-tech", subjects: "React", address: "123 Main St, City, State, Zip"
        },
        {
            id: 4, profile: "21421.jpg", firstName: "Jane", lastName: "Smith", email: "janesmith@example.com", phone: "0987654321", dob: "1990-02-01", age: 28, gender: "Female", qualification: "M-tech", subjects: "Laravel", address: "456 Main St, City, State, Zip"
        }
    ];

    // Table Columns
    const columns = [
        { name: "Sr No.", selector: (row) => row.id, sortable: true },
        { name: "Profile", cell: row => <img src={row.profile} className="profile_img" alt="Profile" />, sortable: false },
        { name: "First Name", selector: (row) => row.firstName, sortable: true },
        { name: "Last Name", selector: (row) => row.lastName, sortable: true },
        { name: "Email", selector: (row) => row.email, sortable: true },
        { name: "Gender", selector: (row) => row.gender, sortable: true },
        { name: "Age", selector: (row) => row.age, sortable: true },
        { name: "Date Of Birth", selector: (row) => row.dob, sortable: true },
        { name: "Phone", selector: (row) => row.phone, sortable: true },
        { name: "Qualification", selector: (row) => row.qualification, sortable: true },
        { name: "Subject", selector: (row) => row.subjects, sortable: true },
        { name: "Address", selector: (row) => row.address, sortable: false },
        {
            name: "Action",
            cell: () => (
                <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-primary"><FaEdit /></button>
                    <button className="btn btn-sm btn-danger"><FaTrash /></button>
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
                <Link to="/add_teacher">
                    <button className="btn btn-color shadow-sm">
                        + Add Teacher
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

export default Teacher;
