// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../style/Footer.css';

function Footer() {
    return (
        <section id="footer" className="footer">
            <p>Follow me on social media:</p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/jeffrey-huang-107288214/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/jhuang0420" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.instagram.com/jeffma_en_casa/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
            <p>&copy; 2024 Jeffrey Huang. All rights reserved.</p>
        </section>
    );
}

export default Footer;
