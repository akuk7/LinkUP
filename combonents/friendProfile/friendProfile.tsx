import React from 'react';
import './friendProfile.scss'; // Style your profile as per your project structure

interface User {
  id: number;
  friendName: string;
  photo?: string;
  friends?: string[]; // Array of friends, can be empty initially
  posts: {
    id: number;
    photos: string[];
    message: string;
    likes: number;
    comments: { id: number; text: string; user: string }[];
    postedAt: Date;
  }[];
}

interface ProfileProps {
  user: User|null;
}

const FriendProfile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="profile">
      <div className="profile-header">
        <img
          className="profile-photo"
          src={user?.photo || 'https://via.placeholder.com/150'}
          alt={user?.friendName}
        />
        <div className="profile-details">
          <h2>{user?.friendName}</h2>
          <p>{user?.friends ? `${user.friends.length} friends` : '10 friends'}</p>
        </div>
      </div>
      <div className="profile-posts">
        <h3>Posts</h3>
        <div className="posts-grid">
          {user?.posts.map(post => (
            <div key={post.id} className="post">
              <img
                className="post-photo"
                src={post.photos.length > 0 ? post.photos[0] : 'https://via.placeholder.com/150'}
                alt="Post"
              />
              <div className="post-content">
                <p>{post.message}</p>
                <p>{`${post.likes} likes`}</p>
                <ul>
                  {post.comments.map(comment => (
                    <li key={comment.id}>{`${comment.user}: ${comment.text}`}</li>
                  ))}
                </ul>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default FriendProfile;
