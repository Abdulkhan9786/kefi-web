import React from "react";
import lunchbox from "../../assets/lunchbox.png";
import "./ourStory.css";


const OurStory = ()=>{
  
    return(
      <section id='ourStory'>
       
       <div className="ourStory-heading">  Our Story </div>
      <div className="ourStory-container">
        <img className="our-story-image" src={lunchbox} alt="Indian Lunchbox "></img>
      <p className="ourStory-para"> 
          In 2019, when friends visited me on weekends, they'd request a break from the monotony 
          of canteen dosa, mess food, or online orders throughout the week. 
          This led to the idea of launching a lunch box delivery service featuring home-cooked, 
          delicious, and budget-friendly meals. Conducting market research, 
          I discovered that many bachelors faced challenges in obtaining quality meals.
          Motivated to address this need, I took the initiative to establish my own 
          lunch box delivery service, aiming to fill the market gap and cater specifically 
          to individuals seeking a reliable source of tasty and wholesome homemade meals 
          delivered directly to their doorstep.    </p>

  </div>
  
        </section>
    );
}
export default OurStory