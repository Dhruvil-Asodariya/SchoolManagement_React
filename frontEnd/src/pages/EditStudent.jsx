import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const navigate = useNavigate();

  // Yup validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, "First name should contain only alphabets")
      .required("Please enter First name"),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Last name should contain only alphabets")
      .required("Please enter Last name"),
    parentName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Parent name should contain only alphabets")
      .required("Please enter Parent name"),
    studentEmail: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter Email"),
    parentEmail: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter Email"),
    studentPhoneNo: Yup.string()
      .matches(/^\d+$/, "Only numbers are allowed") // Ensures only numbers
      .length(10, "Phone number must be 10 digits")// Adjust max as needed
      .required("Phone number is required"),
    parentPhoneNo: Yup.string()
      .matches(/^\d+$/, "Only numbers are allowed") // Ensures only numbers
      .length(10, "Phone number must be 10 digits")// Adjust max as needed
      .required("Phone number is required"),
    dob: Yup.string().required("Please enter Date of Birth"),
    gender: Yup.string().required("Please select Gender"),
    class: Yup.string().required("Please select Class"),
    address: Yup.string().required("Please enter Address"),
    image: Yup.mixed().required("Please select an Image"),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      parentName: "",
      studentEmail: "",
      parentEmail: "",
      studentPhoneNo: "",
      parentPhoneNo: "",
      dob: "",
      gender: "",
      class: "",
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
        navigate("/student");
      }, 2000);
    },
  });

  return (
    <div className="main-form">
      <div className="sub-form">
        <form className="row g-3" onSubmit={formik.handleSubmit}>
          {/* First Name */}
          <div className="col-md-6">
            <label className="form-label"><b>First Name</b></label>
            <input type="text" className="form-control" {...formik.getFieldProps("firstName")} />
            {formik.touched.firstName && formik.errors.firstName && <span className="error">{formik.errors.firstName}</span>}
          </div>

          {/* Last Name */}
          <div className="col-md-6">
            <label className="form-label"><b>Last Name</b></label>
            <input type="text" className="form-control" {...formik.getFieldProps("lastName")} />
            {formik.touched.lastName && formik.errors.lastName && <span className="error">{formik.errors.lastName}</span>}
          </div>

          {/* Parent Name */}
          <div className="col-md-6">
            <label className="form-label"><b>Parent Name</b></label>
            <input type="text" className="form-control" {...formik.getFieldProps("parentName")} />
            {formik.touched.parentName && formik.errors.parentName && <span className="error">{formik.errors.parentName}</span>}
          </div>

          {/* Student Email */}
          <div className="col-md-6">
            <label className="form-label"><b>Student Email</b></label>
            <input type="email" className="form-control" {...formik.getFieldProps("studentEmail")} />
            {formik.touched.studentEmail && formik.errors.studentEmail && <span className="error">{formik.errors.studentEmail}</span>}
          </div>

          {/* Parent Email */}
          <div className="col-md-12">
            <label className="form-label"><b>Parent Email</b></label>
            <input type="email" className="form-control" {...formik.getFieldProps("parentEmail")} />
            {formik.touched.parentEmail && formik.errors.parentEmail && <span className="error">{formik.errors.parentEmail}</span>}
          </div>

          {/* Student Number */}
          <div className="col-md-6">
            <label className="form-label"><b>Student No.</b></label>
            <input type="text" className="form-control" {...formik.getFieldProps("studentPhoneNo")} />
            {formik.touched.studentPhoneNo && formik.errors.studentPhoneNo && <span className="error">{formik.errors.studentPhoneNo}</span>}
          </div>

          {/* Parent Number */}
          <div className="col-md-6">
            <label className="form-label"><b>Phone No.</b></label>
            <input type="text" className="form-control" {...formik.getFieldProps("parentPhoneNo")} />
            {formik.touched.parentPhoneNo && formik.errors.parentPhoneNo && <span className="error">{formik.errors.parentPhoneNo}</span>}
          </div>

          {/* Date of Birth */}
          <div className="col-12">
            <label className="form-label"><b>Date Of Birth</b></label>
            <input type="date" className="form-control" {...formik.getFieldProps("dob")} />
            {formik.touched.dob && formik.errors.dob && <span className="error">{formik.errors.dob}</span>}
          </div>

          {/* Gender */}
          <div className="col-md-6">
            <label className="form-label"><b>Gender</b></label>
            <select className="form-select" {...formik.getFieldProps("gender")}>
              <option value="">Choose...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {formik.touched.gender && formik.errors.gender && <span className="error">{formik.errors.gender}</span>}
          </div>

          {/* Gender */}
          <div className="col-md-6">
            <label className="form-label"><b>Class</b></label>
            <select className="form-select" {...formik.getFieldProps("class")}>
              <option >Choose...</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Class 3">Class 3</option>
              <option value="Class 4">Class 4</option>
              <option value="Class 5">Class 5</option>
              <option value="Class 6">Class 6</option>
              <option value="Class 7">Class 7</option>
              <option value="Class 8">Class 8</option>
              <option value="Class 9">Class 9</option>
              <option value="Class 10">Class 10</option>
            </select>
            {formik.touched.class && formik.errors.class && <span className="error">{formik.errors.class}</span>}
          </div>

          {/* Address */}
          <div className="col-12">
            <label className="form-label"><b>Address</b></label>
            <input type="text" className="form-control" {...formik.getFieldProps("address")} />
            {formik.touched.address && formik.errors.address && <span className="error">{formik.errors.address}</span>}
          </div>

          {/* Student Image */}
          <div className="col-12">
            <label className="form-label"><b>Student Image</b></label>
            <input type="file" className="form-control"
              onChange={(event) => formik.setFieldValue("image", event.currentTarget.files[0])}
            />
            {formik.touched.image && formik.errors.image && <span className="error">{formik.errors.image}</span>}
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button className="btn btn-color add-student-btn" type="submit">
              <span className="text">Add Student</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
