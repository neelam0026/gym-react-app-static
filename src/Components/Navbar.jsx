import React, {useState} from 'react';
import '../index';
import logo from '../Img/logo.png';
import {Link} from 'react-scroll';


function Navbar() {
 const [nav, setNav] = useState(false);

 const changeBackground = () =>{    
        if(window.scrollY >= 50){
             setNav(true)
    }   else{
             setNav(false)
    }
 }
 window.addEventListener('scroll', changeBackground )

  return (
    <nav className={nav ? 'nav active': 'nav'}>
        <Link to='main' className='logo' smooth={true} duration={2000}>
            <img src={logo} alt =''/>
        </Link>
        <input className='menu-btn' type="checkbox" id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link className='link-styles' to='main' smooth={true} duration={1000} />Header</li>
            <li><Link className='link-styles' to='about' smooth={true} duration={1000} />About</li>
            <li><Link className='link-styles'  to='presentaion' smooth={true} duration={1000} />Offer</li>
            <li><Link className='link-styles'  to='contact' smooth={true} duration={1000} />Contact</li>
            <li><Link className='link-styles'  to='features' smooth={true} duration={1000} />Feature</li>
        </ul>
    </nav>
  )
}

export default Navbar