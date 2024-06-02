// src/components/Skills.js
import React from 'react';
import '../style/Skills.css';

function Skills() {
    return (
        <section id="skills" className="skills">
            <h2>My Skills</h2>
            <div className="skills-list">
                <ul>
                    <li>Java</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Git</li>
                    {/* Add more skills as needed */}
                </ul>
            </div>
        </section>
    );
}

export default Skills;
