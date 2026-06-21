import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Copy, Users } from 'lucide-react'

export default function FriendMatch() {
  const [mode, setMode] = useState('create')
  const [code] = useState('SX-4829')
  const [joined, setJoined] = useState(false)

  return (
    <div className="mobile-page">
      <header className="page-title-bar">
        <Link to="/app/play" className="back-btn">← Back</Link>
        <h1>Friend Match</h1>
      </header>

      <div className="friend-tabs">
        <button type="button" className={mode === 'create' ? 'tab-btn active' : 'tab-btn'} onClick={() => setMode('create')}>Create Room</button>
        <button type="button" className={mode === 'join' ? 'tab-btn active' : 'tab-btn'} onClick={() => setMode('join')}>Join Room</button>
      </div>

      {mode === 'create' ? (
        <div className="room-card">
          <Users size={32} />
          <h2>Your room is ready</h2>
          <div className="room-code">
            <strong>{code}</strong>
            <button type="button" className="icon-btn"><Copy size={16} /></button>
          </div>
          <p className="muted">Share this code with your friend</p>
          <button type="button" className="btn btn-secondary btn-full">Invite friend</button>
          <Link to="/app/game" className="btn btn-primary btn-full">Start when ready</Link>
        </div>
      ) : (
        <div className="room-card">
          <label className="join-label">
            Room code
            <input type="text" placeholder="SX-XXXX" defaultValue="" />
          </label>
          <button type="button" className="btn btn-primary btn-full" onClick={() => setJoined(true)}>Join room</button>
          {joined && (
            <div className="joined-state">
              <p>Joined room <strong>{code}</strong></p>
              <p className="muted">Waiting for host to start...</p>
              <Link to="/app/game" className="btn btn-primary btn-full">Start match</Link>
            </div>
          )}
        </div>
      )}

      <div className="rematch-note">
        <strong>Rematch</strong>
        <span>After a match, both players can request a rematch instantly.</span>
      </div>
    </div>
  )
}
