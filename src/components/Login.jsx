import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
    const { handleChange, handleSubmit, form } = useLogin();

    return (
        <div className="form__container">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="title">Log in</h2>
                <input className="input" 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input className="input" 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />
                <button className="button" type="submit">Log in</button>
            </form>
            <button className="button__account">
                <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>
                    Do not have an account? Sign up.
                </Link>
            </button>
        </div>
    );
};

export default Login;