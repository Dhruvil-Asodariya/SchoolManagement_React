import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const ChangePassword = () => {

    const navigate = useNavigate();

    // Yup validation schema
    const validationSchema = Yup.object({
        currentPassword: Yup.string().required("Please enter Current Password"),
        newPassword: Yup.string().matches(
            /^(?=[A-Z\d]{8}$)(?=.*[A-Z])(?=.*\d)[A-Z\d]*$/,
            "Password must be exactly 8 characters long, contain only one uppercase letter, and include only digits")
            .required("Please enter New password"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword')], "Passwords must match to the New password")
            .required("Please enter Confirm Password"),
    });

    // Formik form handling
    const formik = useFormik({
        initialValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: () => {
            Swal.fire({
                title: "Success!",
                text: "Password change successfully",
                icon: "success",
                timer: 2000,
                showConfirmButton: true,
                timerProgressBar: true,
            });

            setTimeout(() => {
                navigate("/change_password");
            }, 1000);
        },
    });

    return (
        <>
            <div className="main-form">
                <div className="sub-form">
                    <form className="row g-3" onSubmit={formik.handleSubmit}>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label"><b>Current Password</b></label>
                            <input type="text" name="currentPassword" className="form-control" id="inputEmail4" {...formik.getFieldProps("currentPassword")} />
                            {formik.touched.currentPassword && formik.errors.currentPassword && <span className="error">{formik.errors.currentPassword}</span>}
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputPassword4" className="form-label"><b>New Password</b></label>
                            <input type="text" name="newPassword" className="form-control" id="inputPassword4" {...formik.getFieldProps("newPassword")} />
                            {formik.touched.newPassword && formik.errors.newPassword && <span className="error">{formik.errors.newPassword}</span>}
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label"><b>Confirm Password</b></label>
                            <input type="text" name="confirmPassword" className="form-control" id="inputEmail4" {...formik.getFieldProps("confirmPassword")} />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && <span className="error">{formik.errors.confirmPassword}</span>}
                        </div>
                        <div className="col-12">
                            <button className="btn btn-color add-student-btn" type="submit"><span className="text">Change Password</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ChangePassword;