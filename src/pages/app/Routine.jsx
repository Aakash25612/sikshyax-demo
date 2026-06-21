import { routine } from '../../data/mockData'
import { Bell, Plus } from 'lucide-react'

const reminders = [
  { label: 'Daily practice reminder', time: '09:00 AM', on: true },
  { label: 'CEE exam countdown', time: 'Apr 15, 2082', on: true },
  { label: 'Tournament — CEE Cup', time: 'Mar 22, 2082', on: false },
]

export default function Routine() {
  return (
    <div className="mobile-page">
      <header className="page-title-bar">
        <h1>Routine</h1>
        <button type="button" className="icon-btn"><Plus size={20} /></button>
      </header>

      <section className="section">
        <h2 className="section-label">Today's schedule</h2>
        {routine.map((r) => (
          <div key={r.time} className="routine-row">
            <span className="routine-time">{r.time}</span>
            <div>
              <strong>{r.task}</strong>
              <span className={`type-tag ${r.type}`}>{r.type}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-label"><Bell size={16} /> Reminders</h2>
        {reminders.map((r) => (
          <div key={r.label} className="reminder-row">
            <div>
              <strong>{r.label}</strong>
              <span>{r.time}</span>
            </div>
            <div className={`toggle ${r.on ? 'on' : ''}`} />
          </div>
        ))}
      </section>
    </div>
  )
}
