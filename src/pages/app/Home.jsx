import { Link } from 'react-router-dom'
import { ChevronRight, Crown, Flame, Swords, Trophy, Zap } from 'lucide-react'
import { categories, dailyHub, tools } from '../../data/mockData'
import { useApp } from '../../context/AppContext'

const toolRoutes = {
  notes: '/app/notes', routine: '/app/routine', reminders: '/app/routine', ai: '/app/ai',
  news: '/app/daily-hub', calendar: '/app/daily-hub', weather: '/app/daily-hub',
  rashifal: '/app/daily-hub', market: '/app/daily-hub',
}

const toolEmoji = {
  notes: '📝', routine: '📅', reminders: '🔔', ai: '✨', news: '📰',
  calendar: '🗓️', weather: '☁️', rashifal: '⭐', market: '📈',
}

export default function Home() {
  const { currentUser } = useApp()
  const u = currentUser

  return (
    <div className="mobile-page">
      <header className="home-header">
        <div className="home-profile">
          <div className="avatar ring-glow">{u.avatar}</div>
          <div>
            <strong>{u.name}</strong>
            <span className="username">@{u.username} · {u.district}</span>
          </div>
        </div>
        {!u.premium && (
          <Link to="/app/subscription" className="premium-badge">
            <Crown size={14} /> PRO
          </Link>
        )}
      </header>

      <div className="stats-card glass-card hero-stats animate-in">
        <div className="stat-row main">
          <div className="stat-block">
            <span className="stat-label">Rating</span>
            <strong className="stat-big gradient-text">{u.rating}</strong>
          </div>
          <div className="stat-divider" />
          <div className="stat-block">
            <span className="stat-label">Rank</span>
            <strong className="stat-big">#{u.rank}</strong>
          </div>
          <div className="stat-divider" />
          <div className="stat-block">
            <span className="stat-label">Streak</span>
            <strong className="stat-big streak"><Flame size={18} /> {u.streak}</strong>
          </div>
        </div>
        <div className="stat-row sub">
          <span>{u.matches} battles</span>
          <span className="win-loss"><span className="win">{u.wins}W</span> · <span className="loss">{u.losses}L</span></span>
          <span>{u.winRate} win rate</span>
        </div>
      </div>

      <Link to="/app/play" className="battle-cta glass-card animate-in delay-1">
        <div className="battle-cta-icon"><Swords size={28} /></div>
        <div>
          <strong>Quick Battle</strong>
          <span>Find an opponent now</span>
        </div>
        <Zap size={20} className="cta-zap" />
      </Link>

      <Link to="/app/daily-challenge" className="daily-banner glass-card animate-in delay-2">
        <div className="daily-icon">🎯</div>
        <div>
          <strong>Daily Challenge</strong>
          <span>Keep your {u.streak}-day streak alive</span>
        </div>
        <ChevronRight size={20} />
      </Link>

      <section className="section animate-in delay-3">
        <div className="section-head">
          <h2>Battle arenas</h2>
        </div>
        <div className="category-grid">
          {categories.map((c) => (
            <Link key={c.id} to="/app/play" className={`category-card cat-${c.color} glass-card`}>
              <strong>{c.name}</strong>
              <span>{c.desc}</span>
              <small>{c.players} online</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head"><h2>Toolkit</h2></div>
        <div className="tools-grid">
          {tools.map((t) => (
            <Link key={t.id} to={toolRoutes[t.id] || '/app'} className="tool-chip glass-card">
              <span>{toolEmoji[t.icon]}</span>
              {t.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Leaderboard</h2>
          <Link to="/app/leaderboard" className="link-sm">View all</Link>
        </div>
        <Link to="/app/leaderboard" className="leader-preview glass-card">
          <Trophy size={20} className="trophy-gold" />
          <span>Rank <strong>#{u.rank}</strong> · {u.rating} pts this month</span>
          <ChevronRight size={18} />
        </Link>
      </section>

      <section className="section">
        <div className="section-head"><h2>🇳🇵 Today in Nepal</h2></div>
        <Link to="/app/daily-hub" className="hub-preview glass-card">
          <div><strong>{dailyHub.calendar.bs}</strong><span>{dailyHub.calendar.festival}</span></div>
          <div><strong>{dailyHub.weather.temp}</strong><span>{dailyHub.weather.city}</span></div>
          <ChevronRight size={18} />
        </Link>
      </section>
    </div>
  )
}
