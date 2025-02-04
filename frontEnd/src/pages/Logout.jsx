import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user session (Token or Auth Data)
        sessionStorage.clear();
        // Show success toast message
        Swal.fire({
            title: "Success!",
            text: "Logged out successfully!",
            icon: "success",
            timer: 2000,
            showConfirmButton: true,
            timerProgressBar: true,
        });

        setTimeout(() => {
            navigate("/");
        }, 2000);
    });
};

export default Logout;