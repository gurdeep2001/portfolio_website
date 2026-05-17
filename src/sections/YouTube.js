import React from 'react';
import { contentPillars } from '../assets/data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './YouTube.css';

export default function YouTube() {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <section id="youtube" className="youtube-section" ref={ref}>
      <div className="yt-gradient" />
      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={`yt-inner fade-in ${visible ? 'visible' : ''}`}>
          <div className="yt-header">
            <div className="yt-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#ef4444">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z" />
              </svg>
              YouTube Channel
            </div>
            <h2 className="section-title" style={{ color: '#fff', marginBottom: '12px' }}>
              Beyond the <span className="yt-accent">Code</span>
            </h2>
            <p className="section-subtitle">
              I'm more than a developer. Follow my journey through gym, travel, and corporate life on YouTube.
              Real, unfiltered, and consistently uploaded.
            </p>
            <a
              href="https://www.youtube.com/@NITianGurdeep"
              target="_blank"
              rel="noreferrer"
              className="yt-subscribe-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z" />
              </svg>
              Subscribe on YouTube
            </a>
          </div>

          <div className="content-pillars">
            {contentPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`pillar-card fade-in ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.2 + i * 0.12}s` }}
              >
                <div className="pillar-icon">{pillar.icon}</div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
                <a href={pillar.watchUrl} target="_blank" rel="noreferrer" className="pillar-watch-btn">
                  ▶ Watch
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
