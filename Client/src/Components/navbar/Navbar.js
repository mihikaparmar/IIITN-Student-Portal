import React, {useState} from "react";
import {Button} from './button'
import {Link} from 'react-router-dom'
import './navbar.css'
import Dropdown from './dropdown'

function Navbar(){
    const [click,setclick] =useState(false)
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setclick(!click)
    const closeMobileMenu = () => setclick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

    return(
    <>
    <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         IIITN
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
              Events
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/resources'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Resources <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/mentor'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Mentorship
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/opportunity'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Opportunities
            </Link>
          </li>
          <li>
            <Link
              to='/signin'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>
        <Link to='/signin'>
      <button className='bttn'>Login</button>
    </Link>
      </nav>
    </>
)
}
export default Navbar;