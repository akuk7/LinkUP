import React, { useState } from 'react';
import './chatWindow.scss';
import dummyData from '../../assets/data/friends';

interface ChatMessage {
  id: number;
  text: string;
  user: string;
  timestamp: Date;
}

interface ChatWindowProps {
  
  friendId: number;
  setActiveTab: (tab: string) => void;
  
}

const ChatWindow: React.FC<ChatWindowProps> = ({ friendId,setActiveTab}) => {
  const [newMessage, setNewMessage] = useState('');
  const friend = dummyData.find((friend) => friend.id === friendId);

  if (!friend) {
    return <div>Friend not found</div>;
  }

 

  if (!friend) {
    return <div>Friend not found</div>;
  }

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      const newMessageObj: ChatMessage = {
        id: friend.chat.length + 1,
        text: newMessage,
        user: 'You', // Replace with actual user logic
        timestamp: new Date(),
      };
     
    }
  };
  const goToProfile = () => {
    setActiveTab('friend-profile');
  };
  return (
    <div className="chat-window">
      <h2 onClick={goToProfile}>{friend.friendName}</h2>
      <div className="chat-messages">
        {friend.chat.map((message) => (
          <div
            key={message.id}
            className={`message ${message.user === 'You' ? 'sent' : 'received'}`}
          >
            <p>{message.text}</p>
            <span className="timestamp">
              {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
        ))}
        {/* {chatHistory.map((message) => (
          <div key={message.id} className="message sent">
            <p>{message.text}</p>
            <span className="timestamp">
              {message.timestamp.toLocaleTimeString()}
            </span>
          </div>
        ))} */}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
