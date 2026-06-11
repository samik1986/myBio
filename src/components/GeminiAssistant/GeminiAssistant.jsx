import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData, githubProjects } from '../../data/projectsData';
import { publications } from '../../data/publicationsData';
import './GeminiAssistant.css';

const GeminiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm Samik's AI Assistant powered by Gemini. Ask me anything about his projects, publications, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeSearchType, setActiveSearchType] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  
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

GitHub Repos:
${githubProjects.map(r => `- ${r.name} (${r.language})`).join('\n')}
`;
  };

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;
    await processMessage(input);
  };

  const processMessage = async (text) => {
    const userMessage = { role: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const history = messages.slice(1).map(m => ({
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

      const res = await fetch('/api/chat', {
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
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', text: `Error: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  const uniqueYears = [...new Set(publications.map(p => p.year?.toString()).filter(Boolean))].sort((a, b) => b - a);
  const uniqueCategories = [...new Set(publications.flatMap(p => p.categories || []))].sort();
  const uniqueSubCategories = [...new Set(publications.flatMap(p => p.subCategories || []))].sort();

  const uniqueProjCategories = [...new Set(projectsData.map(p => p.category).filter(Boolean))].sort();
  const uniqueProjTechs = [...new Set(projectsData.flatMap(p => p.technologies || []))].sort();

  const uniqueRepoLanguages = [...new Set(githubProjects.map(r => r.language).filter(Boolean))].sort();

  const toggleFilter = (filter) => {
    setSelectedFilters(prev => 
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const handleFilterSearch = () => {
    if (selectedFilters.length === 0) return;
    const typeLabel = activeSearchType === 'pubs' ? 'publications' : activeSearchType === 'projects' ? 'projects' : 'github repositories';
    const query = `Find ${typeLabel} related to: ${selectedFilters.join(', ')}`;
    setActiveSearchType(null);
    setSelectedFilters([]);
    processMessage(query);
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

        <div className="gemini-quick-actions" style={{ display: 'flex', gap: '8px', padding: '0 16px 12px', overflowX: 'auto', flexShrink: 0 }}>
            <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '6px 12px', whiteSpace: 'nowrap' }} onClick={() => setActiveSearchType(activeSearchType === 'pubs' ? null : 'pubs')}>
              {activeSearchType === 'pubs' ? '✕ Close Pubs' : '⚡ Pubs Search'}
            </button>
            <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '6px 12px', whiteSpace: 'nowrap' }} onClick={() => setActiveSearchType(activeSearchType === 'projects' ? null : 'projects')}>
              {activeSearchType === 'projects' ? '✕ Close Proj' : '⚡ Proj Search'}
            </button>
            <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '6px 12px', whiteSpace: 'nowrap' }} onClick={() => setActiveSearchType(activeSearchType === 'repos' ? null : 'repos')}>
              {activeSearchType === 'repos' ? '✕ Close Repos' : '⚡ Repo Search'}
            </button>
        </div>

        {activeSearchType === 'pubs' && (
          <div className="gemini-filters-panel" style={{ padding: '0 16px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            
            <p style={{ fontSize: '0.8rem', marginBottom: '6px', opacity: 0.8, marginTop: '8px' }}>Filter by Year:</p>
            <select className="gemini-dropdown" defaultValue="" onChange={(e) => { if (e.target.value && !selectedFilters.includes(e.target.value)) toggleFilter(e.target.value); e.target.value = ""; }}>
              <option value="" disabled>Select Year...</option>
              {uniqueYears.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>

            <p style={{ fontSize: '0.8rem', marginBottom: '6px', opacity: 0.8 }}>Filter by Category:</p>
            <select className="gemini-dropdown" defaultValue="" onChange={(e) => { if (e.target.value && !selectedFilters.includes(e.target.value)) toggleFilter(e.target.value); e.target.value = ""; }}>
              <option value="" disabled>Select Category...</option>
              {uniqueCategories.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>

            <p style={{ fontSize: '0.8rem', marginBottom: '6px', opacity: 0.8 }}>Filter by Sub-Category:</p>
            <select className="gemini-dropdown" defaultValue="" onChange={(e) => { if (e.target.value && !selectedFilters.includes(e.target.value)) toggleFilter(e.target.value); e.target.value = ""; }}>
              <option value="" disabled>Select Sub-Category...</option>
              {uniqueSubCategories.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>

            {selectedFilters.length > 0 && (
              <div className="gemini-selected-tags">
                {selectedFilters.map(f => (
                  <span key={f} className="gemini-tag" onClick={() => toggleFilter(f)}>{f} ✕</span>
                ))}
              </div>
            )}
            {selectedFilters.length > 0 && (
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', fontSize: '0.85rem', padding: '8px' }}
                onClick={handleFilterSearch}
              >
                Search Selected ({selectedFilters.length})
              </button>
            )}
          </div>
        )}

        {activeSearchType === 'projects' && (
          <div className="gemini-filters-panel" style={{ padding: '0 16px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            
            <p style={{ fontSize: '0.8rem', marginBottom: '6px', opacity: 0.8, marginTop: '8px' }}>Filter by Category:</p>
            <select className="gemini-dropdown" defaultValue="" onChange={(e) => { if (e.target.value && !selectedFilters.includes(e.target.value)) toggleFilter(e.target.value); e.target.value = ""; }}>
              <option value="" disabled>Select Category...</option>
              {uniqueProjCategories.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>

            <p style={{ fontSize: '0.8rem', marginBottom: '6px', opacity: 0.8 }}>Filter by Technologies:</p>
            <select className="gemini-dropdown" defaultValue="" onChange={(e) => { if (e.target.value && !selectedFilters.includes(e.target.value)) toggleFilter(e.target.value); e.target.value = ""; }}>
              <option value="" disabled>Select Technology...</option>
              {uniqueProjTechs.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>

            {selectedFilters.length > 0 && (
              <div className="gemini-selected-tags">
                {selectedFilters.map(f => (
                  <span key={f} className="gemini-tag" onClick={() => toggleFilter(f)}>{f} ✕</span>
                ))}
              </div>
            )}
            {selectedFilters.length > 0 && (
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', fontSize: '0.85rem', padding: '8px' }}
                onClick={handleFilterSearch}
              >
                Search Selected ({selectedFilters.length})
              </button>
            )}
          </div>
        )}

        {activeSearchType === 'repos' && (
          <div className="gemini-filters-panel" style={{ padding: '0 16px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            
            <p style={{ fontSize: '0.8rem', marginBottom: '6px', opacity: 0.8, marginTop: '8px' }}>Filter by Language:</p>
            <select className="gemini-dropdown" defaultValue="" onChange={(e) => { if (e.target.value && !selectedFilters.includes(e.target.value)) toggleFilter(e.target.value); e.target.value = ""; }}>
              <option value="" disabled>Select Language...</option>
              {uniqueRepoLanguages.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>

            {selectedFilters.length > 0 && (
              <div className="gemini-selected-tags">
                {selectedFilters.map(f => (
                  <span key={f} className="gemini-tag" onClick={() => toggleFilter(f)}>{f} ✕</span>
                ))}
              </div>
            )}
            {selectedFilters.length > 0 && (
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', fontSize: '0.85rem', padding: '8px' }}
                onClick={handleFilterSearch}
              >
                Search Selected ({selectedFilters.length})
              </button>
            )}
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
