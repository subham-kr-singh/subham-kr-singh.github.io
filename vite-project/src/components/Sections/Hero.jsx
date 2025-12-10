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
                                <span className="kwd">type</span> <span className="cls">BackendSystem</span> <span className="kwd">struct</span> {'{'}
                                <br />&nbsp;&nbsp;<span className="id">Architecture</span>  <span className="type">string</span>    <span className="str">`json:"microservices"`</span>
                                <br />&nbsp;&nbsp;<span className="id">Database</span>      <span className="type">string</span>    <span className="str">`json:"postgres_sharded"`</span>
                                <br />&nbsp;&nbsp;<span className="id">Latency</span>       <span className="type">string</span>    <span className="str">`json:"&lt;10ms"`</span>
                                <br />&nbsp;&nbsp;<span className="id">Uptime</span>        <span className="type">string</span>    <span className="str">`json:"99.999%"`</span>
                                <br />{'}'}
                                <br />
                                <br /><span className="fn">func</span> (<span className="this">s</span> *<span className="cls">BackendSystem</span>) <span className="fn">Scale</span>() <span className="type">error</span> {'{'}
                                <br />&nbsp;&nbsp;<span className="kwd">return</span> <span className="fn">DeployKubernetes</span>()
                                <br />{'}'}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
