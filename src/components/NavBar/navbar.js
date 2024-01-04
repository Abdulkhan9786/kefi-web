
import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';



 const Navbar = () => {
   const[showMenu,setShowMenu] = useState(false)
   
    return(
       <nav className="navbar">
        <img src={logo} alt="Logo goes here" className="logo"/>
        <div className="navbarMenuItemList">
            
            <Link  activeClass="active" to='ourStory' spy={true} smooth={true} offset={-100} duration={500}className="navbarMenuItem" >Our Story </Link>
            <Link  activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500}className="navbarMenuItem" >About  </Link>
            <Link  activeClass="active" to='whyus' spy={true} smooth={true} offset={-100} duration={500}className="navbarMenuItem" >why choose us ?  </Link>
            <Link  activeClass="active" to='order' spy={true} smooth={true} offset={-100} duration={500}className="navbarMenuItem" > Order Now </Link>

        </div>
        <MenuIcon  className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display : showMenu? 'flex': 'none'}}>
            <Link activeClass="active" to='ourStory' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> Our Story</Link>
             <Link activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> About </Link>
             <Link activeClass="active" to='whyus' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> Why choose us ?</Link> 
             <Link activeClass="active" to='order' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}> Order Now</Link>
            </div>


      

        
       </nav>
    )
 }

 export default Navbar