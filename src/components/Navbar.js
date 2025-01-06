// src/components/Navbar.js
import React from 'react';
import '../style/Navbar.css'; 

function Navbar() {
  // Define the alert function
  const alertContactEmail = () => {
    alert("To access my resume, please contact me at jhuang0420@gmail.com.");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h>Portfolio</h>
      </div>
      <div className="navbar-right">
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#"
           onClick={alertContactEmail} // Attach the function to the onClick event
           lassName="resume-link"
        >
          <i className="fas fa-file"></i> Resume
        </a>
      </div>
    </div>
  );
}


export default Navbar;
