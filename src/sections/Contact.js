import React, { useState } from 'react';
import { personalInfo } from '../assets/data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';
import './Contact.css';

const socials = [
  {
    name: 'Email',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="3" /><path d="M2 7l10 7 10-7" />
      </svg>
    ),
    href: `mailto:${personalInfo.email}`,
    color: '#8b5cf6',
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: personalInfo.linkedin,
    color: '#0077b5',
  },
  {
    name: 'GitHub',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
      </svg>
    ),
    href: personalInfo.github,
    color: '#e2e8f0',
  },
  {
    name: 'YouTube',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z" />
      </svg>
    ),
    href: personalInfo.youtube,
    color: '#ef4444',
  },
];

export default function Contact() {
  const [ref, visible] = useScrollAnimation(0.1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,    // ← from EmailJS dashboard
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    },
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY       // ← from EmailJS dashboard
  )
  .then(() => {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  })
  .catch(() => {
    alert('Something went wrong. Please try again.');
  });
};

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="section-container">
        <div className={`contact-inner fade-in ${visible ? 'visible' : ''}`}>
          <div className="contact-left">
            <div className="section-tag">08 — Contact</div>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>
              Whether it's a job opportunity, a project idea, or just want to say hi —
              my inbox is always open.
            </p>

            <div className="social-grid">
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.name !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="social-btn"
                  style={{ '--soc-color': s.color }}
                >
                  <span className="social-icon">{s.icon}</span>
                  <span className="social-name">{s.name}</span>
                  <svg className="social-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-form-card">
              <h3 className="form-title">Send a Message</h3>
              {sent ? (
                <div className="form-success">
                  <span>✅</span>
                  Message sent! I'll get back to you soon.
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What's on your mind?"
                      rows={5}
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-line" />
          <p className="footer-text">
            Built with React · Designed by Gurdeep Singh · {new Date().getFullYear()}
          </p>
          <p className="footer-sub">
            <span className="footer-mono">{"<"}</span>
            Made with ❤️ and way too much ☕
            <span className="footer-mono">{"/>"}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
