import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => (
  <div className="nav-bar">
    <div className="img1">
      <img src={logo} alt="Vyadh Logo" />
    </div>
    <div className="nav">
      
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/contact" className="nav-link ">Contact Us</Link>
      </div>
    </div>
  </div>
);

export default Header;
