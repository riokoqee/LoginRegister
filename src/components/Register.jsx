import useRegister from "../hooks/useRegister";
import { Link } from "react-router-dom";

function Register() {
    const { form, handleChange, handleSubmit, showPassword, setShowPassword } = useRegister();

    return (
        <div className="form__container">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="title">Registration</h2>
                <input className="input" 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    />
                <input className="input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    />
                <input className="input" 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    />
                <label>
                    <input className="input" type="checkbox" onChange={() => setShowPassword(!showPassword)} />
                    Show password
                </label>
                <button className="button" type="submit">Register</button>
            </form>
            <button className="button__account">
                <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                    Already have an account? Sign in.
                </Link>
            </button>
        </div>
    );
}

export default Register;