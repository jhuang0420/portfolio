// src/components/Projects.js
import React from 'react';
import '../style/Projects.css';
import project1Image from '../assets/p1.jpg';

function Projects() {
    return (
        <section id="projects" className="projects">

            <div className="project-card">
                <div className="img">
                    <a href="https://github.com/jhuang0420/portfolio/tree/master" target="_blank" rel="noopener noreferrer">
                        <img src={project1Image} alt="Project 1" className="project-image" />
                    </a>
                </div>
                <div className="txt">
                    <div className="project-title">Project 1</div>
                    <div className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lectus sit amet metus egestas facilisis. Mauris mattis ante in metus facilisis, ut porttitor neque pretium. Praesent hendrerit massa lacus, non elementum nisl vulputate ac. Praesent nibh velit, posuere mattis leo eu, vestibulum interdum metus. Morbi pellentesque ultricies blandit. Nullam rutrum consequat iaculis.</div>
                </div>
            </div>

            <div className="project-card">
                <div className="txt">
                    <div className="project-title">Project 1</div>
                    <div className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lectus sit amet metus egestas facilisis. Mauris mattis ante in metus facilisis, ut porttitor neque pretium. Praesent hendrerit massa lacus, non elementum nisl vulputate ac. Praesent nibh velit, posuere mattis leo eu, vestibulum interdum metus. Morbi pellentesque ultricies blandit. Nullam rutrum consequat iaculis.</div>
                </div>
                <div className="img">
                    <a href="https://github.com/jhuang0420/portfolio/tree/master" target="_blank" rel="noopener noreferrer">
                        <img src={project1Image} alt="Project 1" className="project-image" />
                    </a>
                </div>
            </div>

            <div className="project-card">
                <div className="img">
                    <a href="https://github.com/jhuang0420/portfolio/tree/master" target="_blank" rel="noopener noreferrer">
                        <img src={project1Image} alt="Project 1" className="project-image" />
                    </a>
                </div>
                <div className="txt">
                    <div className="project-title">Project 1</div>
                    <div className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lectus sit amet metus egestas facilisis. Mauris mattis ante in metus facilisis, ut porttitor neque pretium. Praesent hendrerit massa lacus, non elementum nisl vulputate ac. Praesent nibh velit, posuere mattis leo eu, vestibulum interdum metus. Morbi pellentesque ultricies blandit. Nullam rutrum consequat iaculis.</div>
                </div>
            </div>

        </section>
    );
}
export default Projects;
