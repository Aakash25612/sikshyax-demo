import { useState } from 'react'
import { Crown, Send } from 'lucide-react'
import { aiMessages } from '../../data/mockData'
import { Link } from 'react-router-dom'

const suggestions = [
  'Explain Ohm\'s law',
  'Generate 5 CEE practice questions',
  'Study plan for CEE in 30 days',
  'Explain photosynthesis simply',
]

export default function AITutor() {
  const [messages, setMessages] = useState(aiMessages)
  const [input, setInput] = useState('')

  const send = () => {
    if (!input.trim()) return
    setMessages([...messages, { role: 'user', text: input }, {
      role: 'ai',
      text: 'Great question! For CEE preparation, focus on understanding the core concept first, then practice related MCQs. Would you like me to generate practice questions on this topic?',
    }])
    setInput('')
  }

  return (
    <div className="mobile-page ai-page">
      <header className="page-title-bar">
        <h1>AI Tutor</h1>
        <span className="premium-tag"><Crown size={12} /> 3/5 free</span>
      </header>

      <div className="ai-chat">
        {messages.map((m, i) => (
          <div key={i} className={`chat-bubble ${m.role}`}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="suggestions">
        {suggestions.map((s) => (
          <button key={s} type="button" className="suggestion-chip" onClick={() => setInput(s)}>{s}</button>
        ))}
      </div>

      <div className="chat-input-bar">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about your exam..."
          onKeyDown={(e) => e.key === 'Enter' && send()}
        />
        <button type="button" className="send-btn" onClick={send} aria-label="Send"><Send size={18} /></button>
      </div>

      <Link to="/app/subscription" className="upgrade-banner small">
        <Crown size={16} />
        <span>Unlimited AI with Premium</span>
      </Link>
    </div>
  )
}
