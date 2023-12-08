import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-text">
          follow us on social media
        </div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i style={{ color: "red" }} className="bi bi-instagram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "#2980b9" }} className="bi bi-facebook"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "red" }} className="bi bi-youtube"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "skyblue" }} className="bi bi-telegram"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull Links</h3>
          <ul className="footer-links">
            <Link to="/home" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/authors" className="footer-link">Author</Link>
            <Link to="/contactus" className="footer-link">Contact Us</Link>
            <Link to="/register" className="footer-link">Register</Link>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-addres-wrapper">
            <div className="footer-addres-item">
              <i className="bi bi-geo-alt-fill"></i>
              Egypt -Cairo -cairo University St.
            </div>
            <div className="footer-addres-item">
              <i className="bi bi-telephone-fill"></i>
              01258415825
            </div>
            <div className="footer-addres-item">
              <i className="bi bi-envelope-fill"></i>
              info@gmail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit distinctio, nulla facilis numquam eaque provident
            ullam consectetur itaque tempora quos culpa, assumenda expedita ad
            mollitia voluptate consequuntur libero id quidem.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit distinctio, nulla facilis numquam eaque provident
           
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
