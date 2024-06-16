import React from 'react';
import './contact.css';
import logo from '../assets/logo.png';
import ig from '../assets/ig.png';
import link from '../assets/link.png';
import emailIcon from '../assets/email.png';
import phoneIcon from '../assets/phone.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

const Contact = () => {
    return (
        <div className="contact">
            <div className="nav-bar">
                <div className="img1"><img src={logo} alt="vyadh logo" /></div>
                <div className="nav">
                    <div className="home">Home</div>
                    <div className="achievements">Achievements</div>
                    <div className="board">Board</div>
                    <div className="rec"></div>
                    <div className="contactus">Contact Us</div>
                </div>
            </div>

            <div className="info">
                <div className="text1">CONTACT US</div>
                <div className="part1">
                    <div className="name">
                        <div className="t1">Name</div>
                        <input type="text" className="box1" />
                    </div>
                    <div className="email">
                        <div className="t2">Email</div>
                        <input type="email" className="box1" />
                    </div>
                </div>
                <div className="part2">
                    <div className="phone">
                        <div className="t3">Phone Number</div>
                        <input type="number" className="box1" />
                    </div>
                    <div className="company">
                        <div className="t4">Company Name</div>
                        <input type="text" className="box1" />
                    </div>
                </div>
                <div className="part3">
                    <div className="message">
                        <div className="t5">Message</div>
                        <input type="text" className="box2" />
                    </div>
                    <button className="submit">SUBMIT</button>
                </div>
            </div>

            <div className="details">
                <div className="c1">
                    <div className="team-details">TEAM DETAILS</div>
                    <div className="td">
                        <div className="emaild"><span className="title1">Email: </span>teamvyadh33@gmail.com</div>
                        <div className="insta"><span className="title2">Instagram: </span>@teamvyadh</div>
                        <div className="linkedin"><span className="title3">LinkedIn: </span>Team Vyadh</div>
                    </div>
                    <div className="tld">
                        <div className="team-lead">TEAM LEAD DETAILS</div>
                        <div className="emailt">Email:</div>
                        <div className="phonet">Phone</div>
                    </div>
                </div>
                <div className="c2">
                    <div className="location">LOCATION</div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0410799818255!2d79.15335867489297!3d12.96922318734587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1718202012324!5m2!1sen!2sin"
                            width="303" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <p className="add">VIT, Vellore Campus,<br /> Tiruvalam Rd,<br /> Katpadi, Vellore,<br /> Tamil Nadu 632014</p>
                </div>
            </div>
            <div className="end">
                <img className="i1" src={logo} alt="vyadh logo" />
                <img className="i2" src={logo2} alt="logo2" />
                <img className="i3" src={logo3} alt="vit logo" />
            </div>
        </div>
    );
};

export default Contact;
