
import { Link } from "react-router-dom";

const HEADERTOP=({settoggle,toggle})=>{

// import AddBook from "../admin/AddBook";
return(

 <div className="header-top">
<div onClick={()=>settoggle(pre=>!pre)} className="header-top-menu">
    {toggle?
     <i className="bi bi-x-lg"/>:
    <i className="bi bi-list"
    ></i>}
   
</div>
<div className="header-top-phone"> <i className='bi bi-telephone-fill'></i>123-456-789</div>
<div className="header-top-text">Welcome To Book Store</div>
<Link to="/login" className="header-top-login" >
    <i className="bi bi-person-fill" >Login</i>

</Link>

    
</div>

    );


    }


export default HEADERTOP;