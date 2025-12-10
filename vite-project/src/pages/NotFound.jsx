import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container fade-in">
            <div className="void-background"></div>

            <div className="glitch-wrapper">
                <h1 className="glitch-text" data-text="404">404</h1>
            </div>

            <h2 className="not-found-title">Lost in the Void?</h2>

            <p className="not-found-desc">
                The page you're looking for seems to have drifted away.
                Let's get you back to solid ground.
            </p>

            <Link to="/" className="btn btn-primary">
                <Home size={20} />
                <span>Return to Base</span>
            </Link>
        </div>
    );
};

export default NotFound;
