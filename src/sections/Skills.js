import React, { useState } from 'react';
import { skills } from '../assets/data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

export default function Skills() {
  const [sectionRef, visible] = useScrollAnimation(0.1);
  const [active, setActive] = useState('All');
  const categories = ['All', ...Object.keys(skills)];

  const filteredSkills = active === 'All'
    ? Object.values(skills).flat()
    : skills[active] || [];

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="section-container">
        <div className={`fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-tag">02 — Tech Stack</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Tools I wield daily — grouped by domain, each card glows in its own color.
          </p>
        </div>

        <div className={`skills-filter fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, i) => (
            <div
              key={skill.name + i}
              className={`skill-pill fade-in ${visible ? 'visible' : ''}`}
              style={{
                transitionDelay: `${0.05 * (i % 12)}s`,
                '--skill-color': skill.color,
              }}
            >
              <span className="skill-dot" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
