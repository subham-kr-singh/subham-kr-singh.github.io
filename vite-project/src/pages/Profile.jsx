import React from 'react';
import Avatar from '../components/UI/Avatar';
import Button from '../components/UI/Button';

const Profile = () => {
    return (
        <div className="profile-page">
            <div className="profile-header" style={{ padding: '24px', borderBottom: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <Avatar size="xl" fallback="JD" />
                    <Button variant="ghost" style={{ border: '1px solid var(--border-color)', borderRadius: '20px' }}>Edit Profile</Button>
                </div>

                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Jane Doe</h2>
                    <p style={{ color: 'var(--text-muted)' }}>@janedoe</p>
                </div>

                <div style={{ marginTop: '16px' }}>
                    <p>Full-stack developer building cool things on the web. 💻</p>
                </div>

                <div style={{ display: 'flex', gap: '16px', marginTop: '16px', color: 'var(--text-muted)' }}>
                    <span><strong>142</strong> Following</span>
                    <span><strong>2.4k</strong> Followers</span>
                </div>
            </div>

            <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
                No posts yet.
            </div>
        </div>
    );
};

export default Profile;
