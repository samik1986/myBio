import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Key } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { publications } from '../../data/publicationsData';
import './GeminiAssistant.css';

const GeminiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm Samik's AI Assistant powered by Gemini. Ask me anything about his projects, publications, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_GEMINI_API_KEY || '');
  const [showKeyInput, setShowKeyInput] = useState(!import.meta.env.VITE_GEMINI_API_KEY);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const generateSystemPrompt = () => {
    return `You are a helpful AI assistant for Samik Banerjee's portfolio website. 
Answer questions using ONLY the following information about his work. Be concise and friendly.
If a user asks something unrelated, politely decline.

Projects:
${projectsData.map(p => `- ${p.title || p.name}: ${p.description}`).join('\n')}

Publications:
${publications.map(p => `- ${p.title} (${p.year})`).join('\n')}
`;
  };

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Please provide a Gemini API Key to chat!" }]);
      setShowKeyInput(true);
      return;
    }

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const history = messages.slice(1).filter(m => !m.text.includes("API Key")).map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      const payload = {
        system_instruction: { parts: [{ text: generateSystemPrompt() }] },
        contents: [
          ...history,
          { role: 'user', parts: [{ text: userMessage.text }] }
        ]
      };

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      
      if (data.error) {
        throw new Error(data.error.message || 'API Error');
      }

      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setShowKeyInput(false);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', text: `Error: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  const renderText = (text) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line.replace(/\*\*(.*?)\*\*/g, '$1')}
        <br/>
      </span>
    ));
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        className={`gemini-fab ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
      >
        <Bot size={28} />
      </button>

      {/* Chat Window */}
      <div className={`gemini-window glass ${isOpen ? 'open' : ''}`}>
        <div className="gemini-header">
          <div className="gemini-header-title">
            <Bot size={20} className="gemini-icon" />
            <h3>Portfolio AI</h3>
          </div>
          <button className="gemini-close" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="gemini-messages">
          {messages.map((m, i) => (
            <div key={i} className={`gemini-message-wrapper ${m.role}`}>
              <div className="gemini-avatar">
                {m.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
              </div>
              <div className={`gemini-bubble ${m.role}`}>
                {renderText(m.text)}
              </div>
            </div>
          ))}
          {loading && (
            <div className="gemini-message-wrapper assistant">
              <div className="gemini-avatar"><Bot size={16} /></div>
              <div className="gemini-bubble assistant typing">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {showKeyInput && (
          <div className="gemini-key-input">
            <Key size={14} className="key-icon" />
            <input 
              type="password" 
              placeholder="Enter Gemini API Key..." 
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <button onClick={() => setShowKeyInput(false)} className="save-key-btn">Save</button>
          </div>
        )}

        <form className="gemini-input-area" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Ask about Samik's work..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button type="submit" disabled={loading || !input.trim()}>
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};

export default GeminiAssistant;
