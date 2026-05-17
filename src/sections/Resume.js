import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Resume.css';

export default function Resume() {
  const [ref, visible] = useScrollAnimation(0.15);

  return (
    <section id="resume" className="resume-section section" ref={ref}>
      <div className="section-container">
        <div className={`resume-card fade-in ${visible ? 'visible' : ''}`}>
          <div className="resume-preview">
            <div className="resume-mockup">
              <div className="mockup-header">
                <div className="mockup-name" />
                <div className="mockup-role" />
              </div>
              <div className="mockup-line" />
              <div className="mockup-line short" />
              <div className="mockup-section">
                <div className="mockup-label" />
                <div className="mockup-line" />
                <div className="mockup-line short2" />
              </div>
              <div className="mockup-section">
                <div className="mockup-label" />
                <div className="mockup-line" />
                <div className="mockup-line short" />
              </div>
              <div className="mockup-dots">
                <span /><span /><span />
              </div>
            </div>
          </div>

          <div className="resume-info">
            <div className="section-tag">Resume</div>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>
              Download My<br />
              <span style={{ color: 'var(--purple)' }}>Resume</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              Get the complete picture — education, experience, skills, and projects in one clean PDF.
              Always kept up to date.
            </p>
            <div className="resume-updated">
              <span className="updated-dot" />
              Last updated: May 2026
            </div>
            <div className="resume-btns">
              <a href="https://drive.google.com/drive/folders/1icmZhB_aTq6PqxbSFfiboQX9o3IhHMRd?usp=drive_link" target="_blank" rel="noreferrer" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
                View Resume
              </a>
              <a href="https://drive.google.com/drive/folders/1icmZhB_aTq6PqxbSFfiboQX9o3IhHMRd?usp=drive_link" download className="btn-outline" style={{ gap: '8px', display: 'inline-flex', alignItems: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15V3M7 10l5 5 5-5M3 21h18" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
