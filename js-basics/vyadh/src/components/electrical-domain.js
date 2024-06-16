import React from 'react';
import './electrical-domain.css';
import electricalImage from '../assets/electrical.png';
const ElectricalDomain = () => (
  
  <div className="electrical-domain">
    <div className="domain-content">
      <div className="domain-title">ELECTRICAL DOMAIN</div>
      <span className="text">
        Comprising a dynamic team of 12 experts, our Electrical Domain is the driving force behind the rover's capabilities. Specializing in diverse tasks such as Traversal, Robotic Arm, PCB Design, Power Distribution, and cutting-edge Sensor Integration, our electrical engineers bring innovation to every circuit.
      </span>
    </div>
    <img className="domain-image" src={electricalImage} alt="Electrical Domain Image" />
  </div>
);

export default ElectricalDomain;
