import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { roles } from '../data/mockData'

const redirects = { student: '/app', admin: '/admin' }

export default function Login() {
  const { login } = useApp()
  const navigate = useNavigate()
  const [mode, setMode] = useState('otp')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [otpSent, setOtpSent] = useState(false)

  const quickLogin = (key) => {
    const user = roles[key]
    const result = login(user.email, user.password)
    if (result.ok) navigate(redirects[result.role])
  }

  const sendOtp = () => {
    if (phone.length < 10) { setError('Enter a valid phone number'); return }
    setOtpSent(true)
    setError('')
  }

  const verifyOtp = (e) => {
    e.preventDefault()
    if (otp === '123456' || otp.length >= 4) {
      const result = login(roles.student.email, roles.student.password)
      if (result.ok) navigate('/app')
      return
    }
    setError('Invalid OTP — use 123456 for demo')
  }

  const emailLogin = (e) => {
    e.preventDefault()
    const result = login(email, password)
    if (!result.ok) { setError(result.error); return }
    navigate(redirects[result.role])
  }

  return (
    <div className="login-page">
      <Link to="/" className="login-logo logo">SikshyaX</Link>
      <div className="login-card">
        <h1>Welcome back</h1>
        <p className="login-sub">Sign in to continue your learning journey</p>

        <div className="login-tabs">
          <button type="button" className={mode === 'otp' ? 'tab-btn active' : 'tab-btn'} onClick={() => setMode('otp')}>Phone OTP</button>
          <button type="button" className={mode === 'email' ? 'tab-btn active' : 'tab-btn'} onClick={() => setMode('email')}>Email</button>
        </div>

        {mode === 'otp' ? (
          <form className="login-form" onSubmit={verifyOtp}>
            {error && <div className="form-error">{error}</div>}
            {!otpSent ? (
              <>
                <label>
                  Phone number
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+977 98XXXXXXXX" />
                </label>
                <button type="button" className="btn btn-primary btn-full" onClick={sendOtp}>Send OTP</button>
              </>
            ) : (
              <>
                <label>
                  Enter OTP
                  <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="123456" maxLength={6} />
                </label>
                <button type="submit" className="btn btn-primary btn-full">Verify & sign in</button>
                <p className="login-hint">Demo OTP: <code>123456</code></p>
              </>
            )}
          </form>
        ) : (
          <form className="login-form" onSubmit={emailLogin}>
            {error && <div className="form-error">{error}</div>}
            <label>
              Email
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="student@demo.np" />
            </label>
            <label>
              Password
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="demo123" />
            </label>
            <button type="submit" className="btn btn-primary btn-full">Sign in</button>
          </form>
        )}

        <div className="social-login">
          <button type="button" className="btn btn-secondary btn-full">Continue with Google</button>
          <button type="button" className="btn btn-secondary btn-full">Continue with Facebook</button>
        </div>

        <div className="role-presets">
          <button type="button" className="preset-btn" onClick={() => quickLogin('student')}>
            <strong>Student demo</strong>
            <span>Aarav Shrestha · CEE & Engineering</span>
          </button>
          <button type="button" className="preset-btn" onClick={() => quickLogin('admin')}>
            <strong>Admin demo</strong>
            <span>Manage questions, users & tournaments</span>
          </button>
        </div>
      </div>
    </div>
  )
}
