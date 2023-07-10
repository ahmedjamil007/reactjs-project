import React from 'react';
import './Trips.css'
import TripsData from './TripsData';
import C1 from "../assets/card3.jpg";
import C2 from "../assets/card4.jpg";
import C3 from "../assets/card1.jpg";
const Trips = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
    <div className="tripcard">
        <TripsData
        image={C1}
        heading="Trip in Sreemangal"
        text="Sreemangal is often referred to as the 'tea capital' of Bangladesh, and is most famous for its tea fields. Other than tea, the rubber, pineapple, wood, betel, and lemon industries also exist in the upazila."
        
        />
        <TripsData
        image={C2}
        heading="Trip in St. Martin"
        text="St. Martin is generally known as “Narikel Zinzira” in Bengali, means 'Coconut Island' and this is the only coral reef island in Bangladesh. It is a small island in the north eastern part of the Bay of Bengal, created the southernmost part of our country"
        
        
        />
        <TripsData
        image={C3}
        heading="Trip in Rangamati"
        text="Rangamati is the administrative headquarter and town of Rangamati Hill District in the Chittagong Hill Tracts of Bangladesh. The town is located at 22°37'60N 92°12'0E and has an altitude of 14 metres. From Chittagong a 77 kilometres road leads to Rangamati"
        
        />
        
    </div>
    </div>
  );
}

export default Trips;
