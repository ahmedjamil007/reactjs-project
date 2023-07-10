import React from 'react';
import Hero from '../Component/Hero';
import Logo from "../assets/natural-beauty-of-bangladesh.jpg";
import Description from '../Component/Description';
import Trips from '../Component/Trips';
import Footer from '../Component/Footer';
import Aboutslider from './Aboutslider';

const Home = () => {
  return (
    <div>
     <Hero 
     cName="hero"
     heroImg={Logo}
     title="BANGLADESH"
    
     text="THE LAND OF BEAUTY"
     buttonText="Travel Plan"
     url="/"
     btnClass="show"
     
     
     
     />
     <Description />
     <Trips />

     <Aboutslider />
     <Footer />
    </div>
  );
}

export default Home;
