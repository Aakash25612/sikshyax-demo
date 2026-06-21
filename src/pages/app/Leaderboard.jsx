import { categories, leaderboard } from '../../data/mockData'
import { Trophy } from 'lucide-react'
import { useState } from 'react'

export default function LeaderboardPage() {
  const [cat, setCat] = useState('all')

  return (
    <div className="mobile-page">
      <header className="page-title-bar">
        <h1>Leaderboard</h1>
        <span className="month-tag">March 2082 BS</span>
      </header>

      <div className="podium">
        {leaderboard.monthly.slice(0, 3).map((p, i) => (
          <div key={p.rank} className={`podium-item place-${i + 1}`}>
            <div className="podium-avatar">{p.name.charAt(0)}</div>
            <strong>{p.name.split(' ')[0]}</strong>
            <span>{p.points} pts</span>
            <div className="podium-prize">{leaderboard.prizes[i]}</div>
          </div>
        ))}
      </div>

      <div className="pill-row scroll">
        <button type="button" className={`pill ${cat === 'all' ? 'active' : ''}`} onClick={() => setCat('all')}>All</button>
        {categories.map((c) => (
          <button key={c.id} type="button" className={`pill ${cat === c.id ? 'active' : ''}`} onClick={() => setCat(c.id)}>{c.name}</button>
        ))}
      </div>

      <div className="leader-list">
        {leaderboard.monthly.map((p) => (
          <div key={p.rank} className={`leader-row ${p.isYou ? 'you' : ''}`}>
            <span className="rank">{p.rank}</span>
            <div className="leader-info">
              <strong>{p.name}{p.isYou && ' (You)'}</strong>
              <span>{p.district}</span>
            </div>
            <span className="points">{p.points}</span>
            {p.rank <= 3 && <Trophy size={16} className="trophy-icon" />}
          </div>
        ))}
      </div>
    </div>
  )
}
