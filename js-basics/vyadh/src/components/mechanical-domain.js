import React from "react";
import './mechanical-domain.css';
import mechanicalimage from '../assets/electrical.png';

const MechanicalDomain=()=>(
    <div className="mechanical-domain">
        <img className="domain-image" src={mechanicalimage} alt="Mechanical Domain image"/>
        <div className="domain-content">

            <div className="domain-title">MECHANICAL DOMAIN</div>
            <span className="text">
            Mechanical Domain Our team of 9 experts in the Mechanical Domain is the driving force behind the physical prowess of the rover. From crafting the sturdy Chassis to ensure smooth Suspension, designing the Differential, and mounting the Motor and Wheels with precision, we cover it all. The team's expertise extends to the versatile Robotic Arm and the specialized Science Kit. We don't just stop at hands-on work; we run simulations to ensure everything works seamlessly. In a nutshell, we're the ones responsible for putting the rover together, making sure every part fits perfectly for optimal performance.

            </span>


        </div>
        
    </div>
);

export default MechanicalDomain;
