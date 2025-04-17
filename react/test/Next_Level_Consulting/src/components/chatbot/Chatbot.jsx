import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./component/ChatbotIcon";
import ChatForm from "./component/ChatForm";
import ChatMessage from "./component/ChatMessage";
import "./Chatbot.css";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: false,
      role: "model",
      text: "Hey there 👋🏻 How can I help you today?",
    },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };

    // Prepare the API request payload
    const formattedHistory = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formattedHistory }),
    };

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=AIzaSyDOt_Cjws3rD40PUoDnXwUQTiI5Ma1T1N0', requestOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Something went wrong!");
      }

      const botResponse = data.candidates[0]?.content?.parts[0]?.text
        ?.replace(/\*\*(.*?)\*\*/g, "$1")
        ?.trim();

      updateHistory(botResponse || "Sorry, I couldn't understand that.");
    } catch (error) {
      updateHistory("Sorry, I couldn't process your request. Please try again.", true);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      {/* Chatbot Toggle Button */}
      <button onClick={() => setShowChatbot((prev) => !prev)} id="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">Close</span>
      </button>

      {/* Chatbot Popup */}
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button
            onClick={() => setShowChatbot((prev) => !prev)}
            className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hello! I'm your virtual assistant. How can I help you today?
            </p>
          </div>
          
            {/*render the chat history dynamically*/}
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
          ))}
          
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;