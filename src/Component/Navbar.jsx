import React, { Component } from 'react';

import{Link} from "react-router-dom";
import './navbar.css'

export class Navbar extends Component {
  state ={clicked: false};
  handleClicke =() =>{
    this.setState ({clicked : !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
      <h1 className="navbar-logo" > <span style={{color:"#d73b59"}}>My</span ><span style={{color:"#d73b59"}}>-</span><span style={{color:"#017259"}}>Dream</span></h1>
      <div className="menu-icons" onClick={this.handleClicke}>
        <i className={this.state.clicked ?"fa-regular fa-x" :"fa-solid fa-bars" }></i>

      </div>
      <ul className={this.state.clicked ?"nav-menu active":"nav-menu"}>
       
      <li ><Link to="/" className="nav-link" > Home</Link></li>
     
      <li> <Link to="/about" className="nav-link" >About</Link></li>
      <li><Link to="/services" className="nav-link" >Services</Link></li>
      <li><Link to="/contact" className="nav-link" >Contact</Link></li>
      <button className="but" style={{verticalAlign:"middle"}}><span>Sign-in </span></button>
      <button className="button" style={{verticalAlign:"middle"}}><span>Sign-in </span></button>
      </ul>
      
      </nav>
    );
  }
}

export default Navbar;
