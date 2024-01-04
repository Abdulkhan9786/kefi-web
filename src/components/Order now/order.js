import React from "react";
import delivery from "../../assets/delivery.png";
import "./order.css";
import ordernow from "../../assets/whatsapp.png"
import ClickableImage from '../widgets/clickableImage';



const Order = ()=>{
    
  const externalLink = 'https://wa.me/message/4BOPFYHELHQ4D1';
    return(
      <section id='order'>
      <div className="order-container">
        <div className="ordernow">
        <text className="order-heading"> Order Now </text>
        <p className="order-text">Order now, and get your first order at just Rs. 109 /- (including the delivery)</p>
        <p className="order-text">To place your order, connect with us on Whatsapp</p>
        <ClickableImage imageUrl={ordernow} link={externalLink} width= "200px" height = "80px"/>
        </div>
        <img className="order-img" src={delivery} alt="order now"></img>
      </div>
 
        </section>
    );
}
export default Order