// src/components/Projects.js
import React from 'react';
import '../style/Projects.css';
import projectImage from '../assets/p1.jpg';
import project1Image from '../assets/webdev.png';

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
                    <div className="project-title">React Portfolio Site</div>
                    <div className="project-description">I developed my current website from scratch using React's component-based architecture, which allows for modular and reusable components. By using CSS, I created a responsive and visually appealing design. The site is hosted on GitHub Pages, providing seamless deployment and easy updates.</div>
                    <div className="project-technologies">React | HTML/CSS | JavaScript | Git</div>
                </div>
            </div>

            <div className="project-card">
                <div className="txt">
                    <div className="project-title">Project 2</div>
                    <div className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lectus sit amet metus egestas facilisis. Mauris mattis ante in metus facilisis, ut porttitor neque pretium. Praesent hendrerit massa lacus, non elementum nisl vulputate ac. Praesent nibh velit, posuere mattis leo eu, vestibulum interdum metus. Morbi pellentesque ultricies blandit. Nullam rutrum consequat iaculis.</div>
                    <div className="project-technologies">React | HTML/CSS | JavaScript | Git</div>
                </div>
                <div className="img">
                    <a href="https://github.com/jhuang0420/portfolio/tree/master" target="_blank" rel="noopener noreferrer">
                        <img src={projectImage} alt="Project 2" className="project-image" />
                    </a>
                </div>
            </div>

            <div className="project-card">
                <div className="img">
                    <a href="https://github.com/jhuang0420/portfolio/tree/master" target="_blank" rel="noopener noreferrer">
                        <img src={projectImage} alt="Project 3" className="project-image" />
                    </a>
                </div>
                <div className="txt">
                    <div className="project-title">Project 3</div>
                    <div className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel lectus sit amet metus egestas facilisis. Mauris mattis ante in metus facilisis, ut porttitor neque pretium. Praesent hendrerit massa lacus, non elementum nisl vulputate ac. Praesent nibh velit, posuere mattis leo eu, vestibulum interdum metus. Morbi pellentesque ultricies blandit. Nullam rutrum consequat iaculis.</div>
                </div>
            </div>

        </section>
    );
}
export default Projects;
