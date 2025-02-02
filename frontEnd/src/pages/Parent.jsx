// import { useState } from 'react';
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from 'react';

const Parent = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [teachers] = useState([
        {
            id: 1, parentName: "John", studentName: "Doe", email: "johndoe@example.com", phone: "1234567890"
        },
        {
            id: 2, profile: "21421.jpg", firstName: "Jane", lastName: "Smith", email: "janesmith@example.com", phone: "0987654321", dob: "1990-02-01", age: 25, gender: "Female", occupation: "Doctor", relationship: "Mother", address: "456 Main St, City, State, Zip"
        },
        {
            id: 3, profile: "21421.jpg", firstName: "John", lastName: "Doe", email: "johndoe@example.com", phone: "1234567890", dob: "1990-01-01", age: 25, gender: "Male", occupation: "Farmer", relationship: "Father", address: "123 Main St, City, State, Zip"
        },
        {
            id: 4, profile: "21421.jpg", firstName: "Jane", lastName: "Smith", email: "janesmith@example.com", phone: "0987654321", dob: "1990-02-01", age: 28, gender: "Female", occupation: "Doctor", relationship: "Mother", address: "456 Main St, City, State, Zip"
        }
    ]);

    const filteredteachers = teachers.filter(teacher =>
        teacher.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.phone.includes(searchTerm) ||
        teacher.dob.includes(searchTerm) ||
        teacher.age.toString().includes(searchTerm) ||
        teacher.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.relationship.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Link className="dropdown-link-li" to="/add_parent">
                    <button className="btn btn-color add-teacher-btn"><LuPlus /> Add Parent</button>
                </Link>
                <input type="text" className="form-control w-25" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="">

                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Profile</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Occupation</th>
                                <th scope="col">Relationship</th>
                                <th scope="col">Address</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredteachers.map((teacher, index) => (
                                <tr key={teacher.id}>
                                    <td>{index + 1}</td>
                                    <td><img src={teacher.profile} className="profile_img" alt="Profile" /></td>
                                    <td>{teacher.firstName}</td>
                                    <td>{teacher.lastName}</td>
                                    <td>{teacher.email}</td>
                                    <td>{teacher.phone}</td>
                                    <td>{teacher.gender}</td>
                                    <td>{teacher.occupation}</td>
                                    <td>{teacher.relationship}</td>
                                    <td>{teacher.address}</td>
                                    <td scope="row">
                                        <Link>
                                            <button className="btn btn-primary action-btn"><FaEdit /></button>
                                        </Link>
                                        <Link>
                                            <button className="btn btn-danger action-btn"><MdDelete /></button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Parent;
