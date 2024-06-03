// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './style/App.css';


function App() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
