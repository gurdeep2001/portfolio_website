import React, { useEffect, useRef, useState } from 'react';
import { stats } from '../assets/data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

function CountUp({ end, suffix, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(ease * end));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(end);
    };
    requestAnimationFrame(tick);
  }, [start, end]);

  return <span>{value.toLocaleString()}{suffix}</span>;
}

export default function About() {
  const [sectionRef, visible] = useScrollAnimation(0.1);
  const [statsRef, statsVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-tag">01 — About Me</div>

        <div className={`about-grid fade-in ${visible ? 'visible' : ''}`}>
          {/* LEFT - Engineer */}
          <div className="about-card about-engineer fade-in-left" style={{ transitionDelay: '0.1s' }}>
            <div className="about-card-label">
              <span className="card-icon">⚡</span>
              The Engineer
            </div>
            <h3 className="about-card-title">Software Developer<br />& Problem Solver</h3>
            <p className="about-card-text">
              MCA graduate from <strong>NIT Trichy</strong> (AIR 731 NIMCET), currently building
              enterprise applications as an <strong>Associate Software Engineer at Proclink</strong>.
              I specialize in full-stack development with Java, Spring Boot, React, and Blazor.
            </p>
            <p className="about-card-text">
              I love solving hard engineering problems — from real-time dashboards to workflow automation
              with BPMN engines.
            </p>
            <div className="about-tags">
              <span className="tag tag-purple">Full Stack Dev</span>
              <span className="tag tag-teal">NIT Trichy MCA</span>
              <span className="tag tag-blue">Open to Opportunities</span>
            </div>
          </div>

          {/* RIGHT - Creator */}
          <div className="about-card about-creator fade-in-right" style={{ transitionDelay: '0.2s' }}>
            <div className="about-card-label">
              <span className="card-icon">🎬</span>
              The Creator
            </div>
            <h3 className="about-card-title">YouTube Creator<br />& Lifestyle Blogger</h3>
            <p className="about-card-text">
              I document my <strong>corporate life, gym journey, and travel adventures</strong> on YouTube.
              My channel is a window into the dual life of a software engineer who refuses to be one-dimensional.
            </p>
            <p className="about-card-text">
              From morning workouts to tech vlogs to weekend road trips — if it's part of the grind, it's on camera.
            </p>
            <a
              href="https://www.youtube.com/@NITianGurdeep"
              target="_blank"
              rel="noreferrer"
              className="yt-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z" />
              </svg>
              Watch on YouTube →
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="stats-row" ref={statsRef}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-item fade-in ${statsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="stat-value">
                <CountUp end={stat.value} suffix={stat.suffix} start={statsVisible} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
