import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Simulate an AI response
  const generateAIResponse = (message) => {
    return `AI: You said "${message}"`;
  };

  // Handle user input submission
  const handleSendMessage = (e) => {
    e.preventDefault();

    if (input.trim()) {
      const userMessage = {
        sender: 'User',
        text: input,
      };

      setMessages([...messages, userMessage]);

      // Simulate AI response after user sends a message
      setTimeout(() => {
        const aiMessage = {
          sender: 'AI',
          text: generateAIResponse(input),
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      }, 1000); // Add a delay to simulate AI thinking

      setInput(''); // Clear input after sending message
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender.toLowerCase()}`}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>

      <form className="input-area" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
