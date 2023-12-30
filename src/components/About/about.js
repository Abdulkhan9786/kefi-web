import React from "react";
import aboutImage from "../../assets/image3.png"
import "./about.css";

const About = ()=>{
  
    return(
      <section id='about'>
      

<div className="about-container">
  <div className="about-text">
    <text className="about-heading">  About  </text>
    <p className="ourStory-para">
    At Poke Now, we believe fast food should be fresh food. From our premium ingredients to our exceptional service, eating healthy has never been easier—or more enjoyable! 
    </p>
  </div>

  <img  className= "aboutImg" src={aboutImage} alt="food thali"></img>
  </div>
  
        </section>
    );
}
export default About