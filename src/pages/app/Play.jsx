import { Link } from 'react-router-dom'
import { Bot, Crown, Globe, Lock, Swords, Users } from 'lucide-react'
import { tournaments } from '../../data/mockData'

const modes = [
  { to: '/app/game', icon: Globe, title: 'Online Match', desc: 'Match similar rating players', premium: true },
  { to: '/app/friend-match', icon: Users, title: 'Play With Friend', desc: 'Create or join a room', premium: true },
  { to: '/app/game?bot=1', icon: Bot, title: 'Play Against Bot', desc: 'Human-like bot opponents', premium: true },
]

const questionCounts = [10, 15, 30]

export default function Play() {
  return (
    <div className="mobile-page">
      <header className="page-title-bar">
        <h1>Play</h1>
        <span className="premium-tag"><Crown size={12} /> Premium</span>
      </header>

      <section className="section">
        <h2 className="section-label">Quick Game</h2>
        <div className="option-group">
          <p className="option-label">Questions</p>
          <div className="pill-row">
            {questionCounts.map((n, i) => (
              <button key={n} type="button" className={`pill ${i === 1 ? 'active' : ''}`}>{n}</button>
            ))}
          </div>
        </div>
        <div className="option-group">
          <p className="option-label">Source</p>
          <div className="pill-row">
            {['Subject Wise', 'Full Category', 'Mixed'].map((s, i) => (
              <button key={s} type="button" className={`pill ${i === 2 ? 'active' : ''}`}>{s}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-label">Game modes</h2>
        {modes.map(({ to, icon: Icon, title, desc, premium }) => (
          <Link key={title} to={to} className="mode-card">
            <div className="mode-icon"><Icon size={22} /></div>
            <div className="mode-info">
              <strong>{title}</strong>
              <span>{desc}</span>
            </div>
            {premium && <Lock size={16} className="lock-icon" />}
          </Link>
        ))}
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Tournaments</h2>
          <span className="premium-tag"><Crown size={12} /> Premium</span>
        </div>
        {tournaments.map((t) => (
          <div key={t.id} className="tournament-card">
            <div className="tournament-top">
              <Swords size={18} />
              <strong>{t.name}</strong>
              <span className={`badge status-${t.status}`}>{t.status}</span>
            </div>
            <p>{t.category} · {t.players} players · Prize {t.prize}</p>
            <small>{t.date}</small>
            <button type="button" className="btn btn-primary btn-sm btn-full">Register</button>
          </div>
        ))}
      </section>

      <Link to="/app/subscription" className="upgrade-banner">
        <Crown size={18} />
        <span>Unlock Quick Game, Tournaments & unlimited AI</span>
      </Link>
    </div>
  )
}
