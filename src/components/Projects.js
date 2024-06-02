// src/components/Projects.js
import React from 'react';
import '../style/Projects.css';
import project1Image from '../assests/p1.jpg';
import project2Image from '../assests/p1.jpg';
import project3Image from '../assests/p1.jpg';

function Projects() {
    return (
        <section id="projects" className="projects">
            
            <div className="project-card">
                <a href="#project1">
                    <img src={project1Image} alt="Project 1" className="project-image" />
                </a>
                <div className="project-title">Project 1</div>
                <div className="project-description">Description of Project 1</div>

            </div>
            <div className="project-card">
                <a href="#project2">
                    <img src={project2Image} alt="Project 2" className="project-image" />
                </a>
                <div className="project-title">Project 2</div>
                <div className="project-description">Description of Project 2</div>

            </div>
            <div className="project-card">
                <a href="#project3">
                    <img src={project3Image} alt="Project 3" className="project-image" />
                </a>
                <div className="project-title">Project 3</div>
                <div className="project-description">Description of Project 3</div>

            </div>
        </section>
    );
}
export default Projects;
