import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo_contact.jpg';
import { Link } from 'react-scroll';
import contact from '../../assets/contact1.jpg';
import menu from '../../assets/menu.jpg';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Education</Link>
        <Link activeClass='active' to='certification' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Certification</Link>
        {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link> */}
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contact} alt='' className='desktopMenuImg' />Contact Me
      </button>
      <img src={menu} alt='menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className={`navMenu ${showMenu ? 'showMenu' : ''}`}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listitem' onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-50} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Education</Link>
        <Link activeClass='active' to='certification' spy={true} smooth={true} offset={-50} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Certification</Link>
        {/* <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Client</Link> */}
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
