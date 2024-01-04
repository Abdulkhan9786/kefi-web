import React from "react";
import aboutImage from "../../assets/image3.png"
import "./about.css";


const About = ()=>{
  
    return(
      <section id='about'>
      

<div className="about-container">
  <div className="about-text">
    <text className="about-heading">  About  </text>
    <p className="about-para">
    We are a small-scale startup committed to definitively answering the daily query, 
    <text className="hindi-about">"Aj lunch mai kya khau. Jo healthy bhi ho, tasty bhi aur ghar jaise bhi?"</text> Our focus 
    is on delivering complete home-cooked meals in a thali, meticulously packed 
    and delivered fresh to your office every single day. Packaged in an eco-friendly, 
    biodegradable lunchbox designed to resemble a traditional thali, our offering includes 
    a wholesome assortment of dal, rice, sabji, salad, and chapati.Crafted to suit your taste buds, our meals not only deliver a delightful dining experience 
  but also come at an affordable price. Each dish is prepared hygienically, 
  aiming to replicate the nutrition and warmth of a home-cooked meal. 
    </p>

<p className="about-para">
   <p className="about-mission">Our mission is to provide you with a healthy, flavorful, and homely 
  meal option, making your lunch choices both convenient and fulfilling, all within a budget-friendly range.</p> </p>

  </div>

  <img  className= "aboutImg" src={aboutImage} alt="food thali"></img>
  </div>
  
        </section>
    );
}
export default About