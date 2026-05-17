import React, { useRef, useEffect, useState } from 'react';
import { experience } from '../assets/data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Experience.css';

export default function Experience() {
  const [sectionRef, visible] = useScrollAnimation(0.1);
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      const target = lineRef.current?.parentElement?.scrollHeight || 0;
      setLineHeight(target);
    }, 300);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section id="experience" className="experience section" ref={sectionRef}>
      <div className="section-container">
        <div className={`fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-tag">04 — Career</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey so far — timeline draws as you scroll.</p>
        </div>

        <div className="timeline">
          <div
            className="timeline-line"
            ref={lineRef}
            style={{ height: visible ? `${lineHeight}px` : '0px' }}
          />

          {experience.map((exp, i) => (
            <div
              key={i}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} fade-in ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.2 + i * 0.2}s` }}
            >
              <div className="timeline-dot" style={{ '--exp-color': exp.color }}>
                <div className="timeline-dot-inner" />
              </div>

              <div className="timeline-card" style={{ '--exp-color': exp.color }}>
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
