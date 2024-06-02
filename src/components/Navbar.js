// src/components/Navbar.js
import React from 'react';
import '../style/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">

            <h1>My Portfolio</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
