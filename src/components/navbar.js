import React, { useState } from 'react'
import './navbar.css'
import logo from '../images/logoname.png'
import {Link} from 'react-scroll';
import contactimg from '../images/bubble-chat.png'
import bMenu from '../images/burgMenu.png'

const Navbar =() => {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo'/>
            <div className='Menu'>
                <Link className='listItem' activeClass='active' to='intro' spy={true} smooth={true} offset={-100}  duration={500}>Home</Link>
                <Link className='listItem' activeClass='active' to='skills' spy={true} smooth={true} offset={-100}  duration={500}>About</Link>
                <Link className='listItem' activeClass='active' to='works' spy={true} smooth={true} offset={-100}  duration={500}>Projects</Link>
            </div>
            <button className='Menubtn' onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactimg} alt='' className='Menuimg'/> Contact Me 
            </button>

            <img src={bMenu} alt='Logo' className='burgMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                <Link className='navlistItem' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} onClick={()=>setShowMenu(false)} duration={500}>Home</Link>
                <Link className='navlistItem' activeClass='active' to='skills' spy={true} smooth={true} offset={-100} onClick={()=>setShowMenu(false)} duration={500}>About</Link>
                <Link className='navlistItem' activeClass='active' to='works' spy={true} smooth={true} offset={-100} onClick={()=>setShowMenu(false)} duration={500}>Projects</Link>
                <Link className='navlistItem' activeClass='active' to='contact' spy={true} smooth={true} offset={-100} onClick={()=>setShowMenu(false)} duration={500}>Contact</Link>
            </div>
        </nav>
    )
}
export default Navbar