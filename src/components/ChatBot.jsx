import React, { useState } from "react";
import './Chatbot.css'; // If you are using an external CSS file

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", fromUser: false },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false); // State to track whether the chat window is open

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessages = [
        ...messages,
        { text: userInput, fromUser: true },
        { text: getBotResponse(userInput), fromUser: false },
      ];
      setMessages(newMessages);
      setUserInput(""); // Clear input
    }
  };

  const getBotResponse = (input) => {
    // Simple hardcoded responses
    if (input.toLowerCase().includes("license")) {
      return "You can sell your unused licenses on our platform easily.";
    }
    return "I'm sorry, I didn't understand that. Can you ask something else?";
  };

  const handleCloseChat = () => {
    setIsChatOpen(false); // Close the chat window
  };

  return (
    <div>
      {/* Circle button to open the chat */}
      <div
        className="chatbot-circle-button"
        onClick={() => setIsChatOpen(true)} // Open the chat window
      >
        <span style={{ color: "white", fontSize: "20px" }}>💬</span>
      </div>

      {/* Chat window */}
      {isChatOpen && (
        <div
          className="chatbot-container"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "300px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            zIndex: 1000,
          }}
        >
          <div
            className="chatbot-header"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px",
              borderRadius: "8px 8px 0 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Chat with us</h3>
            {/* Close button */}
            <button
              onClick={handleCloseChat}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
          <div
            className="chatbot-messages"
            style={{
              height: "200px",
              overflowY: "auto",
              marginTop: "10px",
              padding: "5px",
              borderBottom: "1px solid #ddd",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.fromUser ? "right" : "left",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    backgroundColor: msg.fromUser ? "#DCF8C6" : "#f1f0f0",
                    borderRadius: "10px",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="chatbot-input" style={{ display: "flex", marginTop: "10px" }}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type a message..."
              style={{
                width: "80%",
                padding: "8px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "10px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
