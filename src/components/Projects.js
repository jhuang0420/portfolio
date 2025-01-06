// src/components/Projects.js
import React from 'react';
import '../style/Projects.css';
// import projectImage from '../assets/p1.jpg';
import project1Image from '../assets/webdev.png';
import project2Image from '../assets/alpaca.png';
import project3Image from '../assets/hand.jpg';
import project4Image from '../assets/insurance.png';

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
                    <div className="project-description">
                        I developed my portfolio site from scratch utilizing React, JavaScript, and HTML/CSS. The site is hosted via GitHub 
                        Pages.</div>
                    <div className="project-technologies">React | HTML/CSS | JavaScript | Git</div>
                </div>
            </div>

            <div className="project-card">
                <div className="txt">
                    <div className="project-title">Stock Performance Predictor</div>
                    <div className="project-description">
                        Utilized Alpaca's Trading API to collect and parse metrics used for training a RNN LSTM model.
                        Performed data analysis and preprocessing, which included engineering new features and transforming skewed data.
                        Experimented with real-time sensitive information such as news headlines, reddit sentiment, etc.
                    </div>
                    <div className="project-technologies">
                        API | Machine-Learning | WebSockets | Python | Pandas | NumPy | TensorFlow | Financial Analysis
                    </div>
                </div>
                <div className="img">
                    <a href="https://github.com/jhuang0420/alpaca_bot" target="_blank" rel="noopener noreferrer">
                        <img src={project2Image} alt="Project 2" className="project-image" />
                    </a>
                </div>
            </div>

            <div className="project-card">
                <div className="img">
                    <a href="https://github.com/jhuang0420/comp-vision-hand-numbers" target="_blank" rel="noopener noreferrer">
                        <img src={project3Image} alt="Project 3" className="project-image" />
                    </a>
                </div>
                <div className="txt">
                    <div className="project-title">Hand Recognition</div>
                    <div className="project-description">
                         Collected static hand landmark data with Python cv2 and mediapipe libraries.
                         Built sequential DNN and trained with data to make real-time predictions through user's camera.
                         Acheived 97% validation accuracy.
                    </div>
                    <div className="project-technologies">
                        Machine-Learning | Python | TensorFlow | Keras | Computer Vision
                    </div>
                </div>
            </div>

            <div className="project-card">
                <div className="txt">
                    <div className="project-title">Insurance Premium Predictor</div>
                    <div className="project-description">
                        Kaggle competition to build and train regression model(s) to predict insurance premiums. 
                        Performed EDA and data preprocessing on dataset. Experimented with data transformations, various imputation techniques, etc.  
                        Created an ensemble of models for final prediction. Placed top 20% of submissions. 
                    </div>
                    <div className="project-technologies">
                        Machine-Learning | EDA | Scikit-learn | Data preprocessing
                    </div>
                </div>
                <div className="img">
                    <a href="https://github.com/jhuang0420/Kaggle_Insurance_Premium" target="_blank" rel="noopener noreferrer">
                        <img src={project4Image} alt="Project 4" className="project-image" />
                    </a>
                </div>
            </div>

        </section>
    );
}
export default Projects;
