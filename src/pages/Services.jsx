import React from 'react';
import Hero from '../Component/Hero';
import Ab from "../assets/serp.jpg";
import Trips from '../Component/Trips';
import Footer from '../Component/Footer';

const Services = () => {
  return (
    <div>
    <Hero 
    cName="hero"
    heroImg={Ab}
    title=" ABOUT Services"
    buttonText="Travel Plan"
   
    
    
    
    
    />
    <Trips />
    <Footer />
   </div>
  );
}

export default Services;
