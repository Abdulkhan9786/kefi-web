import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from "react-scroll";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


 const Navbar = () => {
    return(
       <nav className="navbar">
        <img src={logo} alt="Logo goes here" className="logo"/>
        <div className="navbarMenuItemList">
            
            <Link  className="navbarMenuItem" >Our Story </Link>
            <Link  className="navbarMenuItem" >About  </Link>
            <Link  className="navbarMenuItem" >why choose us ?  </Link>
            <Link  className="navbarMenuItem" > Contact </Link>
        </div>

        <div className="navbarMenuIcons"  > 
        <WhatsAppIcon/>

        </div>
       </nav>
    )
 }

 export default Navbar