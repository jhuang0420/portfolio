// src/components/About.js
import React from 'react';
import '../style/About.css';
import logo from '../assets/logo.png';

function About() {
    return (
        <section id="about" className="about">
            <div className="about-text">
                <h2>About Me</h2>
                <p> Hi, I'm Jeffrey Huang. I reside in Queens, NY, and I'm an aspiring software developer eager to apply my skills in a professional setting. My technical experience is centered around full-stack web development, familiarizing myself with tools such as React, Flutter, Flask, etc. I am passionate about creating effective and efficient solutions while working in a team setting to gain invaluable interpersonal and technical skills. </p>
            </div>
            <div className="about-image">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </section>
    );
}

export default About;
