import { Link } from "react-router-dom";

const HEADERMIDDLE = () => {
return (
    <div className="header-middle">
        <Link to="/home" className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
        </Link>
        <div className="header-middle-search-bar">
        <input
            type="search"
            className="header-middle-search-input"
            placeholder="Search in book store..."
        ></input>
        <i className="bi bi-search"></i>
        </div>
        <Link to="/cart" className="header-middle-cart-wrapper">
        <i className="bi bi-cart2"></i>
        </Link>
    </div>
);
};
export default HEADERMIDDLE;
