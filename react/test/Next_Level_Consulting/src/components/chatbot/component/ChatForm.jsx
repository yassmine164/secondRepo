import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
const inputRef = useRef();

const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = ""; // Clear the input field

    // Update chat history with the user's message
    const updatedHistory = [
    ...chatHistory,
    { role: "user", text: userMessage },
    { role: "model", text: "Thinking..." }, // Add thinking placeholder
    ];
    setChatHistory(updatedHistory);

    // Call the function to generate the bot's response
    generateBotResponse(updatedHistory);
};

return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
    <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
    />
    <button className="material-symbols-rounded">arrow_upward</button>
    </form>
);
};

export default ChatForm;