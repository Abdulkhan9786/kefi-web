import React from "react";
import aboutImage from "../../assets/image3.png"
import "./about.css";


const About = ()=>{
  
    return(
      <section id='about'>
      
      <div className="about-heading"> About </div>
      <div className="about-container">
       <p className="about-para">
          We are a small-scale startup committed to definitively answering the daily query, 
        <text className="hindi-about">"Aj lunch mai kya khau. Jo healthy bhi ho, tasty bhi aur ghar jaise bhi?"</text> 
            We specialize in daily delivery of meticulously packed home-cooked thali meals to your office, 
            packaged in eco-friendly, biodegradable lunchboxes resembling traditional thalis. Our offerings
            comprise dal, rice, sabji, salad, and chapati, crafted to suit your taste buds, delivering 
            a delightful dining experience at an affordable price. Every dish is prepared with hygiene in mind,
              aiming to replicate the nutrition and warmth of a home-cooked meal.
          </p>

<p className="about-para">
   <p className="about-mission"></p> </p>

  <img  className= "aboutImg" src={aboutImage} alt="food thali"></img>
  </div>
  
        </section>
    );
}
export default About