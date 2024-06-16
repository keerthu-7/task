import React from "react";
import './management.css';
import managementimage from '../assets/management.png';

const ManagementDomain=()=>(
    <div className="management-domain">
       
        <div className="domain-content">

            <div className="domain-title">MANAGEMENT DOMAIN</div>
            <span className="text">
            <br />
                Our Management Team, consisting of 6 dedicated members, is the backbone of seamless operations. With a focus
                on team coordination, they expertly handle the intricate art of team management. From curating compelling
                content to showcasing our endeavors on social media platforms, their role extends to securing vital
                sponsorships. These adept individuals not only
                <br />
                keep the team organized but also ensure our mission gets the visibility
                <br /> it deserves, creating a bridge between our endeavors and the world.
                <br /> The Management Team: where strategy meets execution for a <br />
                successful journey.

            </span>


        </div>
        <img className="domain-image" src={managementimage} alt="Management Domain image"/>
        
    </div>
);

export default ManagementDomain;
