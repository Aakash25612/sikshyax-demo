import { Link } from 'react-router-dom'
import { ChevronRight, Crown, LogOut, Trophy } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const { currentUser, logout } = useApp()
  const navigate = useNavigate()
  const u = currentUser

  const menu = [
    { to: '/app/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { to: '/app/notes', label: 'My Notes', emoji: '📝' },
    { to: '/app/routine', label: 'Routine & Reminders', emoji: '📅' },
    { to: '/app/daily-hub', label: 'Daily Hub', emoji: '🗓️' },
    { to: '/app/subscription', icon: Crown, label: 'Subscription' },
  ]

  return (
    <div className="mobile-page">
      <header className="page-title-bar"><h1>Profile</h1></header>

      <div className="profile-card">
        <div className="avatar large">{u.avatar}</div>
        <strong>{u.name}</strong>
        <span className="username">@{u.username}</span>
        <span className="district">{u.district} · {u.phone}</span>
        <div className="interest-tags">
          {u.interests.map((i) => <span key={i} className="interest-tag">{i}</span>)}
        </div>
      </div>

      <div className="profile-stats">
        <div><strong>{u.rating}</strong><span>Rating</span></div>
        <div><strong>#{u.rank}</strong><span>Rank</span></div>
        <div><strong>{u.matches}</strong><span>Matches</span></div>
        <div><strong>{u.winRate}</strong><span>Win rate</span></div>
      </div>

      <nav className="profile-menu">
        {menu.map((item) => (
          <Link key={item.label} to={item.to} className="menu-row">
            {item.icon ? <item.icon size={20} /> : <span>{item.emoji}</span>}
            <span>{item.label}</span>
            <ChevronRight size={18} />
          </Link>
        ))}
        <button type="button" className="menu-row danger" onClick={() => { logout(); navigate('/') }}>
          <LogOut size={20} />
          <span>Sign out</span>
        </button>
      </nav>

      <p className="version-note">SikshyaX Demo · Phase 1 MVP</p>
    </div>
  )
}
