import React from 'react';
import { Link } from 'react-router-dom';


 const Navbar=()=> {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Authors</li>
        <li className="navbar-item">About Us</li>
        <li className="navbar-item">Contact Us</li>
        <li className="navbar-item">Register</li>
        <li className="navbar-item"><Link className='navbar-item' to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;