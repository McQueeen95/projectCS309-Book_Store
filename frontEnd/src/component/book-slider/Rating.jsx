const Rating = ({ rating,reveiws }) => {
    return (
      <div className="rating">
        {rating >= 1 ? 
        <i className="bi bi-star-fill"></i>
        : rating >=0.5 ? 
        <i class="fa-solid fa-star-half-stroke"></i>
         :<i class="fa-regular fa-star"></i>
        }
        {  rating >= 2 ? 
        <i className="bi bi-star-fill"></i>
        : rating >=1.5 ? 
        <i class="fa-solid fa-star-half-stroke"></i>
         :<i class="fa-regular fa-star"></i>
        }
          {rating >= 3 ? 
        <i className="bi bi-star-fill"></i>
        : rating >=2.5 ? 
        <i class="fa-solid fa-star-half-stroke"></i>
         :<i class="fa-regular fa-star"></i>
        }
          {rating >= 4 ? 
        <i className="bi bi-star-fill"></i>
        : rating >=3.5 ? 
        <i class="fa-solid fa-star-half-stroke"></i>
         :<i class="fa-regular fa-star"></i>
        }
          {rating >= 5 ? 
        <i className="bi bi-star-fill"></i>
        : rating >=4.5 ? 
        <i class="fa-solid fa-star-half-stroke"></i>
         :<i class="fa-regular fa-star"></i>
        }
        
        <span>{rating}</span>
        <span>({reveiws}reviews)</span>
        
        
        
       
         
        
        
      </div>
    );
  };
export default Rating;