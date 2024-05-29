import React from 'react';
import Post from '../post/post';
import dummyData from '../data/friends';
import './postSection.scss';

const PostSection: React.FC = () => {
  return (
    <div className="post-section">
      {dummyData.map(friend => (
        <div key={friend.friendName} className="friend-posts">
          <h2>{friend.friendName}</h2>
          {friend.posts.map(post => (
            <Post
              key={post.id}
              photos={post.photos}
              message={post.message}
              likes={post.likes}
              comments={post.comments}
              postedAt={post.postedAt}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PostSection;
