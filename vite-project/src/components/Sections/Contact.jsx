import React from 'react';
import { portfolioData } from '../../data/portfolio';

const Contact = () => {
    return (
        <footer id="contact" className="contact-section">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-text">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a href={portfolioData.profile.social.email} className="btn btn-primary">
                    Say Hello
                </a>

                <div className="contact-copyright">
                    <p>© {new Date().getFullYear()} Subham Kumar Singh. Built with React & Vite.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
