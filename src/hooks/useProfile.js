import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/store";

function useProfile() {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return { handleLogout, user }
};

export default useProfile;