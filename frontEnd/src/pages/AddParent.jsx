// import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddParent = () => {


    const navigate = useNavigate();

    // Yup validation schema
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .matches(/^[A-Za-z]+$/, "First name should contain only alphabets")
            .required("Please enter First name"),
        lastName: Yup.string()
            .matches(/^[A-Za-z]+$/, "Last name should contain only alphabets")
            .required("Please enter Last name"),
        email: Yup.string()
            .email("Please enter a valid email address")
            .required("Please enter Email"),
        phoneNo: Yup.string()
            .matches(/^\d+$/, "Only numbers are allowed") // Ensures only numbers
            .length(10, "Phone number must be 10 digits")// Adjust max as needed
            .required("Phone number is required"),
        occupation: Yup.string().required("Please select Occupation"),
        relationship: Yup.string().required("Please select Relationship"),
        gender: Yup.string().required("Please select Gender"),
        address: Yup.string().required("Please enter Address"),
        image: Yup.mixed().required("Please select an Image"),
    });

    // Formik form handling
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            gender: "",
            occupation: "",
            relationship: "",
            address: "",
            image: null,
        },
        validationSchema,
        onSubmit: () => {
            Swal.fire({
                title: "Success!",
                text: "New student successfully added",
                icon: "success",
                timer: 2000,
                showConfirmButton: true,
                timerProgressBar: true,
            });

            setTimeout(() => {
                navigate("/parent");
            }, 2000);
        },
    });

    return (
        <>
            <div className="main-form">
                <div className="sub-form">
                    <form className="row g-3" onSubmit={formik.handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label"><b>First Name</b></label>
                            <input type="text" name="firstName" className="form-control" {...formik.getFieldProps("firstName")} />
                            {formik.touched.firstName && formik.errors.firstName && <span className="error">{formik.errors.firstName}</span>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label"><b>Last Name</b></label>
                            <input type="text" name="lastName" className="form-control" {...formik.getFieldProps("lastName")} />
                            {formik.touched.lastName && formik.errors.lastName && <span className="error">{formik.errors.lastName}</span>}
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label"><b>Email</b></label>
                            <input type="email" name="email" className="form-control" {...formik.getFieldProps("email")} />
                            {formik.touched.email && formik.errors.email && <span className="error">{formik.errors.email}</span>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label"><b>Phone No.</b></label>
                            <input type="text" name="phoneNo" className="form-control" {...formik.getFieldProps("phoneNo")} />
                            {formik.touched.phoneNo && formik.errors.phoneNo && <span className="error">{formik.errors.phoneNo}</span>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label"><b>Gender</b></label>
                            <select id="inputState" name="gender" className="form-select" {...formik.getFieldProps("gender")}>
                                <option >Choose...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {formik.touched.gender && formik.errors.gender && <span className="error">{formik.errors.gender}</span>}
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputAddress" className="form-label"><b>Occupation</b></label>
                            <select id="inputState" name="occupation" className="form-select" {...formik.getFieldProps("occupation")}>
                                <option >Choose...</option>
                                <option value="Tracher">Tracher</option>
                                <option value="Professor">Professor</option>
                                <option value="Lawyer">Lawyer</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Other">Other</option>
                            </select>
                            {formik.touched.occupation && formik.errors.occupation && <span className="error">{formik.errors.occupation}</span>}
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputAddress" className="form-label"><b>Relationship</b></label>
                            <select id="inputState" name="relationship" className="form-select" {...formik.getFieldProps("relationship")}>
                                <option >Choose...</option>
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Uncle">Uncle</option>
                                <option value="Aunty">Aunty</option>
                                <option value="Other">Other</option>
                            </select>
                            {formik.touched.relationship && formik.errors.relationship && <span className="error">{formik.errors.relationship}</span>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label"><b>Address</b></label>
                            <input type="text" name="address" className="form-control" {...formik.getFieldProps("address")} />
                            {formik.touched.address && formik.errors.address && <span className="error">{formik.errors.address}</span>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label"><b>Profile Image</b></label>
                            <input type="file" name="image" className="form-control" onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])} />
                            {formik.touched.image && formik.errors.image && <span className="error">{formik.errors.image}</span>}
                        </div>
                        <div className="col-12">
                            <button className="btn btn-color add-student-btn" type="submit"><span className="text">Add Parent</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddParent;