import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
            <h1><span style={{color:"#d73b59"}}>My</span ><span style={{color:"#d73b59"}}>-</span><span style={{color:"#017259"}}>Dream</span></h1>
            <p style={{color:"#017259",fontSize:"18px"}}>Choose favourite destination</p>
           
        </div>
        <div >
            <a href="">
                <i className="fa-brands fa-facebook-square"style={{color:"black",padding:"10px",fontSize:"3Opx"}}></i>
            </a>
            <a href="">
                <i className="fa-brands fa-instagram-square"style={{color:"black",padding:"10px",font:"30px"}}></i>
            </a>
            <a href="">
                <i className="fa-brands fa-youtube-square"style={{color:"black",padding:"10px",font:"30px"}}></i>
            </a>
            <a href="">
                <i className="fa-brands fa-twitter-square"style={{color:"black",padding:"10px",font:"30px"}}></i>
            </a>
        </div>
      </div>
      <hr style={{marginTop:"10px"}} />
      <div className="bottom">
        <div>
            <h4>Project</h4>
            <a href="">ChangeLog</a>
            <a href="">Status</a>
            <a href="">About</a>
            <a href="">All Version</a>
        </div>
        <div>
            <h4>Coummunity</h4>
            <a href="">Facebook</a>
            <a href="">Youtube</a>
            <a href="">Twitter</a>
            <a href="">Github</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="">Support</a>
            <a href="">Trounledhooting</a>
            <a href="">Contact Us</a>
            
        </div>
        <div>
            <h4>Others</h4>
            <a href="">Terms of service</a>
            <a href="">Privacy Policy</a>
            <a href="">Licences</a>
            
        </div>
      </div>
    </div>
  );
}

export default Footer;
