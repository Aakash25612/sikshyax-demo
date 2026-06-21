import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { useApp } from '../context/AppContext'

const nav = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/questions', label: 'Questions' },
  { to: '/admin/users', label: 'Users' },
  { to: '/admin/tournaments', label: 'Tournaments' },
  { to: '/admin/revenue', label: 'Revenue' },
]

export default function AdminLayout() {
  const { currentUser, logout } = useApp()
  const navigate = useNavigate()

  return (
    <div className="app gaming-bg">
      <header className="topbar glass-bar">
        <Link to="/" className="logo gradient-text">SikshyaX Admin</Link>
        <nav className="topnav">
          {nav.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="topbar-user">
          <span className="user-name">{currentUser?.name}</span>
          <button type="button" className="icon-btn" onClick={() => { logout(); navigate('/') }} aria-label="Sign out">
            <LogOut size={16} />
          </button>
        </div>
      </header>
      <main className="main"><Outlet /></main>
    </div>
  )
}
