import { NavLink, Outlet } from 'react-router-dom'
import { Home, Play, BookOpen, Sparkles, User } from 'lucide-react'

const tabs = [
  { to: '/app', label: 'Home', icon: Home, end: true },
  { to: '/app/play', label: 'Play', icon: Play },
  { to: '/app/practice', label: 'Practice', icon: BookOpen },
  { to: '/app/ai', label: 'AI', icon: Sparkles },
  { to: '/app/profile', label: 'Profile', icon: User },
]

export default function AppShell() {
  return (
    <div className="app-shell gaming-bg">
      <div className="shell-glow" />
      <div className="app-content">
        <Outlet />
      </div>
      <nav className="bottom-nav glass-bar">
        {tabs.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'tab active' : 'tab')}>
            <span className="tab-icon-wrap"><Icon size={20} /></span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
