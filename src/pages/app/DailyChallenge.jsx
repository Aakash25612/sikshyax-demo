import { Flame, Gift } from 'lucide-react'
import { useApp } from '../../context/AppContext'

export default function DailyChallenge() {
  const { currentUser } = useApp()

  return (
    <div className="mobile-page">
      <header className="page-title-bar">
        <h1>Daily Challenge</h1>
      </header>

      <div className="challenge-hero">
        <Gift size={32} />
        <h2>Today's Quiz</h2>
        <p>10 mixed MCQs · CEE & Engineering</p>
        <div className="streak-display">
          <Flame size={20} />
          <span>{currentUser.streak} day streak</span>
        </div>
      </div>

      <div className="rewards-card">
        <h3>Daily rewards</h3>
        <div className="reward-days">
          {[1, 2, 3, 4, 5, 6, 7].map((d) => (
            <div key={d} className={`reward-day ${d <= currentUser.streak ? 'claimed' : ''}`}>
              <span>{d}</span>
              <small>{d === 7 ? '🎁' : '+10'}</small>
            </div>
          ))}
        </div>
      </div>

      <button type="button" className="btn btn-primary btn-full">Start daily quiz</button>
      <p className="hint-text">Complete before midnight (NPT) to keep your streak</p>
    </div>
  )
}
