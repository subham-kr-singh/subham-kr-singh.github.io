import React from 'react';
import Navbar from '../Sections/Navbar';
import '../UI/Scanline.css';

const Layout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            <div className="scanline-overlay"></div>
            <Navbar />
            <main>
                {children}
            </main>
            <Contact />
        </div>
    );
};

export default Layout;
