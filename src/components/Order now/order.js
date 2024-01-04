import React from "react";
import delivery from "../../assets/delivery.png";
import "./order.css";
import ordernow from "../../assets/whatsapp.png"





const Order = ()=>{
    

    return(
      <section id='order'>
        <div className="order-heading"> Order Now </div>
      <div className="order-container">
        <div className="ordernow">
        <p className="order-text">Order now, and get your first meal at just Rs. 109 /- (including the delivery)</p>
        <p className="order-text">To place your order, connect with us on Whatsapp</p>
        <a  href="https://wa.me/message/FYSHZ5HMXASZB1" >

        <img  className= "whatsapp-img" src={ordernow} alt="whatsapp "/>
        </a>
        
        </div>
        <img className="order-img" src={delivery} alt="order now" ></img>
      </div>
 
        </section>
    );
}
export default Order