// import react, { component } from 'react';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link

// } from 'react-router-dom';
import './About.css';

import React from 'react';
const About = () => (
    <nav className="About ">
<div className="About-header">
<div className="About head-content">
    <ul className="About-head-content-list">
        <p1 className="About-head-content-item">How it Works</p1><br></br>
<div className="About-head-content-p">
        <li>The Maker Place is a shared woodshop offering Memberships and classes.
            We offer a variety of classes/workshops covering many techniques and intrests.
            We also offer month to month or year long Memberships.
            make our shop your daily studio. Not sure how to start first ? </li>
</div>
        </ul>
     <div className="About-section">
        <ul className="About-list">
            <li className="About-list-item">
            <h4 className="About-h">Orientation</h4>
             {/* <img src="#"> */}
            <p className="About-p">content content content content content content content content content </p>
            <button className="About-button" >Read More</button>
                </li>
                    <li className="About-list-item">
                        <h4 className="About-h">Intro to Wood Shop Power Tools</h4>
                         {/* <img src="#"> */}
                        <p className="About-p">content content content content content content content content content </p>
                        <button className="About-button">Read More</button>
                        </li>
                        <li className="About-list-item">
                        <h4 className="About-h" >Coper Bowl Forming</h4>
                        <p className="About-p">content content content content content content content content content </p>
                            <button className="About-button" >Read More</button>
                        </li>
                    </ul>
                </div>

                {/* <link className="about-link-tools" to="./tools">Tools</link>
                <link className="about-link-contact" to="./contact">Contact</link>
                <link className="about-link-map" to="./map">Map</link> */}

            </div>
        </div>
    </nav>
);

export default About;