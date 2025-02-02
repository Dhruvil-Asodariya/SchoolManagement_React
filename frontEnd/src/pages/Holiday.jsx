import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import { TbCalendarMonth } from "react-icons/tb";
import { useState } from "react";
const Holiday = () => {

    const role = sessionStorage.getItem('role');

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [selectedMonth, setSelectedMonth] = useState(month[0]);

    if (role == "Admin") {
        return (
            <>
                <Link className="dropdown-link-li" to="/add_holiday">
                    <button className="btn btn-color add-student-btn"><LuPlus /> Add Holiday</button>
                </Link>
                <div className="main-div">
                    <div className="inline first-div">
                        <div className="sub-first-div">
                            <label htmlFor="inputEmail4" className="first-div-title"><b>Months</b></label><hr />
                            <ul className="list-group text-start">
                                {month.map((month, index) => (
                                    <button key={index} onClick={() => setSelectedMonth(month)} type="button" className="month list-group-item list-group-item-action">{month}</button>
                                ))}
                            </ul>

                        </div>
                    </div>
                    <div className="inline second-div">
                        <div className="table-responsive sub-second-div">
                            <h5><TbCalendarMonth /> {selectedMonth}</h5><hr />
                            <table className="table table-striped table-bordered">
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">Sr No.</th>
                                        <th scope="col">Holiday Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td scope="row">Makarsankrati</td>
                                        <td scope="row">14-01-2025</td>
                                        <td scope="row">
                                            <Link>
                                                <button className="btn btn-primary action-btn"><FaEdit /></button>
                                            </Link>
                                            <Link>
                                                <button className="btn btn-danger"><MdDelete /></button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (role == "Student" || role == "Principal") {
        return (
            <>
                <div className="main-div">
                    <div className="inline first-div">
                        <div className="sub-first-div">
                            <label htmlFor="inputEmail4" className="first-div-title"><b>Months</b></label><hr />
                            <ul className="list-group text-start">
                                {month.map((month, index) => (
                                    <button key={index} onClick={() => setSelectedMonth(month)} type="button" className="month list-group-item list-group-item-action">{month}</button>
                                ))}
                            </ul>

                        </div>
                    </div>
                    <div className="inline second-div">
                        <div className="table-responsive sub-second-div">
                            <h5><TbCalendarMonth /> {selectedMonth}</h5><hr />
                            <table className="table table-striped table-bordered">
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">Sr No.</th>
                                        <th scope="col">Holiday Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td scope="row">Makarsankrati</td>
                                        <td scope="row">14-01-2025</td>
                                        <td scope="row">
                                            <Link>
                                                <button className="btn btn-primary action-btn"><FaEdit /></button>
                                            </Link>
                                            <Link>
                                                <button className="btn btn-danger"><MdDelete /></button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Holiday;
