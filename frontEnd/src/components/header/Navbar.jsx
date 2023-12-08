import { Link } from "react-router-dom";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav style={{ left: toggle && "0" }} className="navbar">
      <ul className="navbar-links">
        <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
          Home
        </Link>
        <Link
          to="/authors"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Authors
        </Link>
        <Link
          to="/about"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          About Us
        </Link>
        <Link
          to="/profile"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Profile
        </Link>
        <Link
          to="/register"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Register
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
