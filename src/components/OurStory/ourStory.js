import React from "react";
import lunchbox from "../../assets/lunchbox.png";
import "./ourStory.css";


const OurStory = ()=>{
  
    return(
      <section id='ourStory'>
    <div className="ourStory-container">
      <img className="our-story-image" src={lunchbox} alt="Indian Lunchbox "></img>
    <div className="ourStory-text">
    <text className="ourStory-heading">  Our Story </text>
    <p className="ourStory-para"> I conceptualized this idea approximately 2-3 years ago, inspired by the recurring scenario 
of my friends visiting me on weekends and expressing a desire for wholesome, home-cooked meals. 
Upon inquiring about their lunch choices, the common response was often limited to canteen dosas 
or unsatisfactory mess food. Recognizing the widespread challenge faced by many bachelors 
in obtaining quality meals, with options limited to mess facilities, food delivery apps
 like Swiggy and Zomato, or hiring a cook, I saw an opportunity to address this need.     </p>

 <p className="ourStory-para">Motivated by the vision of providing a convenient and delectable solution, 
  I conducted a modest market research. The findings reinforced the demand for a 
  service that offers home-cooked, delicious, and budget-friendly meals. With this insight, 
  I took the initiative to establish my own lunch box delivery service. 
  The aim was to fill the gap in the market, catering specifically to individuals 
  seeking a reliable source of tasty and wholesome homemade meals, delivered right to their doorstep.</p>
  </div>

  </div>
  
        </section>
    );
}
export default OurStory