import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Hero.css';

const Hero = () => {
    const { name, title, tagline } = portfolioData.profile;

    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        Available for hire
                    </div>

                    <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Hi, I'm <span className="gradient-text">{name}</span>
                    </h1>

                    <h2 className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        {title}
                    </h2>

                    <p className="hero-desc animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        {tagline} I build accessible, pixel-perfect, and performant web experiences.
                    </p>

                    <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        <a href="#projects" className="btn btn-primary">
                            View Work <ArrowRight size={20} />
                        </a>
                        <a href="/resume.pdf" className="btn btn-outline" target="_blank">
                            Resume <Download size={20} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <div className="code-block">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <pre>
                            <code>
                                <span className="kwd">class</span> <span className="cls">Developer</span> <span className="kwd">extends</span> <span className="cls">Person</span> {'{'}
                                <span className="kwd">constructor</span>() {'{'}
                                <span className="this">this</span>.name = <span className="str">"{name}"</span>;
                                <span className="this">this</span>.skills = [<span className="str">"Java"</span>, <span className="str">"Spring"</span>, <span className="str">"Go"</span>];
                                <span className="this">this</span>.passion = <span className="str">"Building Scalable Backend Systems"</span>;
                                {'}'}

                                <span className="fn">code</span>() {'{'}
                                <span className="kwd">return</span> <span className="str">"Quality Software"</span>;
                                {'}'}
                                {'}'}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
