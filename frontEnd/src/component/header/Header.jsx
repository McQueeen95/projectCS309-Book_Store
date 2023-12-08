import HEADERMIDDLE from './Header-middle';
import HEADERTOP from './Header-top';
import './Header.css'
import Navbar from './Navbar';
import slider from '../Slider/slider';
import { useState } from "react";

const Header=()=> {
    const[toggle,settoggle]=useState("false");
    return(
<header className="header">
   <HEADERTOP settoggle={settoggle} toggle={toggle}/>
    <HEADERMIDDLE/>
    <Navbar toggle={toggle} settoggle={settoggle}/>
    
</header>


    )
    
}
export default Header;