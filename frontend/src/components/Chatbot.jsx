import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "🤖 Hi! Ask me anything...", isBot: true },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMsg = input.trim();
    if (!userMsg) return;

    // Add user message
    setMessages((prev) => [...prev, { text: `You: ${userMsg}`, isBot: false }]);
    setInput("");

    try {
      const res = await fetch("https://portfolio-a7qc.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { text: `🤖 ${data.reply}`, isBot: true },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Error contacting AI", isBot: true },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chatbot */}
      {isOpen ? (
        <div className="fixed bottom-2 right-2 sm:bottom-6 sm:right-6 w-[calc(100vw-16px)] sm:w-80 max-w-[380px] bg-black dark:bg-white text-white dark:text-black border border-red-500 rounded-xl shadow-lg flex flex-col z-50">
          {/* Header */}
          <div className="bg-red-600 text-white px-4 py-2 rounded-t-xl flex justify-between items-center">
            <span className="font-semibold">AI Chatbot</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 sm:p-3 overflow-y-auto space-y-2 text-xs sm:text-sm max-h-48 sm:max-h-60">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.isBot
                    ? "text-gray-300 dark:text-gray-700"
                    : "text-red-400 text-right"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t border-red-500 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-l bg-red-950 dark:bg-red-100 dark:text-black focus:outline-none placeholder-red-400"
            />
            <button
              onClick={sendMessage}
              className="bg-red-600 px-3 rounded-r text-white hover:bg-red-700"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-2 right-2 sm:bottom-6 sm:right-6 bg-red-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-red-700 z-50 text-sm sm:text-base"
        >
          💬
        </button>
      )}
    </>
  );
};

export default Chatbot;
