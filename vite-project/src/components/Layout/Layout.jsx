import React from 'react';
import Navbar from '../Sections/Navbar';
import Contact from '../Sections/Contact';

const Layout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <main>
                {children}
            </main>
            <Contact />
        </div>
    );
};

export default Layout;
