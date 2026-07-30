import React from 'react';
import bgImage from '../assets/consulting.jpg';

const Consulting = () => {
  return (
    <section 
      id="consulting"
      style={{
        background: `linear-gradient(rgba(11, 30, 68, 0.8), rgba(11, 30, 68, 0.8)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
  <div className="container">
    <div className="section-head reveal">
      <div className="eyebrow" style={{ color: 'var(--orange-500)' }}>Engineering Consulting</div>
      <h2 style={{ color: 'var(--white)' }}>When Your Team Needs Answers, Not Another Course</h2>
      <p style={{ color: '#93A2C4' }}>Hands-on consulting engagements for manufacturing and engineering organizations.</p>
    </div>
    <div className="consult-grid stagger">
      <div className="consult-card reveal"><h4>CAD Consulting</h4><span className="arrow">↗</span></div>
      <div className="consult-card reveal"><h4>Product Development</h4><span className="arrow">↗</span></div>
      <div className="consult-card reveal"><h4>AI for Manufacturing</h4><span className="arrow">↗</span></div>
      <div className="consult-card reveal"><h4>EV System Consulting</h4><span className="arrow">↗</span></div>
      <div className="consult-card reveal"><h4>Wiring Harness Consulting</h4><span className="arrow">↗</span></div>
      <div className="consult-card reveal"><h4>Process Improvement</h4><span className="arrow">↗</span></div>
      <div className="consult-card reveal"><h4>Digital Engineering</h4><span className="arrow">↗</span></div>
      <div className="consult-card reveal"><h4>Technical Documentation</h4><span className="arrow">↗</span></div>
    </div>
  </div>
</section>
  );
};

export default Consulting;
