import { useState } from "react";
import { Link } from "react-router-dom";
import HomePage from "../../Pages/home/HomePage";
import Authors from "../../Pages/authors/Authors";
const Navbar=({toggle ,settoggle})=> {
  return(
  
    <nav style={{left:toggle&&"0"}} class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <ul class="navbar-nav">
        <Link to="/home" onClick={()=>settoggle(false)} class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </Link>
        <Link to="/authors" onClick={()=>settoggle(false)} class="nav-item">
          <a class="nav-link" href="#">Author</a>
        </Link>
        <Link to="/about" class="nav-item">
          <a  onClick={()=>settoggle(false)}class="nav-link" href="#">About Us</a>
        </Link>
        <Link to="/contactus" onClick={()=>settoggle(false)}class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </Link>
        <Link to="/register" onClick={()=>settoggle(false)}class="nav-item">
          <a class="nav-link" href="#">Register</a>
          <Link to="/login" onClick={()=>settoggle(false)}class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </Link>
        </Link>
      </ul>
    </div>
  </nav>
);

}
//  const Navbar=()=> {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-list">
//         <li className="navbar-item">Home</li>
//         <li className="navbar-item">Authors</li>
//         <li className="navbar-item">About Us</li>
//         <li className="navbar-item">Contact Us</li>
//         <li className="navbar-item">Register</li>

//       </ul>
//     </nav>
//   );
// }

export default Navbar;