import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";


const AddHoliday = () => {

    const navigate = useNavigate();

    // Yup validation schema
    const validationSchema = Yup.object({
        holidayName: Yup.string()
            .required("Please enter Holiday name"),
        date: Yup.string()
            .required("Please enter Date"),
    });

    // Formik form handling
    const formik = useFormik({
        initialValues: {
            holidayName: "",
            date: "",
        },
        validationSchema,
        onSubmit: () => {
            Swal.fire({
                title: "Success!",
                text: "New holiday successfully added",
                icon: "success",
                timer: 2000,
                showConfirmButton: true,
                timerProgressBar: true,
            });

            setTimeout(() => {
                navigate("/holiday");
            }, 2000);
        },
    });

    return (
        <>
            <div className="main-form">
                <div className="sub-form">
                    <label htmlFor="inputEmail4" className="first-div-title"><b>Add Holiday</b></label><hr />
                    <form className="row g-3" onSubmit={formik.handleSubmit}>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label"><b>Holiday Name</b></label>
                            <input type="text" name="holidayName" className="form-control" {...formik.getFieldProps("holidayName")} />
                            {formik.touched.holidayName && formik.errors.holidayName && <span className="error">{formik.errors.holidayName}</span>}
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputPassword4" className="form-label"><b>Date</b></label>
                            <input type="date" name="date" className="form-control" {...formik.getFieldProps("date")} />
                            {formik.touched.date && formik.errors.date && <span className="error">{formik.errors.date}</span>}
                        </div>
                        <div className="col-12">
                            <button className="btn btn-color add-student-btn" type="submit"><span className="text">Add Holiday</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddHoliday;