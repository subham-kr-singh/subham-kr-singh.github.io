import React from 'react';
import './Avatar.css';

const Avatar = ({ src, alt, fallback, size = 'md' }) => {
    return (
        <div className={`avatar avatar-${size}`}>
            {src ? (
                <img src={src} alt={alt || 'Avatar'} className="avatar-img" />
            ) : (
                <div className="avatar-fallback">{fallback || '?'}</div>
            )}
        </div>
    );
};

export default Avatar;
