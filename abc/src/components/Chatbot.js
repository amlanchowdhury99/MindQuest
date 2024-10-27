import React, { useState } from 'react';
import './css/chatbot.css';
const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <span role="img" aria-label="chat">💬</span>
            </button>

            {isOpen && <div>Chatbot UI</div>}
        </div>
    );
};

export default Chatbot;
