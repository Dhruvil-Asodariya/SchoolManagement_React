// import { LuPlus } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";

const Subject = () => {

    const navigate = useNavigate();

    // Yup validation schema
    const validationSchema = Yup.object({
        subjectName: Yup.string().required("Please enter Subject name"),
        description: Yup.string().required("Please enter Description"),
    });

    // Formik form handling
    const formik = useFormik({
        initialValues: {
            subjectName: "",
            description: "",
        },
        validationSchema,
        onSubmit: () => {
            Swal.fire({
                title: "Success!",
                text: "New subject successfully added",
                icon: "success",
                timer: 2000,
                showConfirmButton: true,
                timerProgressBar: true,
            });

            setTimeout(() => {
                navigate("/subject");
            }, 1000);
        },
    });

    return (
        <>
            <div className="main-div">
                <div className="inline first-div">
                    <div className="sub-first-div">
                        <label htmlFor="inputEmail4" className="first-div-title"><b>Add Subject</b></label><hr />
                        <form className="row g-3" onSubmit={formik.handleSubmit}>
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="form-label"><b>Subject Name</b></label>
                                <input type="text" name="subjectName" className="form-control" {...formik.getFieldProps("subjectName")} />
                                {formik.touched.subjectName && formik.errors.subjectName && <span className="error">{formik.errors.subjectName}</span>}
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="form-label"><b>Subject description</b></label>
                                <input type="text" name="description" className="form-control" {...formik.getFieldProps("description")} />
                                {formik.touched.description && formik.errors.description && <span className="error">{formik.errors.description}</span>}
                            </div>
                            <div className="col-12">
                                <button className="btn btn-color add-student-btn" type="submit"><span className="text">Add Subject</span></button>
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
                                    <th scope="col">Subject Name</th>
                                    <th scope="col">Subject description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <td scope="row">React</td>
                                    <td scope="row">This is Subject</td>
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
}

export default Subject;