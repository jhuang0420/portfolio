// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import './style/App.css';


function App() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
