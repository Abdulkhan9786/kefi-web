import React from "react";
import whyImage from "../../assets/image2.png"
import "./whyus.css";


const Whyus = ()=>{
    
  
    return(
      <section id='whyus'>
      <div className="whyus-container" >
        <img className="whyus-image" src={whyImage} alt="why choose us "></img>

        <div className="whyus-text">
        <text className="whyus-heading"> Why Choose us ? </text>
     <p className="whyus-para">With various alternatives such as mess services, Swiggy, Zomato, etc., 
     offering similar services, you might wonder why choose us? Here's why: </p>
    <p className="point-desc"> <text className="point-heading">Distinctive Menu:</text> Meticulously planned two weeks in advance for a diverse culinary experience.</p> 
    <p className="point-desc"> <text className="point-heading">Thali-Like Experience: </text> Unique taste for each curry, setting us apart from other lunch-box services.</p>
    <p className="point-desc"> <text className="point-heading">Convenient Reheating:</text> Meals delivered in microwave-safe containers for easy reheating.</p>
    <p className="point-desc"> <text className="point-heading">Well-Balanced Weekly Menu:</text> Thoughtfully designed format includes 1 leafy vegetable, 1 paratha, 1 sprout dish, and 2 vegetable curries, offering variety throughout the week.
</p>  
        </div>
        

    </div>
 
        </section>
    );
}
export default Whyus