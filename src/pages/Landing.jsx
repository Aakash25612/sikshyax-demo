import { Link } from 'react-router-dom'
import { Swords, Trophy, Zap } from 'lucide-react'

const features = [
  'Multiplayer MCQ battles',
  'CEE · EPS Korea · Loksewa · Engineering',
  'Friend rooms & online matchmaking',
  'AI Tutor & daily challenges',
  'Leaderboards & tournaments',
]

export default function Landing() {
  return (
    <div className="landing gaming-bg">
      <div className="mesh-glow mesh-1" />
      <div className="mesh-glow mesh-2" />
      <div className="mesh-glow mesh-3" />

      <nav className="landing-nav glass-bar">
        <span className="logo gradient-text">SikshyaX</span>
        <Link to="/login" className="btn btn-primary btn-sm">Play now</Link>
      </nav>

      <section className="hero">
        <div className="hero-badge animate-float">
          <Zap size={14} /> Nepal's #1 Quiz Battle Platform
        </div>
        <h1 className="hero-title">
          Learn.<br /><span className="gradient-text">Compete.</span> Win.
        </h1>
        <p className="hero-sub">
          Multiplayer MCQ battles for CEE, EPS Korea, Loksewa & Engineering — built for Nepal's competitive exam warriors.
        </p>
        <div className="hero-actions">
          <Link to="/login" className="btn btn-primary btn-glow">Start playing</Link>
          <Link to="/login" className="btn btn-glass">Admin panel</Link>
        </div>
        <div className="hero-stats-row">
          <div className="hero-stat glass-card"><strong>28K+</strong><span>Students</span></div>
          <div className="hero-stat glass-card"><strong>12K+</strong><span>Daily battles</span></div>
          <div className="hero-stat glass-card"><strong>4</strong><span>Exam tracks</span></div>
        </div>
        <div className="hero-tags">
          {features.map((f) => <span key={f} className="tag glass-pill">{f}</span>)}
        </div>
      </section>

      <section className="roles-section">
        <h2>Choose your arena</h2>
        <div className="roles-grid two">
          <Link to="/login" className="role-card glass-card role-glow">
            <div className="role-icon-wrap green"><Swords size={24} /></div>
            <h3>Student App</h3>
            <p>Battle friends, climb ranks, and master every subject through competitive quiz matches.</p>
            <span className="card-cta">Enter arena →</span>
          </Link>
          <Link to="/login" className="role-card glass-card">
            <div className="role-icon-wrap purple"><Trophy size={24} /></div>
            <h3>Admin Panel</h3>
            <p>Manage questions, tournaments, subscriptions, and platform analytics.</p>
            <span className="card-cta">Open dashboard →</span>
          </Link>
        </div>
      </section>

      <section className="stack-section">
        <p className="stack-label">Phase 1 MVP</p>
        <div className="stack-pills">
          {['Phone OTP', 'Friend Match', 'Online Match', 'Bot Match', 'Leaderboard', 'Premium'].map((t) => (
            <span key={t} className="stack-pill glass-pill">{t}</span>
          ))}
        </div>
      </section>

      <footer className="landing-footer">SikshyaX · Made for Nepal 🇳🇵</footer>
    </div>
  )
}
