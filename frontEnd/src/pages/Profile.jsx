import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    // Yup validation schema
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .matches(/^[A-Za-z]+$/, "First name should contain only alphabets")
            .required("Please enter First name"),
        lastName: Yup.string()
            .matches(/^[A-Za-z]+$/, "Last name should contain only alphabets")
            .required("Please enter Last name"),
        phoneNo: Yup.string()
            .matches(/^\d+$/, "Only numbers are allowed") // Ensures only numbers
            .length(10, "Phone number must be 10 digits")// Adjust max as needed
            .required("Phone number is required"),
        dob: Yup.string().required("Please enter Date of Birth"),
        gender: Yup.string().required("Please select Gender"),
        address: Yup.string().required("Please enter Address"),
    });

    // Formik form handling
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNo: "",
            dob: "",
            gender: "",
            address: "",
        },
        validationSchema,
        onSubmit: () => {
            Swal.fire({
                title: "Success!",
                text: "Profile updated successfully",
                icon: "success",
                timer: 2000,
                showConfirmButton: true,
                timerProgressBar: true,
            });

            setTimeout(() => {
                navigate("/admin_profile");
            }, 1000);
        },
    });

    const imgnavigate = useNavigate();

    // Yup validation schema
    const imgvalidationSchema = Yup.object({
        image: Yup.mixed().required("Please select an Image"),
    });

    // Formik form handling
    const imgformik = useFormik({
        initialValues: {
            image: null,
        },
        imgvalidationSchema,
        onSubmit: () => {
            Swal.fire({
                title: "Success!",
                text: "Profile change successfully",
                icon: "success",
                timer: 2000,
                showConfirmButton: true,
                timerProgressBar: true,
            });

            setTimeout(() => {
                imgnavigate("/admin_profile");
            }, 1000);
        },
    });

    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Change Profile</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={imgformik.handleSubmit}>
                            <div className="modal-body">
                                <div className="col-12 col-md-12">
                                    <label htmlFor="inputFirstName" className="form-label"><b>Select Photo</b></label>
                                    <input type="file" name="image" className="form-control" onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])} />
                                </div>
                                {formik.touched.image && formik.errors.image && <span className="error">{formik.errors.image}</span>}
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-color">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Profile 1 - Bootstrap Brain Component --> */}
            <section className="py-xl-8">
                <div className="">
                    <div className="row gy-4 gy-lg-0">
                        <div className="col-12 col-lg-4 col-xl-3">
                            <div className="row gy-4">
                                <div className="col-12">
                                    <div className="card widget-card border-light shadow-sm">
                                        <div className="card-header">Welcome, Ethan Leo</div>
                                        <div className="card-body">
                                            <div className="text-center mb-3">
                                                <img src="21421.jpg" className="img-fluid main-profile-img" alt="Luna John" />
                                            </div>
                                            <h5 className="text-center mb-1">Ethan Leo</h5>
                                            <p className="text-center text-secondary mb-4">Project Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 col-xl-9">
                            <div className="card widget-card border-light shadow-sm">
                                <div className="card-body p-4">
                                    <ul className="nav nav-tabs" id="profileTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview-tab-pane" type="button" role="tab" aria-controls="overview-tab-pane" aria-selected="true"><span className="profile-text">Overview</span></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><span className="profile-text">Profile</span></button>
                                        </li>
                                    </ul>
                                    <div className="tab-content pt-4" id="profileTabContent">
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
                                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                                            <div className="col-12">
                                                <div className="row gy-2">
                                                    <label className="col-12 form-label m-0">Profile Image</label>
                                                    <div className="col-12">
                                                        <img src="21421.jpg" className="img-fluid profile-img rounded" alt="Luna John" />
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="d-inline-block btn bg-primary link-light lh-1 p-2 m-2 rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                            <FaRegEdit />
                                                        </button>
                                                        <button className="d-inline-block btn bg-danger link-light lh-1 p-2 rounded">
                                                            <MdOutlineDelete />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div><br />
                                            <form className="row gy-3 gy-xxl-4" onSubmit={formik.handleSubmit}>
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="inputFirstName" className="form-label"><b>First Name</b></label>
                                                    <input type="text" name="firstName" className="form-control" {...formik.getFieldProps("firstName")} />
                                                    {formik.touched.firstName && formik.errors.firstName && <span className="error">{formik.errors.firstName}</span>}
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="inputLastName" className="form-label"><b>Last Name</b></label>
                                                    <input type="text" name="lastName" className="form-control" {...formik.getFieldProps("lastName")} />
                                                    {formik.touched.lastName && formik.errors.lastName && <span className="error">{formik.errors.lastName}</span>}
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="inputEducation" className="form-label"><b>Email</b></label>
                                                    <input type="email" name="email" className="form-control" value="abcd@gmail.com" readOnly />
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="inputSkills" className="form-label"><b>Phone No.</b></label>
                                                    <input type="text" name="phoneNo" className="form-control" {...formik.getFieldProps("phoneNo")} />
                                                    {formik.touched.phoneNo && formik.errors.phoneNo && <span className="error">{formik.errors.phoneNo}</span>}
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="inputCountry" className="form-label"><b>Gender</b></label>
                                                    <select className="form-select" name="gender" {...formik.getFieldProps("gender")}>
                                                        <option>Choose...</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    {formik.touched.gender && formik.errors.gender && <span className="error">{formik.errors.gender}</span>}
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <label htmlFor="inputCompany" className="form-label"><b>Date Of Birth</b></label>
                                                    <input type="date" name="dob" className="form-control" {...formik.getFieldProps("dob")} />
                                                    {formik.touched.dob && formik.errors.dob && <span className="error">{formik.errors.dob}</span>}
                                                </div>
                                                <div className="col-12 col-md-12">
                                                    <label htmlFor="inputAddress" className="form-label"><b>Address</b></label>
                                                    <input type="text" name="address" className="form-control" {...formik.getFieldProps("address")} />
                                                    {formik.touched.address && formik.errors.address && <span className="error">{formik.errors.address}</span>}
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-color">Save Changes</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
}

export default Profile;