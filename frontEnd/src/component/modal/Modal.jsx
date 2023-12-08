import Rating from "../book-slider/Rating";
import "./Modal.css";
import { Link } from "react-router-dom";

  const Modal=({ bookData, setOpenModal })=>{
  
    const {
      title,
      image,
      author,
      price,
      rating,
      reviews,
      inStock,
      id,
    } = bookData;
    
      return (
        <div onClick={() => setOpenModal(false)} className="modal-container">
          <div onClick={(e) => e.stopPropagation()} className="modal-content">
          <i
          onClick={() =>setOpenModal(false)}
          className="bi bi-x-circle-fill modal-icon"
        ></i>
            <div className="modal-content-img">
            <img src={`/books/${image}`} alt={title} />
            </div>
<div className="modal-content-info">
    <h5 className="modal-content-info-title">
        {title}
    </h5>
    <div className="modal-content-info-stock">
        <b>Status</b> {inStock?"in Stock":"not in stock"}
    </div> 
    </div>
    
    <Rating rating={rating} reviews={reviews} />
          <div className="modal-content-info-author">
            <b>Author: </b>
            {author}
          </div>
          <div className="modal-content-info-price">
            <b>Price: </b>${price}
          </div>
          <div className="modal-add-to-cart">
            <input
              className="modal-add-to-cart-input"
              type="number"
              min="1"
              max="100"
           
            />
            <button  className="modal-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
          <Link
            to={`/book/${id}`}
            className="modal-content-info-link"
            
          >
            See More Details
          </Link>
          </div>
         
                </div>
         
    )
}
export default Modal;