import React from "react";
import './bottom.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



 const BottomNavBar = () => {

    const iconStyle = {
        marginRight: '3px', // Adjust the margin to add space after the icon
      };
   
    
    return(
       <nav className="bottomNavbar">
        
        <div className="bottomNavbarMenu">
            <div className="sociallinks">
                <text className="heading"> Social Links </text>
                
                   <p ><a href="https://www.linkedin.com/in/kefi-s-kitchen-8704822a8/" className="linkstyle" >
                        <i class="fab fa-linkedin" aria-hidden="true" style={iconStyle}></i>
                         Linkedin
                    </a></p> 

                   <p > <a href="https://www.instagram.com/kefis_kitchen/" className="linkstyle">
                        <i class="fab fa-instagram" aria-hidden="true" style={iconStyle}></i>
                         Instagram
                    </a> </p> 
                    <p> <a href="https://whatsapp.com/channel/0029VaJ945I3WHTRv9UVhh2Q" className="linkstyle" >
                        <i class="fab fa-whatsapp" aria-hidden="true" style={iconStyle}></i>
                         WhatsApp Channel
                    </a> </p> 
               
            </div>
            <div className="quickLinks">
                <text className="heading"> Quicklinks  </text>
                
                   <p><a href="#top" className="linkstyle">
                        Home
                    </a></p> 

                   <p> <a href="#about" className="linkstyle">
                        About 
                    </a> </p> 

                   <p> <a href="#whyus" className="linkstyle">
                        Why choose us ?
                    </a> </p> 
               
            </div>

        </div>
<footer className="footer">
      Â© 2023 Kefi's Kitcen
</footer>

       </nav>
    )
 }

 export default BottomNavBar