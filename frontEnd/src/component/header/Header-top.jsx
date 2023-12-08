// import AddBook from "../admin/AddBook";
import React from 'react';
import {Link} from 'react-router-dom';

const HEADERTOP=()=>{

    return(
 <div className="header-top">
<div className="header-top-menu">
    <i className="bi bi-list"
    ></i>
</div>
<div className="header-top-phone"> <i className='bi bi-telephone-fill'></i>123-456-789</div>
<div className="header-top-text">Welcome To Book Store</div>
<Link to='/login' className="header-top-login" >
    <i className="bi bi-person-fill" >Login</i>
    
</Link>
    </div>

    )
}
export default HEADERTOP;