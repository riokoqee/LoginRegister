import { useState } from "react";
import useAuthStore from "../store/store";
import { useNavigate } from "react-router-dom";

function useRegister() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const { register, login } = useAuthStore();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); 

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.name || !form.email || !form.password) {
            alert("Fill in all fields");
            return;
        }

        if (!emailRegex.test(form.email)) {
            alert("Please enter a valid email");
            return;
        }

        register(form);
        login(form);
        alert("Successful registration! Now log in to your account.");
        navigate("/login");
    };

    return { form, handleChange, handleSubmit, showPassword, setShowPassword };
}

export default useRegister;
