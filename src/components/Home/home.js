import React from "react";
import tomato from "../../assets/tomato.png"; 
import pepper from "../../assets/yellowpepper.png"

import chilli from "../../assets/redchilli.png";
import basil from "../../assets/basil.png"
import mint1 from "../../assets/mint1.png"; 
import cilantro from "../../assets/cilantro.png";


import "./home.css";

const Home = ()=>{
  const rectangleHeight = 400;
   

    return(
      <section id='home'>
        <div className="home-container">
        <svg  className="rectangle" height={rectangleHeight} width="100%">
     

      <image  className= "veg-img" href={chilli} x="3%" y="50%" />
      <image  className= "veg-img" href= {tomato} x="70%" y="60%"  />
      <image  className= "veg-img" href= {basil} x="80%" y="50%"  />
      <image  className= "veg-img" href= {mint1} x="12%" y="36%" />
      <image  className= "veg-img" href= {pepper} x="89%" y="10%"  />
      <image  className= "veg-img" href= {cilantro} x="1%" y="10%"  />
      <image  className= "veg-img" href= {mint1} x="78%" y="1%"  />

      <text className= "text-img"x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill=" rgb(255, 30, 0)" fontSize="180">
        Kefi's Kitchen 
      </text>
      
      
    </svg>  
    
        </div>
        <div className="mission-text">
        " On a  mission to provide you with a healthy, flavorful, and homely 
  meal option, making your lunch choices both convenient and fulfilling, all within a budget-friendly range. " </div>

  
        </section>
    );
}

export default Home