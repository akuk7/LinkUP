import React, { useState } from 'react';
import './post.scss';

interface Comment {
  id: number;
  text: string;
  user: string;
}

interface PostProps {
  photos: string[];
  message: string;
  likes: number;
  comments: Comment[];
  postedAt: Date;
  friendName:string;
}

const Post: React.FC<PostProps> = ({ photos, message, likes, comments,friendName,postedAt}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj: Comment = {
        id: commentList.length + 1,
        text: newComment,
        user: 'CurrentUser' // Replace with actual current user logic
      };
      setCommentList([...commentList, newCommentObj]);
      setNewComment('');
    }

  };
  const formatDate = (date: Date): string => {
    const now = new Date();
    const diffMillis = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMillis / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
  
    if (diffMinutes < 60) {
      return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else {
      const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      };
      return date.toLocaleDateString('en-US', options);
    }
  };

  return (
    <div className="post">
        <div className="post-user-name">{friendName}</div>
      <div className="post-photos">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Post ${index}`} />
        ))}
      </div>
      <div className="post-message">{message}</div>
      <div className="post-actions">
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
          {liked ? 'Unlike' : 'Like'} ({likeCount})
        </button>
        <button className="comment-button" onClick={handleComment}>
          Comment
        </button>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
      </div>
      <div className="date">{formatDate(postedAt)}</div>
      <div className="post-comments">
        <h4>Comments</h4>
        {commentList.length === 0 && <p>No comments yet.</p>}
        {commentList.map((comment, index) => (
          <div key={index} className="comment">
            <strong>{comment.user}:</strong> {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
