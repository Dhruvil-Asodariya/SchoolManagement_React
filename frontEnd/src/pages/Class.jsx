// import { useState } from 'react';
// import { LuPlus } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";

const Class = () => {

    const navigate = useNavigate();

    // Yup validation schema
    const validationSchema = Yup.object({
        className: Yup.string().required("Please enter Subject name"),
    });

    // Formik form handling
    const formik = useFormik({
        initialValues: {
            className: "",
        },
        validationSchema,
        onSubmit: () => {
            Swal.fire({
                title: "Success!",
                text: "New class successfully added",
                icon: "success",
                timer: 2000,
                showConfirmButton: true,
                timerProgressBar: true,
            });

            setTimeout(() => {
                formik.resetForm();
                navigate("/class");
            }, 2000);
        },
    });

    return (
        <>
            <div className="main-div">
                <div className="inline first-div">
                    <div className="sub-first-div">
                        <label htmlFor="inputEmail4" className="first-div-title"><b>Add Class</b></label><hr />
                        <form className="row g-3" onSubmit={formik.handleSubmit}>
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="form-label"><b>Class Name</b></label>
                                <input type="text" name="className" className="form-control" {...formik.getFieldProps("className")} />
                                {formik.touched.className && formik.errors.className && <span className="error">{formik.errors.className}</span>}
                            </div>
                            <div className="col-12">
                                <button className="btn btn-color add-student-btn" type="submit"><span className="text">Add Class</span></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="inline second-div">
                    <div className="table-responsive sub-second-div">
                        <table className="table table-striped table-bordered">
                            <thead className="table-primary">
                                <tr>
                                    <th scope="col">Sr No.</th>
                                    <th scope="col">Class Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <td scope="row">Class 1</td>
                                    <td scope="row">
                                        <Link>
                                            <button className="btn btn-color action-btn"><FaEdit /></button>
                                        </Link>
                                        <Link>
                                            <button className="btn btn-color"><MdDelete /></button>
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
};

export default Class;
