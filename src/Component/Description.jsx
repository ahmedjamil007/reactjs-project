import React from 'react';
import Sundar1 from "../assets/Sundarban_Tiger.jpg";
import Sundar2 from "../assets/Largest-Mangrove-Forest-in-the-World.jpg";
import Cox1 from "../assets/Sunset_at_Cox's_Bazar_06.jpg";
import Cox2 from "../assets/cox-sea-beach-pic-06-resize.jpg";
import './dec.css'
const Description = () => {
  return (
    <div className="des">
        <h1>Popular Destinations</h1>
        <p>Tour give you the opportunity to see a lot within a time frame</p>
      <div className="first-des">
      <div className="des-text">
        <h2><span style={{color:"#017259"}}>Sundarbans:</span><span style={{color:"#d73b59"}}>Mangrove forest</span></h2>
        <p  style={{color:"#017259"}}>Sundarbans has declared World Heritage Site by UNESCO which is the largest Mangrove Forest situated between two countries. It is the kingdom of Royal Bengal tiger and you will find various kinds of species of birds, animals & plants and I think you should visit the tranquilizing beauty of Sundarbans once in your life.</p>
      </div>
      <div className="image">
        <img src={Sundar1} alt="" />
        <img src={Sundar2} alt="" />
      </div>
      </div>
      <div className="first-des">
      <div className="image">
        <img src={Cox1} alt="" />
        <img src={Cox2} alt="" />
      </div>
      <div className="des-text">
        <h2><span style={{color:"#017259"}}>Cox’s Bazar::</span><span style={{color:"#d73b59"}}>longest beach in the world</span></h2>
        <p  style={{color:"#017259"}}>Cox's Bazar is one of the most popular tourist spot in Bangladesh which is situated in the most southern part and the largest  (112 km) sea beach in the world. It is the best place to enjoy the scene of sunrise and sunset.  The cool fresh air and peaceful weather on the shore will surely make you relaxed. So for a serene and relaxing vacation, this place is mostly recommended to the visitors.</p>
      </div>
      
      </div>
       <a href="" style={{textDecoration:"none",fontSize:"1.3rem",marginTop:"50px",color:"#d73b59",fontWeight:"bolder",border:"2px solid #017259",padding:"6px",borderRadius:"10px"}}>See more</a>
    </div>
  );
}

export default Description;
