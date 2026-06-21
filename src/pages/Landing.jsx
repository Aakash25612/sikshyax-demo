import { Link } from 'react-router-dom'

const features = [
  'Multiplayer MCQ battles',
  'CEE · EPS Korea · Loksewa · Engineering',
  'Friend rooms & online matchmaking',
  'AI Tutor & daily challenges',
  'Leaderboards & tournaments',
]

export default function Landing() {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <span className="logo">SikshyaX</span>
        <Link to="/login" className="btn btn-primary btn-sm">Sign in</Link>
      </nav>

      <section className="hero">
        <p className="hero-label">Gamified Education for Nepal</p>
        <h1>Learn. Compete. Win.</h1>
        <p className="hero-sub">
          Multiplayer MCQ battles for CEE, EPS Korea, Loksewa, and Engineering entrance — built for Nepal's competitive exam students.
        </p>
        <div className="hero-actions">
          <Link to="/login" className="btn btn-primary">Try demo</Link>
          <Link to="/login" className="btn btn-secondary">Admin panel</Link>
        </div>
        <div className="hero-tags">
          {features.map((f) => <span key={f} className="tag">{f}</span>)}
        </div>
      </section>

      <section className="roles-section">
        <h2>Two experiences</h2>
        <div className="roles-grid two">
          <Link to="/login" className="role-card role-blue">
            <div className="role-icon">📱</div>
            <h3>Student App</h3>
            <p>Home, Play, Practice, AI Tutor, Profile — with bottom navigation and gamified stats.</p>
          </Link>
          <Link to="/login" className="role-card role-purple">
            <div className="role-icon">⚙️</div>
            <h3>Admin Panel</h3>
            <p>Manage questions, users, subscriptions, tournaments, revenue, and notifications.</p>
          </Link>
        </div>
      </section>

      <section className="stack-section">
        <p className="stack-label">Phase 1 MVP</p>
        <div className="stack-pills">
          {['Phone OTP', 'Categories', 'Friend Match', 'Online Match', 'Bot Match', 'Subscription', 'Leaderboard'].map((t) => (
            <span key={t} className="stack-pill">{t}</span>
          ))}
        </div>
        <p className="stack-note">Flutter + Firebase recommended · eSewa · Khalti · IME Pay</p>
      </section>

      <footer className="landing-footer">SikshyaX · Nepal Competitive Exam Platform Demo</footer>
    </div>
  )
}
