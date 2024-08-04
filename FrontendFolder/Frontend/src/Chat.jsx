import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [chatSocket, setChatSocket] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = new WebSocket(`ws://${window.location.host}/ws/chat/public_room/`);
    setChatSocket(socket);

    socket.onopen = () => {
      console.log('Chat socket successfully connected.');
    };

    socket.onclose = () => {
      console.log('Chat socket closed unexpectedly');
    };

    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log('Received message:', data.message);
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (chatSocket && chatSocket.readyState === WebSocket.OPEN) {
      chatSocket.send(JSON.stringify({
        'message': message
      }));
      setMessage('');
    } else {
      console.log('WebSocket is not open');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Welcome to Room</h3>
      <div className="row">
        <div className="col-lg-4">
          <div className="w-100">
            <div className="mb-3">
              <label htmlFor="textMessage" className="form-label">Enter your message:</label>
              <input 
                type="text" 
                className="form-control" 
                id="textMessage" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
              />
            </div>
            <button 
              id="addMessage" 
              className="btn btn-primary rounded-1" 
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
        <div className="col-lg-8">
          <div id="messages" className="mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
