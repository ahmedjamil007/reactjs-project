import React from 'react';
import Hero from '../Component/Hero';
import Logo from "../assets/contactp.jpg";
import Logo1 from "../assets/conww.jpg";
import Footer from '../Component/Footer';
import './contact.css';
const Contact = () => {
  return (
    <div>
    <Hero 
   
     cName="hero"
     heroImg={Logo}
     title="Contact"
     buttonText="Travel Plan"
   
     
     
     
     
     />
     <div className="contact">
      <div className="card">
    <div className="left">
   <img src={Logo1} alt="" />
    </div>
    <div className="right">
      <h1>Contact Us</h1>
      <div className="contact">
        <div className="form-container">
          <form className="form">
            <div className="username">
             <input type="text" placeholder="Enter your name"  required/>
            </div>
            <div className="useremail">
          
                <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="usermessage">
              <textarea placeholder="Enter your message" required></textarea>
            </div>
            <div className="usersubmit">
             
                <input type="submit" value="Contact Us" />
            </div>
          </form>
        </div>
        <div className="address">
          <div className="email">
            <h2 style={{color:"#017259"}}>Contact</h2>
            <p style={{color:"#d73b59"}}>hi@example.com</p>
          </div>
          <div className="location">
            <h2 style={{color:"#017259"}}>Based in</h2>
            <p style={{color:"#d73b59"}}>Dhaka,Bangladesh</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  </div>
     <Footer />
    </div>
      
  );
}

export default Contact;
