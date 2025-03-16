import { useState } from "react";
import useAuthStore from "../store/store";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const { user, login } = useAuthStore();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            alert("Enter email and password!");
            return;
        }

        if (!user || user.email !== form.email || user.password !== form.password) {
            alert("Invalid email or password!");
            return;
        }

        login(user);
        alert("You have successfully logged in");
        navigate("/profile");
    };

    return { handleChange, handleSubmit, form }
};

export default useLogin;