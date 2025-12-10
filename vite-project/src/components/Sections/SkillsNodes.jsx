import React from 'react';
import { portfolioData } from '../../data/portfolio';
import './SkillsNodes.css';

const SkillsNodes = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Tech</h2>

                <div className="skills-grid">
                    {portfolioData.skills.map((skillGroup, index) => {
                        const Icon = skillGroup.icon;
                        return (
                            <div key={index} className="skill-card glass-panel">
                                <div className="skill-header">
                                    <div className="skill-icon">
                                        <Icon size={24} />
                                    </div>
                                    <h3>{skillGroup.category}</h3>
                                </div>
                                <div className="skill-items">
                                    {skillGroup.items.map((item) => (
                                        <span key={item} className="skill-tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsNodes;
