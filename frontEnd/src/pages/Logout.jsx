import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user session (Token or Auth Data)
        localStorage.clear();

        // Show success toast message
        toast.success("Logged out successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        });

        // Redirect to login page after 2 seconds
        setTimeout(() => {
            navigate("/");
        }, 2000);
    }, [navigate]);

    return (
        <div className="position-fixed top-0 start-0 end-0 z-50 mt-3 d-flex justify-content-center align-items-center">
            <div className="p-4 bg-primary text-white shadow-lg rounded text-center w-25 mx-auto">
                <div className="d-flex justify-content-center mb-3">
                    <div className="d-flex justify-content-center align-items-center bg-success bg-opacity-25 text-success rounded-circle" style={{ width: "50px", height: "50px" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="bi bi-check-lg"
                            viewBox="0 0 16 16"
                        >
                            <path d="M13.485 1.929a.75.75 0 0 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06L6 8.439l7.485-7.51z" />
                        </svg>
                    </div>
                </div>
                <h2 className="h4">Logging out...</h2>
                <p>You will be redirected shortly.</p>
            </div>
        </div>
    );
};

export default Logout;