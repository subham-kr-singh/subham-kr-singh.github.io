import React from 'react';
import { portfolioData } from '../../data/portfolio';
import './About.css';
import { Download } from 'lucide-react';

const About = () => {
    const { about, social } = portfolioData.profile;

    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title animate-fade-in">About Me</h2>

                <div className="about-content glass-panel animate-fade-in">
                    <div className="about-text">
                        <p className="about-description">
                            {about}
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">1+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">2+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">0+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>

                        <div className="about-actions">
                            <a href="#" className="download-btn">
                                <Download size={20} />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
