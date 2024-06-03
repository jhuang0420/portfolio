// src/components/About.js
import React from 'react';
import '../style/About.css';
import logo from '../assests/logo.png';

function About() {
    return (
        <section id="about" className="about">
            <div className="about-text">
                <h2>About Me</h2>
                <p> Hi, I'm Jeffrey Huang. I'm an ethusiast of problem-solving and innovation. </p>
            </div>
            <div className="about-image">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </section>
    );
}

export default About;
