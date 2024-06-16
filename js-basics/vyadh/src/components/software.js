import React from "react";
import './software.css';
import softwareimage from '../assets/software.png';

const SoftwareDomain=()=>(
    <div className="software-domain">
         <img className="domain-image" src={softwareimage} alt="Software Domain image"/>
       
        <div className="domain-content">

            <div className="domain-title">SOFTWARE & AUTONOMOUS DOMAIN</div>
            <span className="text">
            With a team of 11 skilled members, our Software Domain is a powerhouse of innovation. Within this domain, we specialize in two key sub-domains—ground Control Station (GCS) and Autonomous Systems. GCS is the communication hub, establishing a seamless link with the rover and taking charge of control. The Autonomous team pioneers the realm of self-sufficiency, ensuring the rover executes tasks autonomously, making intelligent decisions without human intervention. Our software experts drive the technological backbone, orchestrating a symphony of precision and autonomy

            </span>


        </div>
       
        
    </div>
);

export default SoftwareDomain;
