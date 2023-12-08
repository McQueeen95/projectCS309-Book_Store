import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if(firstName.trim() === "") return toast.error("First Name is required");
        if(lastName.trim() === "") return toast.error("Last Name is required");
        if(email.trim() === "") return toast.error("Email is required");
        if(password.trim() === "") return toast.error("Password is required");
        if(confirmPassword.trim() === "") return toast.error("Confirming Password is required again");

        console.log( {firstName , lastName , email , password , confirmPassword } );
    };


    return (
        <div className="form-wrapper">
            <ToastContainer/>
            <h1 className="form-title">Create a new account</h1>
            <form onSubmit={formSubmitHandler} className="form">
                <input value={firstName} onChange={e => setFirstname(e.target.value)} type="firstName" placeholder="First name" />
                <input value={lastName} onChange={e => setLastname(e.target.value)} type="lastname" placeholder="Last name" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                
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