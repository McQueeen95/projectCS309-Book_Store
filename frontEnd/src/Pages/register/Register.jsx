import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if(email.trim() === "") return toast.error("Email is required");
        if(username.trim() === "") return toast.error("Username is required");
        if(password.trim() === "") return toast.error("Password is required");
        if(confirmPassword.trim() === "") return toast.error("Password is required again");

        console.log( {email , password , confirmPassword , username} );
    };


    return (
        <div className="form-wrapper">
            <ToastContainer/>
            <h1 className="form-title">Create a new account</h1>
            <form onSubmit={formSubmitHandler} className="form">
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={username} onChange={e => setUsername(e.target.value)} type="username" placeholder="Username" />
                <input 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                type="password" 
                placeholder="Password" />
                
                <input 
                value={confirmPassword} 
                onChange={e => setConfirmPassword(e.target.value)} 
                type="password" 
                placeholder="Confirm Password" />

                
                <button className="form-btn">Register</button>
            </form>
            <div className="form-footer">
                Already have an account ?{" "}
                <Link to="/login" className="form-link" >Login</Link>
            </div>
        </div>
    )
}
export default Register;