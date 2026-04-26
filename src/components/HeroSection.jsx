export default function HeroSection({ trip, onCopy, onPrint }) {
  return (
    <header className="hero">
      <div className="container">
        <section className="hero-panel card">
          <div className="hero-copy">
            <span className="hero-eyebrow">{trip.branding.eyebrow}</span>
            <h1 className="hero-title">{trip.hero.title}</h1>
            <p className="hero-subtitle">{trip.hero.subtitle}</p>
            <div className="hero-tags">
              {trip.hero.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="hero-actions">
              <button className="btn btn-primary" type="button" onClick={onCopy}>
                复制每日行程
              </button>
              <button className="btn btn-secondary" type="button" onClick={onPrint}>
                打印攻略
              </button>
              <a
                className="btn btn-secondary"
                href={trip.actions.rawLodgingUrl}
                target="_blank"
                rel="noreferrer"
              >
                查看原始住宿行程
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img src={trip.hero.coverImage} alt={trip.hero.coverAlt} />
            <div className="hero-metrics">
              {trip.hero.metrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
