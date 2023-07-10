import React from 'react';
import Navbar from './Component/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import "./App.css"

import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
export default function App() {
  return (
    <div>
     <BrowserRouter>
   <Navbar />
   <Routes>
<Route path ="/" element={<Home />}></Route>

<Route path ="/about" element={<About/>}></Route>
<Route path ="/services" element={<Services/>}></Route>
<Route path ="/contact" element={<Contact/>}></Route>


   </Routes>
   
   </BrowserRouter>
    </div>
  );
}
