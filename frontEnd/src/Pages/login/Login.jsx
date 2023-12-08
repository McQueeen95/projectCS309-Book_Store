import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if(email.trim() === "") return toast.error("Email is required");
        if(password.trim() === "") return toast.error("Password is required");

        console.log( {email , password } );
    };

    return (
        <div className="form-wrapper">
            <ToastContainer/>
            <h1 className="form-title">Login to your account</h1>
            <form onSubmit={formSubmitHandler} className="form">
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button className="form-btn">Login</button>
            </form>
            <div className="form-footer">
                Don't have an account ?{" "}
                <Link to="/register" className="form-link" >Register</Link>
            </div>
        </div>
    )
}
export default Login;