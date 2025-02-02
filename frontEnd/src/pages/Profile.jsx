import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const [showEditModal, setShowEditModal] = useState(false);
    const [profilePic, setProfilePic] = useState("vite.svg");

    const profileValidationSchema = Yup.object({
        firstName: Yup.string()
            .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
            .required("First name is required"),
        lastName: Yup.string()
            .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
            .required("Last name is required"),
        phoneNo: Yup.string()
            .matches(/^[0-9]+$/, "Only numbers are allowed")
            .length(10, "Phone number must be 10 digits")
            .required("Phone number is required"),
        dob: Yup.string().required("Date of Birth is required"),
        gender: Yup.string().required("Gender is required"),
        address: Yup.string().required("Address is required"),
    });

    const modalValidationSchema = Yup.object({
        profilePic: Yup.mixed()
            .required("Profile picture is required")
            .test("fileSize", "File too large, max 5MB", (value) =>
                value ? value.size <= 5 * 1024 * 1024 : true
            )
            .test("fileType", "Only JPG, JPEG, and PNG allowed", (value) =>
                value
                    ? ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
                    : true
            ),
    });

    const formik = useFormik({
        initialValues: {
            firstName: "Ethan",
            lastName: "Leo",
            phoneNo: "8200606297",
            dob: "2007-10-18",
            gender: "Male",
            address: "Mountain View, California",
        },
        validationSchema: profileValidationSchema,
        onSubmit: (values) => {
            Swal.fire("Success!", "Profile updated successfully", "success");
            console.log("Updated Profile:", values);
        },
    });

    const modalFormik = useFormik({
        initialValues: { profilePic: null },
        validationSchema: modalValidationSchema,
        onSubmit: (values) => {
            const reader = new FileReader();
            reader.onload = (e) => setProfilePic(e.target.result);
            reader.readAsDataURL(values.profilePic);
            setShowEditModal(false);
            Swal.fire("Success!", "Profile picture updated successfully", "success");
        },
    });

    return (
        <>
            <section className="py-4">
                <div className="container">
                    <div className="row">
                        {/* Profile Card */}
                        <div className="col-md-4">
                            <div className="card text-center shadow-sm">
                                <div className="card-body">
                                    <img
                                        src={profilePic}
                                        alt="Profile"
                                        className="rounded-circle border border-primary mb-3"
                                        style={{ width: "120px", height: "120px" }}
                                    />
                                    <h5 className="card-title">
                                        {formik.values.firstName} {formik.values.lastName}
                                    </h5>
                                    <p className="text-muted">Project Manager</p>
                                    <div>
                                        <button
                                            className="btn btn-primary me-2"
                                            onClick={() => setShowEditModal(true)}
                                        >
                                            <FaRegEdit className="me-1" /> Edit Profile
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                Swal.fire(
                                                    "Deleted!",
                                                    "Your profile has been deleted.",
                                                    "success"
                                                )
                                            }
                                        >
                                            <MdOutlineDelete className="me-1" /> Delete Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs Section */}
                        <div className="col-md-8">
                            <div className="card shadow-sm">
                                <div className="card-header">
                                    <ul className="nav nav-tabs card-header-tabs">
                                        <li className="nav-item">
                                            <button
                                                className={`nav-link ${activeTab === "overview" ? "active" : ""
                                                    }`}
                                                onClick={() => setActiveTab("overview")}
                                            >
                                                Overview
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className={`nav-link ${activeTab === "changeProfile" ? "active" : ""
                                                    }`}
                                                onClick={() => setActiveTab("changeProfile")}
                                            >
                                                Edit Profile
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    {activeTab === "overview" && (
                                        <div>
                                            <div className="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabIndex="0">
                                                <h5 className="mb-3">Profile</h5>
                                                <div className="row g-0">
                                                    <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                        <div className="p-2">First Name</div>
                                                    </div>
                                                    <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                        <div className="p-2">Ethan</div>
                                                    </div>
                                                    <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                        <div className="p-2">Last Name</div>
                                                    </div>
                                                    <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                        <div className="p-2">Leo</div>
                                                    </div>
                                                    <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                        <div className="p-2">Email</div>
                                                    </div>
                                                    <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                        <div className="p-2">abcd@gmail.com</div>
                                                    </div>
                                                    <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                        <div className="p-2">Phone</div>
                                                    </div>
                                                    <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                        <div className="p-2">8200606297</div>
                                                    </div>
                                                    <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                        <div className="p-2">Genader</div>
                                                    </div>
                                                    <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                        <div className="p-2">Male</div>
                                                    </div>
                                                    <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                        <div className="p-2">Date Of Birth</div>
                                                    </div>
                                                    <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                        <div className="p-2">18-10-2007</div>
                                                    </div>
                                                    <div className="col-5 col-md-3 bg-light border-bottom border-white border-3">
                                                        <div className="p-2">Address</div>
                                                    </div>
                                                    <div className="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                                                        <div className="p-2">Mountain View, California</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "changeProfile" && (
                                        <form onSubmit={formik.handleSubmit}>
                                            <div className="row">
                                                {Object.keys(formik.values).map((field) => (
                                                    <div className="col-md-6 mb-3" key={field}>
                                                        <label className="form-label">
                                                            {field.charAt(0).toUpperCase() + field.slice(1)}
                                                        </label>
                                                        <input
                                                            type={field === "dob" ? "date" : "text"}
                                                            name={field}
                                                            className="form-control"
                                                            {...formik.getFieldProps(field)}
                                                        />
                                                        {formik.touched[field] && formik.errors[field] && (
                                                            <div className="text-danger small">
                                                                {formik.errors[field]}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            <button type="submit" className="btn btn-color">
                                                Save Changes
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Edit Profile Modal */}
            {showEditModal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Change Profile Picture</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowEditModal(false)}
                                ></button>
                            </div>
                            <form onSubmit={modalFormik.handleSubmit}>
                                <div className="modal-body">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="form-control"
                                        onChange={(event) =>
                                            modalFormik.setFieldValue(
                                                "profilePic",
                                                event.target.files[0]
                                            )
                                        }
                                    />
                                    {modalFormik.touched.profilePic &&
                                        modalFormik.errors.profilePic && (
                                            <div className="text-danger small mt-1">
                                                {modalFormik.errors.profilePic}
                                            </div>
                                        )}
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => setShowEditModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
