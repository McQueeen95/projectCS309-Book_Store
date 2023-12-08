 import { useState } from 'react';
import './book-slider.css'
import Rating from './Rating';
import  Modal  from '../../component/modal/Modal';
import { Link } from 'react-router-dom';
 const BookSlider =({data})=>{
    const[slideindex,setindex]=useState("0")
    const[openmodal,setopenmodal]=useState(false)    
    const [bookData, setBookData] = useState(null);
//handel click modal

const handleOpenModal = (item) => {
    setopenmodal(true);
    setBookData(item);
  }

//handel click
    const clickable=(direction)=>{
        if(direction==="left"){
            setindex(slideindex>0 ? slideindex - 1:6)
        }else{setindex(slideindex<6?  slideindex + 1:6);}
    }
    return(
         
        <div style={{textDecoration:"none"}} className='book-slider-container'>
            <i onClick={()=>clickable("left")} className="bi bi-chevron-left book-slider-arrow-left"></i>
           
            <div to="/book" style={{ transform:`translateX(${slideindex*-340}px)`}} className="book-slider-wrwpper">
                {data.map(item=><div key={item.id} className='book-slide-item'>
                   
                    <img src={`/books/${item.image}`} alt={item.title} className='book-slide-item-img'></img>
                    <p style={{textdecoration:"none"}} className="slide-item-title">{item.title}</p>
                    <Rating rating={item.rating} reveiws={item. reviews}/>

                    <div style={{textdecoration:"none"} }className="book-slide-item-price">${item.price}</div>
                    <div className="book-slide-icon-wrapper">
                    <i onClick={() => handleOpenModal(item)} className="bi bi-eye-fill"></i>
              <i  className="bi bi-cart-plus"></i>

                    </div>
                </div>)}
            </div>
            <i onClick={()=>clickable("right")} className="bi bi-chevron-right book-slider-arrow-right"></i>
            {openmodal && <Modal bookData={bookData} setOpenModal={setopenmodal} />}
        </div>
    )
}

export default BookSlider;