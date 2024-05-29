import React from 'react';
import Post from '../post/post';
import './postSection.scss';
import dummyData from '../../assets/data/friends';
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
interface PostWithFriendId extends  PostProps {
  friendName : string;
}

const PostSection: React.FC = () => {
  // Flatten all posts into a single array with friendId included
  const allPosts: PostWithFriendId[] = dummyData.reduce<PostWithFriendId[]>((acc, friend) => {
    return acc.concat(
      friend.posts.map(post => ({
        ...post,
        friendName: friend.friendName as string  // Ensure friendId is typed as number
      }))
    );
  }, []);

  // Sort posts by descending order of postedAt timestamp
  allPosts.sort((a, b) => (b.postedAt.getTime() - a.postedAt.getTime()));

  return (
    <div className="post-section">
      {allPosts.map(post => (
        <Post
          friendName={post.friendName}
          photos={post.photos}
          message={post.message}
          likes={post.likes}
          comments={post.comments}
          postedAt={post.postedAt}
          
        />
      ))}
    </div>
  );
};

export default PostSection;
