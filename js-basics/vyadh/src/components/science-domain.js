import React from "react";
import './science-domain.css';
import scienceimage from '../assets/science.png';

const ScienceDomain=()=>(
    <div className="science-domain">
       
        <div className="domain-content">

            <div className="domain-title">SCIENCE DOMAIN</div>
            <span className="text">
            <br />
Comprising 7 committed members, our Science Domain is on a mission to determine the existence of life beyond
our planet. Specializing in performing tests dedicated to detecting signs of life, our scientists operate at
the frontier
<br />
of exploration. Through meticulous analyses and cutting-edge experiments, <br />
this team is dedicated to answering the questions: Is there life out there? <br />
Did life ever exist before? With expertise and precision, our Science Domain pioneers the quest for
extraterrestrial existence, setting the standard in competitions and pushing the boundaries of scientific
exploration.

            </span>


        </div>
        <img className="domain-image" src={scienceimage} alt="science Domain image"/>
        
    </div>
);

export default ScienceDomain;
