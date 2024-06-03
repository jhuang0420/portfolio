import React from 'react';
import '../style/Skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Skills() {
    return (
        <section id="skills" className="skills">
            <div className='skills-header'>
                <h2> My Skills</h2>
                <a href="https://docs.google.com/document/d/1H8tIQHWLyUikJExpHshH4Jk69ACFzAMb6HB3FeKi6mo/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link">
                    <i className="fas fa-file"></i> Resume
                </a>
            </div>
            <ul className="skills-list">
                <li>Java</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li>Flask</li>
                <li>Flutter</li>
            </ul>
        </section>
    );
}

export default Skills;
