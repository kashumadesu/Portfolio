// components/ChatBot.jsx
import { useState, useRef, useEffect } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Michael's portfolio assistant. Ask me anything about his projects, technical skills, or credentials.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "Tell me about your projects",
    "What are your core skills?",
    "Show your certifications",
    "How can I contact you?",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isOpen]);

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    // 1. Append user message & clear input
    const userMessage = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // 2. Insert empty placeholder message for incoming bot stream
    setMessages((prev) => [...prev, { sender: "bot", text: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      if (!res.ok) {
        let errMsg = "Something went wrong. Please try again later.";
        try {
          const errData = await res.json();
          if (errData.reply) errMsg = errData.reply;
        } catch {
          // fallback error text
        }
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { sender: "bot", text: errMsg };
          return updated;
        });
        return;
      }

      // 3. Stream reader chunks directly into the last message
      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          const lastIdx = updated.length - 1;
          updated[lastIdx] = {
            ...updated[lastIdx],
            text: updated[lastIdx].text + chunk,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        const lastIdx = updated.length - 1;
        updated[lastIdx] = {
          sender: "bot",
          text: "Connection lost. Please try again in a moment.",
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <aside aria-label="AI Assistant" className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[380px] h-[480px] bg-[#15111E] border border-purple-500/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-md">
          {/* Header */}
          <div className="p-3.5 bg-[#1C1628] border-b border-purple-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  AI Assistant
                </h3>
                <p className="text-[10px] font-mono text-purple-400">
                  Online • Ask portfolio questions
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-purple-400 hover:text-white text-xs font-mono px-2 py-1 bg-[#0B090E] border border-purple-900/60 rounded transition"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-[#0B090E]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {/* Only render message bubble if text exists or it's a user message */}
                {(msg.text || msg.sender === "user") && (
                  <div
                    className={`max-w-[82%] p-3 rounded-xl leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-purple-600 text-white font-medium"
                        : "bg-[#0B090E] text-purple-200 border border-purple-900/60 font-mono text-[11px] whitespace-pre-wrap"
                    }`}
                  >
                    {msg.text}
                  </div>
                )}
              </div>
            ))}

            {/* Bouncing loading indicator while waiting for the first chunk */}
            {isLoading &&
              messages.length > 0 &&
              messages[messages.length - 1].sender === "bot" &&
              messages[messages.length - 1].text === "" && (
                <div className="flex justify-start">
                  <div className="bg-[#0B090E] text-purple-400 p-2.5 rounded-xl border border-purple-900/60 font-mono text-[10px] flex items-center gap-1.5">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce [animation-delay:0.2s]">●</span>
                    <span className="animate-bounce [animation-delay:0.4s]">●</span>
                  </div>
                </div>
              )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-1.5 bg-[#0B090E]/60 border-t border-purple-950 flex gap-1.5 overflow-x-auto scrollbar-none">
            {quickPrompts.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                disabled={isLoading}
                className="whitespace-nowrap text-[10px] font-mono px-2 py-1 bg-[#1C1628] hover:bg-purple-900/50 disabled:opacity-40 border border-purple-900 text-purple-300 rounded-md transition shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#1C1628] border-t border-purple-900/60 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-[#0B090E] border border-purple-900 text-white text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-purple-400 font-mono placeholder:text-purple-400/50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-3.5 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white text-xs font-mono font-bold rounded-xl transition"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white text-xs font-mono font-bold rounded-full shadow-lg shadow-purple-950/60 border border-purple-400 transition-all duration-200 hover:scale-105 ml-auto"
        aria-label="Toggle Chatbot"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <span>{isOpen ? "CLOSE" : "CHAT"}</span>
      </button>
    </aside>
  );
}