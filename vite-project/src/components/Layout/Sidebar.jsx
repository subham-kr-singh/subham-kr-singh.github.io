import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Hash, Bell, User, Settings } from 'lucide-react';
import Button from '../UI/Button';
import './Sidebar.css';

const Sidebar = () => {
    const navItems = [
        { icon: <Home size={28} />, label: 'Home', path: '/' },
        { icon: <Hash size={28} />, label: 'Explore', path: '/explore' },
        { icon: <Bell size={28} />, label: 'Notifications', path: '/notifications' },
        { icon: <User size={28} />, label: 'Profile', path: '/profile/me' },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <h2>SocialApp</h2>
            </div>

            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span className="nav-label">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <Button size="lg" className="post-btn">Post</Button>
            </div>
        </aside>
    );
};

export default Sidebar;
