import React from 'react';
import Hero from '../Component/Hero';
import Ab from "../assets/aboutp.jpg";
import "./about.css";

import Footer from '../Component/Footer';
import Aboutslider from './Aboutslider';
const About = () => {
  return (
    <div>
    <Hero 
    cName="hero"
    heroImg={Ab}
    title=" ABOUT BANGLADESH"
    buttonText="Travel Plan"
   
    
    
    
    
    />
    <div className="about">
      <h1>Bangladesh</h1>
      <p>Bangladesh is a country in Southern Asia and is located on the Bay of Bengal bordered by India on all sides except for a small border with Burma. Bangladesh has flat plains, and most of the country is situated on deltas of large rivers flowing from the Himalayas. The government system is parliamentary democracy; the chief of state is the president, and the head of government is the prime minister. Bangladesh has a traditional economic system in which the allocation of available resources is made on the basis of inheritance and primitive methods. Bangladesh is a member of the Asia-Pacific Trade Agreement (APTA) and the South Asian Association for Regional Cooperation (SAARC).</p>
    </div>
    <Aboutslider />
    <Footer />
   </div>
  );
}

export default About;
