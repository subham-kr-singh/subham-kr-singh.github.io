import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {portfolioData.projects.map((project) => (
                        <div key={project.id} className="project-card glass-panel">
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.links.demo} className="project-link" title="Live Demo"><ExternalLink /></a>
                                        <a href={project.links.github} className="project-link" title="Source Code"><Github /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map(t => <span key={t}>{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
