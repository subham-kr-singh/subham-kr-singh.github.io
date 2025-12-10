import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import Avatar from '../UI/Avatar';
import Button from '../UI/Button';
import './PostCard.css';

const PostCard = ({
    username,
    handle,
    avatar,
    content,
    image,
    timestamp,
    likes,
    comments
}) => {
    return (
        <article className="post-card">
            <div className="post-avatar">
                <Avatar src={avatar} fallback={username[0]} />
            </div>

            <div className="post-content">
                <div className="post-header">
                    <div className="post-meta">
                        <span className="post-username">{username}</span>
                        <span className="post-handle">@{handle}</span>
                        <span className="post-dot">·</span>
                        <span className="post-time">{timestamp}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="more-btn">
                        <MoreHorizontal size={20} />
                    </Button>
                </div>

                <p className="post-text">{content}</p>

                {image && (
                    <div className="post-image-container">
                        <img src={image} alt="Post content" className="post-image" />
                    </div>
                )}

                <div className="post-actions">
                    <Button variant="ghost" className="action-btn">
                        <MessageCircle size={18} />
                        <span>{comments}</span>
                    </Button>
                    <Button variant="ghost" className="action-btn">
                        <Heart size={18} />
                        <span>{likes}</span>
                    </Button>
                    <Button variant="ghost" className="action-btn">
                        <Share2 size={18} />
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default PostCard;
