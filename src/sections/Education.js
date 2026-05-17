import React from 'react';
import { education } from '../assets/data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Education.css';

export default function Education() {
  const [ref, visible] = useScrollAnimation(0.15);

  return (
    <section id="education" className="education section" ref={ref}>
      <div className="section-container">
        <div className={`fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-tag">06 — Academic</div>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="edu-grid">
          {education.map((edu, i) => (
            <div
              key={edu.institution}
              className={`edu-card ${i % 2 === 0 ? 'fade-in-left' : 'fade-in-right'} ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.15}s`, '--edu-color': edu.color }}
            >
              <div className="edu-icon">🎓</div>
              <div className="edu-body">
                <h3 className="edu-institution">{edu.institution}</h3>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-meta">
                  <span>{edu.period}</span>
                  <span>·</span>
                  <span>{edu.location}</span>
                </div>
              </div>
              <div className="edu-badge">{edu.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
