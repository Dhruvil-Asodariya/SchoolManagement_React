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
        class: Yup.string()
            .required("Please select Class"),
        subject: Yup.string()
            .required("Please select Subject"),
        materialFile: Yup.mixed().required("Please select an File"),
    });

    // Formik form handling
    const formik = useFormik({
        initialValues: {
            materialName: "",
            class: "",
            subject: "",
            materialFile: "",
        },
        validationSchema,
        onSubmit: () => {
            Swal.fire({
                title: "Success!",
                text: "New material add successfully",
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

                        {/* Material Name */}
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label"><b>Material Name</b></label>
                            <input type="text" name="materialName" className="form-control" id="inputEmail4" {...formik.getFieldProps("materialName")} />
                            {formik.touched.materialName && formik.errors.materialName && <span className="error">{formik.errors.materialName}</span>}
                        </div>

                        {/* Class */}
                        <div className="col-md-12">
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

                        {/* Class */}
                        <div className="col-md-12">
                            <label className="form-label"><b>Subject</b></label>
                            <select className="form-select" {...formik.getFieldProps("subject")}>
                                <option >Choose...</option>
                                <option value="React">React</option>
                                <option value=".Net">.Net</option>
                                <option value="Laravel">Laravel</option>
                                <option value="PHP">PHP</option>
                            </select>
                            {formik.touched.subject && formik.errors.subject && <span className="error">{formik.errors.subject}</span>}
                        </div>

                        {/* Material File */}
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