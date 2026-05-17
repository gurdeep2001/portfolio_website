import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import Education from './sections/Education';
import YouTube from './sections/YouTube';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Resume />
      <Projects />
      <Education />
      <YouTube />
      <Contact />
    </div>
  );
}

export default App;
