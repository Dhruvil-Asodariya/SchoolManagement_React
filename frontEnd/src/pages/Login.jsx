// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/main.css";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [FormData, setFormData] = useState({
            username: '',
            password: '',
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...FormData, [name]: value
            })
        }
    
        
    
        const handleSubmit = (e) => {
            e.preventDefault();
            if(FormData.username == "admin123" && FormData.password == "1234"){
                sessionStorage.setItem("role", "Admin");
                navigate("/dashboard");
            }else if(FormData.username == "student123" && FormData.password == "1234"){
                sessionStorage.setItem("role", "Student");
                navigate("/dashboard");
            }else if(FormData.username == "teacher123" && FormData.password == "1234"){
                sessionStorage.setItem("role", "Teacher");
                navigate("/dashboard");
            }else if(FormData.username == "principal123" && FormData.password == "1234"){
                sessionStorage.setItem("role", "Principal");
                navigate("/dashboard");
            }else if(FormData.username == "parent123" && FormData.password == "1234"){
                sessionStorage.setItem("role", "Parent");
                navigate("/dashboard");
            }
        };

    return (
        // < !--Login 4 - Bootstrap Brain Component-- >
        <section className="p-3 p-md-4 p-xl-5">
            <div className="container">
                <div className="card border-light-subtle shadow-sm">
                    <div className="row g-0">
                        <div className="col-12 col-md-6">
                            <img className="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src="21421.jpg" alt="" />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-5">
                                            <h3>Log in</h3>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row gy-3 gy-md-4 overflow-hidden">
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">Username <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" name="username" onChange={handleChange} />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" name="password" onChange={handleChange} />
                                        </div>
                                        <div>
                                             <label className="form-check-label text-secondary" htmlFor="remember_me">
                                                <input type="checkbox" className="form-check-input" /> Remember me
                                             </label>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn bsb-btn-xl btn-color" type="submit">Login</button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-check-label text-secondary" htmlFor="remember_me">
                                                <Link to={"#"} className="forgot-text">Forgot Password</Link>
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
