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
     

      <image  className= "veg-img" href={chilli} x="10%" y="50%"  width={200} height={200} />
      <image  className= "veg-img" href= {tomato} x="70%" y="50%" width={250} height={250} />
      <image  className= "veg-img" href= {basil} x="80%" y="20%" width={250} height={250} />
      <image  className= "veg-img" href= {mint1} x="12%" y="36%" width={100} height={100} />
      <image  className= "veg-img" href= {pepper} x="89%" y="10%" width={200} height={200} />
      <image  className= "veg-img" href= {cilantro} x="19%" y="10%" width={200} height={200} />
      <image  className= "veg-img" href= {mint1} x="63%" y="36%" width={100} height={100} />

      <text className= "text-img"x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill=" rgb(255, 30, 0)" fontSize="180">
        Kefi's Kitchen 
      </text>
      
      
    </svg>  
        </div>
  
        </section>
    );
}

export default Home