import React, { useRef } from 'react';
import { projects } from '../assets/data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

function ProjectCard({ project, featured, delay, visible }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -8;
    const rotY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`project-card ${featured ? 'project-featured' : ''} fade-in ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: delay, '--proj-color': project.color }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-inner">
        <div className="project-top">
          <div className="project-color-dot" />
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noreferrer" className="proj-link" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
            </a>
            {project.live && project.live !== '#' && (
              <a href={project.live} target="_blank" rel="noreferrer" className="proj-link" aria-label="Live demo">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {featured && <div className="featured-badge">Featured Project</div>}

        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map(t => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, visible] = useScrollAnimation(0.1);
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="section-container">
        <div className={`fade-in ${visible ? 'visible' : ''}`}>
          <div className="section-tag">05 — Work</div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built — hover for a 3D tilt effect.</p>
        </div>

        {/* Featured */}
        <div className="projects-featured">
          {featured.map((p, i) => (
            <ProjectCard key={p.name} project={p} featured delay={`${0.1 + i * 0.15}s`} visible={visible} />
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {rest.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={`${0.2 + i * 0.1}s`} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
