import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Bot, Trophy } from 'lucide-react'
import { sampleQuestions } from '../../data/mockData'

export default function Game() {
  const [params] = useSearchParams()
  const isBot = params.get('bot') === '1'
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(3)
  const [oppScore, setOppScore] = useState(2)
  const [timer] = useState(12)
  const [finished, setFinished] = useState(false)

  const q = sampleQuestions[qIndex]
  const opponent = isBot ? 'Suman_77' : 'Sneha_K'

  const answer = (i) => {
    if (selected !== null) return
    setSelected(i)
    const correct = i === q.answer
    if (correct) setScore((s) => s + 1)
    else setOppScore((s) => s + 1)
    setTimeout(() => {
      if (qIndex + 1 >= sampleQuestions.length) setFinished(true)
      else { setQIndex((n) => n + 1); setSelected(null) }
    }, 1200)
  }

  if (finished) {
    const won = score > oppScore
    return (
      <div className="mobile-page game-page">
        <div className="result-screen">
          <Trophy size={48} className={won ? 'win' : 'lose'} />
          <h1>{won ? 'Victory!' : 'Defeat'}</h1>
          <div className="result-scores">
            <div><strong>You</strong><span>{score}</span></div>
            <div className="vs">vs</div>
            <div><strong>{opponent}</strong><span>{oppScore}</span></div>
          </div>
          <p className="rating-change">{won ? '+24 rating' : '-18 rating'}</p>
          <div className="result-actions">
            <Link to="/app/game" className="btn btn-primary btn-full">Rematch</Link>
            <Link to="/app/play" className="btn btn-secondary btn-full">Back to Play</Link>
          </div>
          <div className="review-section">
            <h3>Answer review</h3>
            {sampleQuestions.map((sq, i) => (
              <div key={sq.id} className="review-row">
                <span>Q{i + 1}</span>
                <span>{sq.options[sq.answer]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mobile-page game-page">
      <div className="game-hud">
        <div className="hud-player you">
          <strong>You</strong>
          <span>{score}</span>
        </div>
        <div className="hud-timer">{timer}s</div>
        <div className="hud-player opp">
          <strong>{isBot && <Bot size={14} />}{opponent}</strong>
          <span>{oppScore}</span>
        </div>
      </div>

      <div className="game-progress">
        <div className="progress-bar"><div className="progress-fill" style={{ width: `${((qIndex + 1) / sampleQuestions.length) * 100}%` }} /></div>
        <span>{qIndex + 1} / {sampleQuestions.length}</span>
      </div>

      <div className="quiz-card game">
        <p className="question-text">{q.q}</p>
        <div className="options-list">
          {q.options.map((opt, i) => (
            <button
              key={opt}
              type="button"
              className={`option-btn ${selected === i ? (i === q.answer ? 'correct' : 'wrong') : ''} ${selected !== null && i === q.answer ? 'correct' : ''}`}
              onClick={() => answer(i)}
              disabled={selected !== null}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <Link to="/app/play" className="exit-link">Exit match</Link>
    </div>
  )
}
