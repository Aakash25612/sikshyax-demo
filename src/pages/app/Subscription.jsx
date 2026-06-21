import { Check, Crown } from 'lucide-react'
import { plans } from '../../data/mockData'
import { useState } from 'react'

const premiumFeatures = [
  'Quick Game (10/15/30 questions)',
  'Full Paper Battles & Tournaments',
  'AI Tutor unlimited usage',
  'Advanced analytics',
]

const paymentMethods = ['eSewa', 'Khalti', 'IME Pay']

export default function Subscription() {
  const [selected, setSelected] = useState('m3')

  return (
    <div className="mobile-page">
      <header className="page-title-bar">
        <h1>Premium</h1>
      </header>

      <div className="premium-hero">
        <Crown size={36} />
        <h2>Unlock everything</h2>
        <p>Compete, learn, and win with full access</p>
      </div>

      <ul className="feature-list">
        {premiumFeatures.map((f) => (
          <li key={f}><Check size={16} /> {f}</li>
        ))}
      </ul>

      <div className="plans-grid">
        {plans.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`plan-card ${selected === p.id ? 'selected' : ''} ${p.popular ? 'popular' : ''}`}
            onClick={() => setSelected(p.id)}
          >
            {p.popular && <span className="popular-badge">Popular</span>}
            <strong>{p.name}</strong>
            <span className="plan-price">{p.price}<small>{p.period}</small></span>
          </button>
        ))}
      </div>

      <p className="payment-label">Pay with</p>
      <div className="payment-methods">
        {paymentMethods.map((m) => (
          <button key={m} type="button" className="payment-btn">{m}</button>
        ))}
      </div>

      <button type="button" className="btn btn-primary btn-full">Subscribe now</button>
    </div>
  )
}
