import React from 'react';

import './hero.css'

export default function Hero(props) {
  return (
    <div className={props.cName}>
     <img src={props.heroImg} alt="HerpImg" />
   <div className="hero-text"> <h1 style={{padding:"15px"}}>{props.title}</h1>
    <p>{props.text}</p>
    <div>
  
   <button> {props.buttonText}</button>
   </div>
    </div>
    </div>
  );
}
