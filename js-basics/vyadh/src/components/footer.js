import React from "react";
import './footer.css';
import insta from '../assets/ig.png';
import linkedin from '../assets/link.png';
import email from '../assets/email.png';
import phone from '../assets/phone.png';
import logoimg from '../assets/logo.png';

const Footer = () => (
    <div className="end" style={{ backgroundColor: 'grey' }}>
      
      <div className="info" style={{ display: 'flex', flexDirection:"row",justifyContent:"space-between"}}> {/* Added style */}
        <div className="text7">
          Follow Us
          <img className="insta" src={insta} alt="instagram" />
          <img className="linkedin" src={linkedin} alt="linkedin" />
        </div>
  
        <div className="text8">
          Contact Us
          <div className="email-div">
            <img className="email" src={email} alt="email" />
            <span className="text9">teamvyadh33@gmail.com</span>
          </div>
          <div className="phone-div">
            <img className="phone" src={phone} alt="phone" />
            <span className="text10">+91 9827036208</span>
          </div>
        </div>
        <img className="logo" src={logoimg} alt="Vyadh logo" />
      </div>
    </div>
  );

export default Footer;
