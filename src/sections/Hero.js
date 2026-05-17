import React, { useEffect, useState } from 'react';
import './Hero.css';

const ROLES = ['Software Engineer', 'Content Creator', 'Gym Enthusiast', 'NIT Trichy Grad', 'Traveler'];

function TypewriterRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;
    if (paused) {
      timeout = setTimeout(() => { setDeleting(true); setPaused(false); }, 1800);
    } else if (deleting) {
      if (displayed.length === 0) {
        setDeleting(false);
        setRoleIdx(i => (i + 1) % ROLES.length);
      } else {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 45);
      }
    } else {
      if (displayed.length === target.length) {
        setPaused(true);
      } else {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, paused, roleIdx]);

  return (
    <div className="hero-typewriter">
      <span className="typewriter-text">{displayed}</span>
      <span className="typewriter-cursor">|</span>
    </div>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-gradient" />

      <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
        <div className="hero-left">
          <div className="hero-greeting">
            <span className="mono-tag">Hello, World 👋</span>
          </div>
          <h1 className="hero-name">
            Gurdeep<br />
            <span className="hero-name-accent">Singh</span>
          </h1>
          <TypewriterRole />
          <p className="hero-bio">
            MCA · NIT Trichy · AIR 731 NIMCET<br />
            Building software by day, creating content by night.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@NITianGurdeep" target="_blank" rel="noreferrer" className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z" />
              </svg>
              Watch Content
            </a>
            <a href="https://drive.google.com/drive/folders/1icmZhB_aTq6PqxbSFfiboQX9o3IhHMRd?usp=drive_link" target="_blank" rel="noreferrer" className="btn-outline">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15V3M7 10l5 5 5-5M3 21h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <div className="ring ring-outer" />
            <div className="ring ring-middle" />
            <div className="ring ring-inner" />
            <div className="photo-glow" />
            <div className="hero-avatar-inner">
              <img src="/images/hero-photo.jpg" alt="Gurdeep Singh" className="avatar-photo" />
            </div>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={scrollDown} aria-label="Scroll down">
        <span className="scroll-dot" />
      </button>
    </section>
  );
}