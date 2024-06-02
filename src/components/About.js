// src/components/About.js
import React from 'react';
import '../style/About.css';
import logo from '../assests/logo.png';

function About() {
    return (
        <section id="about" className="about">
            <div className="about-text">
                <h2>About Me</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum ipsum in augue dapibus, at rutrum felis tincidunt. Nulla cursus ante metus, id placerat dui tempor eu. Proin libero dolor, lobortis a vulputate eget, consequat nec sem. Praesent rutrum mollis malesuada. Donec quis pellentesque libero, nec varius risus. Integer et fringilla tortor. Proin vel imperdiet lectus. Sed scelerisque semper vehicula. Maecenas commodo ut tellus ac fringilla. Curabitur ante ligula, tincidunt et semper sit amet, scelerisque a augue. Etiam tristique ante tellus, in efficitur tortor pellentesque sed.</p>
            </div>
            <div className="about-image">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </section>
    );
}

export default About;
