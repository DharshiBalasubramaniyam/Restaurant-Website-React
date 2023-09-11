import { useState } from 'react';
import './Navbar.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import {GiOlive} from 'react-icons/gi';

function NavBar() {

    let [isNavOpen, setIsNavOpen] = useState(false);

    function controlNav() {
        setIsNavOpen(!isNavOpen);
    }
    return (
        <header>
            <nav>
                <h1><GiOlive/>Olive Branch</h1>
                <ul className = {(isNavOpen) ? 'nav-open' : 'nav-close' }>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Products</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div className='icons'>
                    {(isNavOpen) ? 
                        <AiOutlineClose className='menu-icon'  size='25px' onClick={controlNav}/> : 
                        <AiOutlineMenu className='menu-icon'  size='25px' onClick={controlNav}/>
                    }
                </div>
                    
            </nav>
        </header>
    );
}
export default NavBar;