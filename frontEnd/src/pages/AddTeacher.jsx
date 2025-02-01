import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {

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
    dob: Yup.string().required("Please enter Date of Birth"),
    gender: Yup.string().required("Please select Gender"),
    qualification: Yup.string().required("Please select Qualification"),
    subject: Yup.string().required("Please select Subject"),
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
      dob: "",
      gender: "",
      qualification: "",
      subject: "",
      address: "",
      image: null,
    },
    validationSchema,
    onSubmit: () => {
      Swal.fire({
        title: "Success!",
        text: "New teacher successfully added",
        icon: "success",
        timer: 2000,
        showConfirmButton: true,
        timerProgressBar: true,
      });

      setTimeout(() => {
        navigate("/teacher");
      }, 1000);
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
                        <div className="col-6">
                            <label htmlFor="inputAddress" className="form-label"><b>Date Of Birth</b></label>
                            <input type="date" name="dob" className="form-control" {...formik.getFieldProps("dob")} />
                            {formik.touched.dob && formik.errors.dob && <span className="error">{formik.errors.dob}</span>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label"><b>Address</b></label>
                            <input type="text" name="address" className="form-control" {...formik.getFieldProps("address")} />
                            {formik.touched.address && formik.errors.address && <span className="error">{formik.errors.address}</span>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label"><b>Gender</b></label>
                            <select name="gender" className="form-select" {...formik.getFieldProps("gender")}>
                                <option >Choose...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {formik.touched.gender && formik.errors.gender && <span className="error">{formik.errors.gender}</span>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label"><b>Qualification</b></label>
                            <select name="qualification" className="form-select" {...formik.getFieldProps("qualification")}>
                                <option >Choose...</option>
                                <option value="B-Tech">B-Tech</option>
                                <option value="WordPress">WordPress</option>
                                <option value=".Net">.Net</option>
                            </select>
                            {formik.touched.qualification && formik.errors.qualification && <span className="error">{formik.errors.qualification}</span>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label"><b>Subject</b></label>
                            <input type="checkbox" name="subject" className="form-check-input subject" {...formik.getFieldProps("subject")} /><span className="subject-text">React Js</span>
                            <input type="checkbox" name="subject" className="form-check-input subject" {...formik.getFieldProps("subject")} /><span className="subject-text">ASPX .Net</span>
                            <input type="checkbox" name="subject" className="form-check-input subject" {...formik.getFieldProps("subject")} /><span className="subject-text">WordPress</span>
                            <input type="checkbox" name="subject" className="form-check-input subject" {...formik.getFieldProps("subject")} /><span className="subject-text">Laravel</span>
                            <input type="checkbox" name="subject" className="form-check-input subject" {...formik.getFieldProps("subject")} /><span className="subject-text">PHP</span><br />
                            {formik.touched.subject && formik.errors.subject && <span className="error">{formik.errors.subject}</span>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label"><b>Teacher Image</b></label>
                            <input type="file" name="image" className="form-control" onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])} />
                            {formik.touched.image && formik.errors.image && <span className="error">{formik.errors.image}</span>}
                        </div>
                        <div className="col-12">
                            <button className="btn btn-color add-student-btn" type="submit"><span className="text">Add Teacher</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddTeacher;