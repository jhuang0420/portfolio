// src/components/Contact.js
import React from 'react';
import '../style/Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="6" required></textarea>

                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
