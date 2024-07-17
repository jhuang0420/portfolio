// src/components/Navbar.js
import React from 'react';
import '../style/Navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h>Jeffrey Huang</h>
      </div>
      <div className="navbar-right">
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="https://docs.google.com/document/d/1H8tIQHWLyUikJExpHshH4Jk69ACFzAMb6HB3FeKi6mo/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-link">
                    <i className="fas fa-file"></i> Resume
                </a>
      </div>
    </div>
  );
}

export default Navbar;
