import { Link } from 'react-router-dom'
import { ChevronRight, Crown, Flame, Trophy } from 'lucide-react'
import { categories, dailyHub, tools } from '../../data/mockData'
import { useApp } from '../../context/AppContext'

const toolRoutes = {
  notes: '/app/notes',
  routine: '/app/routine',
  reminders: '/app/routine',
  ai: '/app/ai',
  news: '/app/daily-hub',
  calendar: '/app/daily-hub',
  weather: '/app/daily-hub',
  rashifal: '/app/daily-hub',
  market: '/app/daily-hub',
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
          <div className="avatar">{u.avatar}</div>
          <div>
            <strong>{u.name}</strong>
            <span className="username">@{u.username} · {u.district}</span>
          </div>
        </div>
        {!u.premium && (
          <Link to="/app/subscription" className="premium-badge">
            <Crown size={14} /> Go Premium
          </Link>
        )}
      </header>

      <div className="stats-card">
        <div className="stat-row main">
          <div>
            <span className="stat-label">Rating</span>
            <strong className="stat-big">{u.rating}</strong>
          </div>
          <div className="stat-divider" />
          <div>
            <span className="stat-label">Rank</span>
            <strong className="stat-big">#{u.rank}</strong>
          </div>
          <div className="stat-divider" />
          <div>
            <span className="stat-label">Streak</span>
            <strong className="stat-big streak"><Flame size={18} /> {u.streak}</strong>
          </div>
        </div>
        <div className="stat-row sub">
          <span>{u.matches} matches</span>
          <span>{u.wins}W · {u.losses}L</span>
          <span>{u.winRate} win rate</span>
        </div>
      </div>

      <Link to="/app/daily-challenge" className="daily-banner">
        <div>
          <strong>Daily Challenge</strong>
          <span>Complete today's quiz · Earn rewards</span>
        </div>
        <ChevronRight size={20} />
      </Link>

      <section className="section">
        <div className="section-head">
          <h2>Exam categories</h2>
        </div>
        <div className="category-grid">
          {categories.map((c) => (
            <Link key={c.id} to="/app/play" className={`category-card cat-${c.color}`}>
              <strong>{c.name}</strong>
              <span>{c.desc}</span>
              <small>{c.players} players</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Tools</h2>
        </div>
        <div className="tools-grid">
          {tools.map((t) => (
            <Link key={t.id} to={toolRoutes[t.id] || '/app'} className="tool-chip">
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
        <Link to="/app/leaderboard" className="leader-preview">
          <Trophy size={20} />
          <span>Monthly rank #{u.rank} · {u.rating} pts</span>
          <ChevronRight size={18} />
        </Link>
      </section>

      <section className="section">
        <div className="section-head"><h2>Today in Nepal</h2></div>
        <Link to="/app/daily-hub" className="hub-preview">
          <div><strong>{dailyHub.calendar.bs}</strong><span>{dailyHub.calendar.festival}</span></div>
          <div><strong>{dailyHub.weather.temp}</strong><span>{dailyHub.weather.city}</span></div>
          <ChevronRight size={18} />
        </Link>
      </section>
    </div>
  )
}
