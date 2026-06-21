import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppProvider, useApp } from './context/AppContext'
import AdminLayout from './components/AdminLayout'
import AppShell from './components/AppShell'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Home from './pages/app/Home'
import Play from './pages/app/Play'
import Practice from './pages/app/Practice'
import AITutor from './pages/app/AITutor'
import Profile from './pages/app/Profile'
import Game from './pages/app/Game'
import FriendMatch from './pages/app/FriendMatch'
import LeaderboardPage from './pages/app/Leaderboard'
import DailyChallenge from './pages/app/DailyChallenge'
import Notes from './pages/app/Notes'
import Routine from './pages/app/Routine'
import DailyHub from './pages/app/DailyHub'
import Subscription from './pages/app/Subscription'
import AdminDashboard, { AdminQuestions, AdminUsers, AdminTournaments, AdminRevenue } from './pages/admin/AdminPortal'

function Guard({ role, children }) {
  const { currentUser } = useApp()
  if (!currentUser) return <Navigate to="/login" replace />
  if (currentUser.role !== role) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          <Route path="/app" element={<Guard role="student"><AppShell /></Guard>}>
            <Route index element={<Home />} />
            <Route path="play" element={<Play />} />
            <Route path="practice" element={<Practice />} />
            <Route path="ai" element={<AITutor />} />
            <Route path="profile" element={<Profile />} />
            <Route path="game" element={<Game />} />
            <Route path="friend-match" element={<FriendMatch />} />
            <Route path="leaderboard" element={<LeaderboardPage />} />
            <Route path="daily-challenge" element={<DailyChallenge />} />
            <Route path="notes" element={<Notes />} />
            <Route path="routine" element={<Routine />} />
            <Route path="daily-hub" element={<DailyHub />} />
            <Route path="subscription" element={<Subscription />} />
          </Route>

          <Route path="/admin" element={<Guard role="admin"><AdminLayout /></Guard>}>
            <Route index element={<AdminDashboard />} />
            <Route path="questions" element={<AdminQuestions />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="tournaments" element={<AdminTournaments />} />
            <Route path="revenue" element={<AdminRevenue />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
