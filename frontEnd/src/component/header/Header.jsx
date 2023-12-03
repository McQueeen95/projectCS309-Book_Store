import HEADERMIDDLE from './Header-middle';
import HEADERTOP from './Header-top';
import './Header.css'
import Navbar from './Navbar';
const Header=()=> {
    return(
<header className="header">
   <HEADERTOP/>
    <HEADERMIDDLE/>
    <Navbar/>
</header>


    )
    
}
export default Header;