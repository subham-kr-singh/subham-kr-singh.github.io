import React from 'react';
import PostCard from './PostCard';

const MOCK_POSTS = [
    {
        id: 1,
        username: 'Jane Doe',
        handle: 'janedoe',
        avatar: '',
        content: 'Just finished building a new feature for my app! 🚀 #coding #webdev',
        timestamp: '2h',
        likes: 124,
        comments: 18,
    },
    {
        id: 2,
        username: 'John Smith',
        handle: 'johnsmith',
        avatar: '',
        content: 'The new VS Code update is fire! 🔥 Anyone else tried it?',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        timestamp: '4h',
        likes: 89,
        comments: 5,
    },
    {
        id: 3,
        username: 'React Official',
        handle: 'reactjs',
        avatar: '',
        content: 'React 19 is coming soon. Stay tuned for more updates!',
        timestamp: '1d',
        likes: 5420,
        comments: 320,
    }
];

const Feed = () => {
    return (
        <div className="feed">
            {MOCK_POSTS.map(post => (
                <PostCard key={post.id} {...post} />
            ))}
        </div>
    );
};

export default Feed;
