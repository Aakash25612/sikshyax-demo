import { notes } from '../../data/mockData'
import { Plus } from 'lucide-react'

export default function Notes() {
  return (
    <div className="mobile-page">
      <header className="page-title-bar">
        <h1>Notes</h1>
        <button type="button" className="icon-btn"><Plus size={20} /></button>
      </header>

      {notes.map((n) => (
        <div key={n.id} className="note-card">
          <strong>{n.title}</strong>
          <p>{n.preview}</p>
          <span className="note-date">{n.updated}</span>
        </div>
      ))}

      <button type="button" className="btn btn-secondary btn-full">+ New note</button>
    </div>
  )
}
