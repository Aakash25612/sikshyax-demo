import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ChevronRight } from 'lucide-react'
import { practiceSubjects, sampleQuestions } from '../../data/mockData'

export default function Practice() {
  const [active, setActive] = useState(null)
  const [selected, setSelected] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)

  if (active === 'quiz') {
    const q = sampleQuestions[0]
    return (
      <div className="mobile-page">
        <header className="page-title-bar">
          <button type="button" className="back-btn" onClick={() => { setActive(null); setShowAnswer(false); setSelected(null) }}>← Back</button>
          <h1>Practice</h1>
          <span className="q-counter">1 / {sampleQuestions.length}</span>
        </header>
        <div className="quiz-card">
          <span className="subject-tag">Physics</span>
          <p className="question-text">{q.q}</p>
          <div className="options-list">
            {q.options.map((opt, i) => (
              <button
                key={opt}
                type="button"
                className={`option-btn ${selected === i ? 'selected' : ''} ${showAnswer && i === q.answer ? 'correct' : ''} ${showAnswer && selected === i && i !== q.answer ? 'wrong' : ''}`}
                onClick={() => !showAnswer && setSelected(i)}
              >
                {opt}
              </button>
            ))}
          </div>
          {!showAnswer ? (
            <button type="button" className="btn btn-primary btn-full" disabled={selected === null} onClick={() => setShowAnswer(true)}>Check answer</button>
          ) : (
            <div className="answer-review">
              <CheckCircle size={18} />
              <span>{selected === q.answer ? 'Correct!' : `Correct: ${q.options[q.answer]}`}</span>
              <button type="button" className="btn btn-primary btn-full" onClick={() => { setSelected(null); setShowAnswer(false) }}>Next question</button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="mobile-page">
      <header className="page-title-bar">
        <h1>Practice</h1>
        <span className="free-tag">Free</span>
      </header>

      <div className="free-banner">
        <strong>Unlimited MCQ Practice</strong>
        <span>Subject wise · Chapter wise · Review answers</span>
      </div>

      <section className="section">
        <h2 className="section-label">Subjects</h2>
        {practiceSubjects.map((s) => (
          <button key={s.name} type="button" className="subject-row" onClick={() => setActive('quiz')}>
            <div>
              <strong>{s.name}</strong>
              <span>{s.done}/{s.chapters} chapters</span>
            </div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: `${(s.done / s.chapters) * 100}%` }} /></div>
            <ChevronRight size={18} />
          </button>
        ))}
      </section>

      <Link to="/app/play" className="cta-card">
        <strong>Ready to compete?</strong>
        <span>Try a Quick Game match →</span>
      </Link>
    </div>
  )
}
