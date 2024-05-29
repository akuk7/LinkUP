import React, { useState } from 'react';
import './chatBox.scss';
import dummyData from '../../assets/data/friends';
import ChatWindow from '../chatWindow/chatWindow';

const ChatBox: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);

  const handleFriendClick = (friendName: string) => {
    setSelectedFriend(null); // Clear the current selection to reset the ChatWindow state
    setTimeout(() => setSelectedFriend(friendName), 0); // Set the new selection after a brief delay
  };

  return (
    <div className="chatbox">
      <div className="chatbox-friends">
        <h3>Friends</h3>
        <ul>
          {dummyData.map(friend => (
            <li key={friend.friendName} onClick={() => handleFriendClick(friend.friendName)}>
              {friend.friendName}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default ChatBox;
