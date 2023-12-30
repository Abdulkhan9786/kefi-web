import React from "react";
import tomato from "../../assets/tomato.png"; 
import mint from "../../assets/mint.png"; 
import chilli from "../../assets/redchilli.png";
import basil from "../../assets/basil.png"
import mint1 from "../../assets/mint1.png"; 


import "./home.css";

const Home = ()=>{
  const rectangleHeight = 350;
  const imageWidth = 250; 

  
 
    return(
      <section id='home'>
        <div className="home-container">
        <svg height={rectangleHeight} width="100%">
      <rect width="100%" height={rectangleHeight} fill="orange" />

      <image href={chilli} x="20%" y="20%" width={imageWidth} height={imageWidth} />
      <image href={mint} x="50%" y="50%" width = {150} height={imageWidth} />
      <image  href= {tomato} x="80%" y="50%" width={imageWidth} height={imageWidth} />
      <image  href= {basil} x="10%" y="10%" width={imageWidth} height={imageWidth} />
      <image  href= {mint1} x="60%" y="50%" width={imageWidth} height={imageWidth} />


      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="red" fontSize="150">
        Kefi's Kitchen 
      </text>
      
    </svg>  
        </div>


  <div className="ourStory">
    <text className="home-heading">  Our Story  </text>
    <p className="ourStory-para">
    At Poke Now, we believe fast food should be fresh food. From our premium ingredients to our exceptional service, eating healthy has never been easier—or more enjoyable! Poke is a traditional Hawaiian dish that typically consists of diced raw fish (such as tuna or salmon) marinated in soy sauce and other flavorful ingredients. It is often served over a bed of rice and topped with various toppings like seaweed, cucumber, avocado, and sesame seeds.
    </p>
  </div>
  
        </section>
    );
}

export default Home