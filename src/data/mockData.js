export const platform = { name: 'SikshyaX', tagline: 'Learn. Compete. Win.' }

export const roles = {
  student: {
    id: 'u1',
    role: 'student',
    name: 'Aarav Shrestha',
    username: 'aarav_s',
    email: 'student@demo.np',
    password: 'demo123',
    phone: '+977 9841234567',
    district: 'Kathmandu',
    avatar: 'A',
    rating: 1842,
    rank: 47,
    matches: 128,
    wins: 89,
    losses: 39,
    winRate: '69.5%',
    streak: 7,
    premium: false,
    interests: ['CEE', 'Engineering'],
  },
  admin: {
    id: 'a1',
    role: 'admin',
    name: 'Admin',
    email: 'admin@sikshyax.com',
    password: 'demo123',
  },
}

export const categories = [
  { id: 'cee', name: 'CEE', desc: 'Common Entrance Exam', color: 'blue', players: '12.4K' },
  { id: 'eps', name: 'EPS Korea', desc: 'Employment Permit System', color: 'green', players: '8.2K' },
  { id: 'loksewa', name: 'Loksewa', desc: 'Public Service Commission', color: 'purple', players: '15.1K' },
  { id: 'eng', name: 'Engineering', desc: 'Entrance preparation', color: 'orange', players: '9.8K' },
]

export const tools = [
  { id: 'notes', name: 'Notes', icon: 'notes' },
  { id: 'routine', name: 'Routine', icon: 'routine' },
  { id: 'reminders', name: 'Reminders', icon: 'bell' },
  { id: 'ai', name: 'AI Tutor', icon: 'sparkles' },
  { id: 'news', name: 'News', icon: 'news' },
  { id: 'calendar', name: 'Nepali Calendar', icon: 'calendar' },
  { id: 'weather', name: 'Weather', icon: 'cloud' },
  { id: 'rashifal', name: 'Rashifal', icon: 'star' },
  { id: 'market', name: 'Share Market', icon: 'chart' },
]

export const sampleQuestions = [
  { id: 1, q: 'What is the SI unit of electric current?', options: ['Volt', 'Ampere', 'Ohm', 'Watt'], answer: 1 },
  { id: 2, q: 'Which organelle is known as the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi body'], answer: 2 },
  { id: 3, q: 'The value of sin 90° is:', options: ['0', '1', '-1', '0.5'], answer: 1 },
  { id: 4, q: 'Who wrote "Muna Madan"?', options: ['Laxmi Prasad Devkota', 'Bhanubhakta Acharya', 'Parijat', 'Gopal Prasad Rimal'], answer: 0 },
  { id: 5, q: 'Which gas is most abundant in Earth\'s atmosphere?', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], answer: 2 },
]

export const leaderboard = {
  monthly: [
    { rank: 1, name: 'Sneha Karki', points: 4820, district: 'Pokhara' },
    { rank: 2, name: 'Rohan Thapa', points: 4610, district: 'Kathmandu' },
    { rank: 3, name: 'Priya Gurung', points: 4390, district: 'Biratnagar' },
    { rank: 4, name: 'Aarav Shrestha', points: 4120, district: 'Kathmandu', isYou: true },
    { rank: 5, name: 'Nabin Rai', points: 3980, district: 'Dharan' },
  ],
  prizes: ['Rs. 5,000', 'Rs. 3,000', 'Rs. 1,500'],
}

export const tournaments = [
  { id: 't1', name: 'CEE Cup', category: 'CEE', players: 24, prize: 'Rs. 10,000', date: 'Mar 22, 2082 BS', status: 'upcoming' },
  { id: 't2', name: 'EPS Korea Cup', category: 'EPS Korea', players: 16, prize: 'Rs. 8,000', date: 'Mar 25, 2082 BS', status: 'upcoming' },
  { id: 't3', name: 'Loksewa Cup', category: 'Loksewa', players: 32, prize: 'Rs. 15,000', date: 'Apr 1, 2082 BS', status: 'registration' },
]

export const practiceSubjects = [
  { name: 'Physics', chapters: 12, done: 8 },
  { name: 'Chemistry', chapters: 14, done: 6 },
  { name: 'Biology', chapters: 10, done: 9 },
  { name: 'Mathematics', chapters: 16, done: 5 },
  { name: 'English', chapters: 8, done: 7 },
]

export const aiMessages = [
  { role: 'user', text: 'Explain Ohm\'s law in simple terms.' },
  { role: 'ai', text: 'Ohm\'s law states that the current (I) through a conductor is directly proportional to the voltage (V) across it, and inversely proportional to resistance (R). Formula: V = I × R. For CEE, remember the triangle method to rearrange!' },
]

export const notes = [
  { id: 'n1', title: 'Organic Chemistry — Functional Groups', updated: 'Today', preview: 'Alcohol (-OH), Aldehyde (-CHO), Ketone (C=O)...' },
  { id: 'n2', title: 'Physics Formula Sheet', updated: 'Yesterday', preview: 'F=ma, v=u+at, s=ut+½at²...' },
  { id: 'n3', title: 'Loksewa GK Notes', updated: 'Mar 14', preview: 'Constitution articles, national parks, rivers...' },
]

export const routine = [
  { time: '06:00', task: 'Morning revision — Biology', type: 'study' },
  { time: '09:00', task: 'CEE Practice — 30 MCQs', type: 'practice' },
  { time: '14:00', task: 'Online match (Quick Game)', type: 'game' },
  { time: '20:00', task: 'Daily Challenge quiz', type: 'challenge' },
]

export const dailyHub = {
  calendar: { bs: '2082 Chaitra 4', tithi: 'Ekadashi', festival: 'Ghode Jatra (approaching)' },
  weather: { temp: '24°C', city: 'Kathmandu', forecast: 'Partly cloudy', high: '27°', low: '14°' },
  news: [
    { title: 'CEE 2082 exam schedule released', source: 'Education News' },
    { title: 'EPS Korea batch 18 results announced', source: 'Nepal News' },
  ],
  rashifal: { sign: 'Mesh (Aries)', text: 'A good day for focused study. Competitive energy is high — perfect for MCQ battles.' },
  market: { index: 'NEPSE 2,847.32', change: '+1.24%', gainers: ['NBL', 'NICL', 'HDL'], losers: ['SCB', 'NICA'] },
}

export const plans = [
  { id: 'm1', name: 'Monthly', price: 'Rs. 299', period: '/month', popular: false },
  { id: 'm3', name: '3 Months', price: 'Rs. 749', period: '/3 mo', popular: true },
  { id: 'm6', name: '6 Months', price: 'Rs. 1,299', period: '/6 mo', popular: false },
  { id: 'y1', name: 'Annual', price: 'Rs. 2,499', period: '/year', popular: false },
]

export const adminStats = {
  users: 28400, questions: 12400, revenue: 'Rs. 8.4L', activeToday: 3200, subscriptions: 1840, tournaments: 6,
}

export const adminQuestions = [
  { id: 'q1', category: 'CEE', subject: 'Physics', text: 'SI unit of electric current?', status: 'active' },
  { id: 'q2', category: 'Loksewa', subject: 'GK', text: 'Capital of Gandaki Province?', status: 'active' },
  { id: 'q3', category: 'EPS Korea', subject: 'Korean', text: 'Basic greeting in Korean?', status: 'draft' },
]
