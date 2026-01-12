// src/pages/Chatbot.jsx
import React, { useState, useEffect, useRef } from "react";
import { Send, Bot, X, MessageSquare } from "lucide-react";
import api from "../services/api";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const initialMessage = {
    sender: "bot",
    text: "Hello! I'm your NeuroCare AI assistant. How are you feeling today?",
    timestamp: new Date(),
  };

  const [messages, setMessages] = useState([initialMessage]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ✅ Reset chat when closing
  const closeChat = () => {
    setIsOpen(false);
    setMessages([initialMessage]);
    setInputMessage("");
    setIsTyping(false);
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      sender: "user",
      text: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const data = await api.sendMessage(inputMessage);
      await new Promise((res) => setTimeout(res, 600));

      const botMessage = {
        sender: "bot",
        text:
          data.response ||
          data.answer ||
          data.reply ||
          data.message ||
          "Sorry, I couldn't understand that.",
        sentiment: data.sentiment,
        emotion: data.emotion,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I couldn't connect to the server.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="chatbot-toggle-button"
        >
          <MessageSquare size={28} color="white" />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-container">
          {/* Header */}
          <div className="chatbot-header">
            <div>
              <Bot size={24} /> NeuroCare AI
            </div>
            <button onClick={closeChat}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${
                  msg.sender === "user" ? "user-msg" : "bot-msg"
                }`}
              >
                {msg.text}
                <div className="chat-timestamp">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ))}
            {isTyping && <div className="bot-msg">Typing...</div>}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
