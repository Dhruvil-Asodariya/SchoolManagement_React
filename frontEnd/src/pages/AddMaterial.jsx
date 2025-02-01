import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddMaterial = () => {

    const navigate = useNavigate();

    // Yup validation schema
    const validationSchema = Yup.object({
        materialName: Yup.string()
            .matches(/^[A-Za-z]/, "Material name contain should not properly")
            .required("Please enter Material name"),
        materialFile: Yup.mixed().required("Please select an File"),
    });

    // Formik form handling
    const formik = useFormik({
        initialValues: {
            materialName: "",
            materialFile: "",
        },
        validationSchema,
        onSubmit: () => {
            Swal.fire({
                title: "Success!",
                text: "new material add successfully",
                icon: "success",
                timer: 2000,
                showConfirmButton: true,
                timerProgressBar: true,
            });

            setTimeout(() => {
                navigate("/material");
            }, 2000);
        },
    });

    return (
        <>
            <div className="main-form">
                <div className="sub-form">
                    <form className="row g-3" onSubmit={formik.handleSubmit}>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label"><b>Material Name</b></label>
                            <input type="text" name="materialName" className="form-control" id="inputEmail4" {...formik.getFieldProps("materialName")} />
                            {formik.touched.materialName && formik.errors.materialName && <span className="error">{formik.errors.materialName}</span>}
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputPassword4" className="form-label"><b>Material File</b></label>
                            <input type="file" name="materialFile" className="form-control" id="inputPassword4" {...formik.getFieldProps("materialFile")} />
                            {formik.touched.materialFile && formik.errors.materialFile && <span className="error">{formik.errors.materialFile}</span>}
                        </div>
                        <div className="col-12">
                            <button className="btn btn-color add-student-btn" type="submit"><span className="text">Add Material</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddMaterial;