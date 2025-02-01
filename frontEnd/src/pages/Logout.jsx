import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    sessionStorage.removeItem("role");
    navigate("/");
}

export default Logout;