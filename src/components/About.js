// src/components/About.js
import React from 'react';
import '../style/About.css';
import logo from '../assets/logo.png';

function About() {
    return (
        <section id="about" className="about">
            <div className="about-text">
                <h2>Hi, I'm Jeffrey Huang.</h2>
                <p> I reside in Queens, NY, and I'm an aspiring Machine Learning Engineer eager to apply my skills in a professional setting. I am passionate about working with data to maximize its utility and explore the many facets of machine learning that remain elusive. I hope to gain invaluable interpersonal and technical skills through collaborating with others and self-studying. </p>
            </div>
            <div className="about-image">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </section>
    );
}

export default About;
