import React, { useState } from 'react';
import './mainPage.scss';
import PostSection from '../postSection/postSection';
import Sidebar from '../sideBar/sideBar';
import ChatWindow from '../chatWindow/chatWindow';
import dummyData from '../../assets/data/friends';
import Profile from '../profile/profile';
import profile from '../../assets/data/profile';
import FriendProfile from '../friendProfile/friendProfile';

const MainPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home'); // Default active tab
  const [data, setData] = useState(dummyData);
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleFriendSelect = (friendId: number) => {
    setActiveTab('chat'); // Switch to chat tab when a friend is selected
    setSelectedFriend(friendId);
  };
  
  interface ChatMessage {
    id: number;
    text: string;
    user: string;
    timestamp: Date;
  }
  const [selectedFriend, setSelectedFriend] = useState<number | null>(null);
  const friend = dummyData.find((friend) => friend.id === selectedFriend);

  return (
    <div className="main-page">
      <h1>Social Media Wall</h1>

      <Sidebar activeTab={activeTab} onTabClick={handleTabClick} />

      <div className="content">
        {activeTab === 'home' && (
          <div className="post-section">
            <PostSection />
          </div>
        )}

        {activeTab === 'chat' && selectedFriend && (
          <ChatWindow setActiveTab={setActiveTab} friendId={selectedFriend} />
        )}

        {/* Add more conditions for other tabs (Search, Friends, Add Post, Profile) */}
        {activeTab === 'search' && (
          <div className="search-section">
            <h2>Search Section</h2>
            {/* Add search component or functionality here */}
          </div>
        )}

        {activeTab === 'add-post' && (
          <div className="add-post-section">
            <h2>Add Post Section</h2>
            {/* Add component for adding a new post */}
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="profile-section">
            <Profile user={profile}/>
            {/* Add component for displaying user profile */}
          </div>
        )}
        {activeTab === 'friend-profile' && (
          <div className="profile-section">
            <FriendProfile user={friend?friend:null}/>
            {/* Add component for displaying user profile */}
          </div>
        )}
      </div>

      <div className="chatbox">
        <div className="chatbox-friends">
          <h2>Friends</h2>
          <ul>
            {dummyData.map((friend) => (
              <li key={friend.friendName} onClick={() => handleFriendSelect(friend.id)}>
                {friend.friendName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
