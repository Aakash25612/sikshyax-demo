import { dailyHub } from '../../data/mockData'

export default function DailyHub() {
  const h = dailyHub

  return (
    <div className="mobile-page">
      <header className="page-title-bar"><h1>Daily Hub</h1></header>

      <div className="hub-card">
        <h3>🗓️ Nepali Calendar</h3>
        <strong>{h.calendar.bs}</strong>
        <p>{h.calendar.tithi} · {h.calendar.festival}</p>
      </div>

      <div className="hub-card">
        <h3>☁️ Weather — {h.weather.city}</h3>
        <div className="weather-row">
          <strong className="temp">{h.weather.temp}</strong>
          <div>
            <span>{h.weather.forecast}</span>
            <small>H {h.weather.high} · L {h.weather.low}</small>
          </div>
        </div>
      </div>

      <div className="hub-card">
        <h3>📰 News</h3>
        {h.news.map((n) => (
          <div key={n.title} className="news-row">
            <strong>{n.title}</strong>
            <span>{n.source}</span>
          </div>
        ))}
      </div>

      <div className="hub-card">
        <h3>⭐ Rashifal — {h.rashifal.sign}</h3>
        <p>{h.rashifal.text}</p>
      </div>

      <div className="hub-card">
        <h3>📈 Share Market</h3>
        <strong>{h.market.index}</strong>
        <span className="market-up">{h.market.change}</span>
        <div className="market-lists">
          <div><small>Gainers</small>{h.market.gainers.join(', ')}</div>
          <div><small>Losers</small>{h.market.losers.join(', ')}</div>
        </div>
      </div>
    </div>
  )
}
