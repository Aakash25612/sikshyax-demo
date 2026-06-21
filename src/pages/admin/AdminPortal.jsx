import { adminStats, adminQuestions, tournaments } from '../../data/mockData'

export default function AdminDashboard() {
  const s = adminStats
  return (
    <div className="page">
      <div className="page-header"><div><h1>Dashboard</h1><p className="muted">SikshyaX platform overview</p></div></div>
      <div className="stat-grid four">
        <div className="stat-card"><strong>{s.users.toLocaleString()}</strong><span>Total users</span></div>
        <div className="stat-card"><strong>{s.activeToday.toLocaleString()}</strong><span>Active today</span></div>
        <div className="stat-card"><strong>{s.questions.toLocaleString()}</strong><span>Questions</span></div>
        <div className="stat-card"><strong>{s.revenue}</strong><span>Revenue (month)</span></div>
      </div>
      <div className="two-col">
        <div className="card">
          <h2>Quick actions</h2>
          <div className="action-list">
            {['Add question', 'Send notification', 'Upload news', 'Create tournament'].map((a) => (
              <button key={a} type="button" className="action-btn">{a}</button>
            ))}
          </div>
        </div>
        <div className="card">
          <h2>Subscriptions</h2>
          <strong className="big-num">{s.subscriptions.toLocaleString()}</strong>
          <p className="muted">Active premium subscribers</p>
          <p className="muted">{s.tournaments} tournaments running</p>
        </div>
      </div>
    </div>
  )
}

export function AdminQuestions() {
  return (
    <div className="page">
      <div className="page-header">
        <div><h1>Questions</h1><p className="muted">Add, edit, and delete MCQ questions</p></div>
        <button type="button" className="btn btn-primary btn-sm">+ Add question</button>
      </div>
      <div className="card table-card">
        <table>
          <thead><tr><th>ID</th><th>Category</th><th>Subject</th><th>Question</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {adminQuestions.map((q) => (
              <tr key={q.id}>
                <td>{q.id}</td>
                <td>{q.category}</td>
                <td>{q.subject}</td>
                <td>{q.text}</td>
                <td><span className={`badge status-${q.status}`}>{q.status}</span></td>
                <td><button type="button" className="btn btn-ghost btn-sm">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function AdminUsers() {
  const users = [
    { name: 'Aarav Shrestha', district: 'Kathmandu', rating: 1842, premium: false },
    { name: 'Sneha Karki', district: 'Pokhara', rating: 4820, premium: true },
    { name: 'Rohan Thapa', district: 'Kathmandu', rating: 4610, premium: true },
  ]
  return (
    <div className="page">
      <div className="page-header"><div><h1>Users</h1><p className="muted">Manage student accounts</p></div></div>
      <div className="card table-card">
        <table>
          <thead><tr><th>Name</th><th>District</th><th>Rating</th><th>Plan</th><th></th></tr></thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.name}>
                <td><strong>{u.name}</strong></td>
                <td>{u.district}</td>
                <td>{u.rating}</td>
                <td>{u.premium ? 'Premium' : 'Free'}</td>
                <td><button type="button" className="btn btn-ghost btn-sm">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function AdminTournaments() {
  return (
    <div className="page">
      <div className="page-header">
        <div><h1>Tournaments</h1><p className="muted">Manage scheduled battles</p></div>
        <button type="button" className="btn btn-primary btn-sm">+ Create tournament</button>
      </div>
      <div className="card table-card">
        <table>
          <thead><tr><th>Name</th><th>Category</th><th>Players</th><th>Prize</th><th>Date</th><th>Status</th></tr></thead>
          <tbody>
            {tournaments.map((t) => (
              <tr key={t.id}>
                <td><strong>{t.name}</strong></td>
                <td>{t.category}</td>
                <td>{t.players}</td>
                <td>{t.prize}</td>
                <td>{t.date}</td>
                <td><span className={`badge status-${t.status}`}>{t.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function AdminRevenue() {
  return (
    <div className="page">
      <div className="page-header"><div><h1>Revenue</h1><p className="muted">Subscriptions & payment gateway</p></div></div>
      <div className="stat-grid three">
        <div className="stat-card"><strong>Rs. 8.4L</strong><span>This month</span></div>
        <div className="stat-card"><strong>Rs. 62L</strong><span>This year</span></div>
        <div className="stat-card"><strong>1,840</strong><span>Active subs</span></div>
      </div>
      <div className="card">
        <h2>Payment gateways</h2>
        <div className="gateway-row"><strong>eSewa</strong><span>Rs. 4.2L · 52%</span></div>
        <div className="gateway-row"><strong>Khalti</strong><span>Rs. 2.8L · 33%</span></div>
        <div className="gateway-row"><strong>IME Pay</strong><span>Rs. 1.4L · 15%</span></div>
      </div>
    </div>
  )
}
