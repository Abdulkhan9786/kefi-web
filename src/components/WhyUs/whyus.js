import React from "react";
import whyImage from "../../assets/image2.png"
import "./whyus.css";


const Whyus = ()=>{
    const rectangleStyle = {
        width: '100%',   // Set the width of the rectangle
        height: '600px',   // Set the height of the rectangle
        backgroundColor: 'orange',  // Set the background color to yellow
      };
  
    return(
      <section id='whyUs'>
      <div className="whyus-container" style={rectangleStyle}>
        <img className="whyus-image" src={whyImage} alt="why choose us "></img>

        <div className="whyus-text">
        <h1 className="whyus-heading"> Why Choose us ? </h1>
     <p className="whyus-para">Poke is a traditional Hawaiian dish that typically consists of diced raw fish (such as tuna or salmon) marinated in soy sauce and other flavorful ingredients. It is often served over a bed of rice and topped with various toppings like seaweed, cucumber, avocado, and sesame seeds. </p>
        </div>

    </div>
 
        </section>
    );
}
export default Whyus