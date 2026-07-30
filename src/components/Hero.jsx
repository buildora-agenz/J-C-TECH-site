import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
  <div className="hero-grid"></div>
  <div className="hero-orbit-wrap" aria-hidden="true">
    <div className="hero-orbit">
      <svg viewBox="0 0 900 900">
        <g className="g-rays" stroke="#2A52A0" opacity="0.55"><line className="ray" x1="450" y1="60" x2="450" y2="220" strokeWidth="10"/><line className="ray" x1="450" y1="680" x2="450" y2="840" strokeWidth="10"/><line className="ray" x1="60" y1="450" x2="220" y2="450" strokeWidth="10"/><line className="ray" x1="680" y1="450" x2="840" y2="450" strokeWidth="10"/><line className="ray" x1="171" y1="171" x2="280" y2="280" strokeWidth="10"/><line className="ray" x1="620" y1="620" x2="729" y2="729" strokeWidth="10"/><line className="ray" x1="729" y1="171" x2="620" y2="280" strokeWidth="10"/><line className="ray" x1="280" y1="620" x2="171" y2="729" strokeWidth="10"/></g>
        <circle className="ring g-ring-1" cx="450" cy="450" r="220" stroke="#FF6A1F" opacity="0.5"/>
        <circle className="ring g-ring-2" cx="450" cy="450" r="170" stroke="#FF9152" opacity="0.4"/>
        <circle className="ring" cx="450" cy="450" r="120" stroke="#2A52A0" opacity="0.6"/>
      </svg>
    </div>
  </div>
  <div className="hero-visual" aria-hidden="true">
    <div className="hero-logo-float">
      <div className="hero-logo-rotate">
        <svg className="logo" aria-hidden="true" focusable="false"><use href="#jc-logo"></use></svg>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="hero-content">
      <div className="eyebrow">Engineering Intelligence Company</div>
      <h1>Learn from Real <span className="accent">experience</span></h1>
      <p className="hero-desc">JC Tech empowers engineers, students and industries through practical training, AI-driven engineering solutions, EV technologies, CAD expertise and industrial consulting.</p>
      <div className="hero-btns">
        <a href="#courses" className="btn btn-primary">Explore Courses</a>
        <a href="#contact" className="btn btn-ghost">Book Free Consultation</a>
      </div>
      <div className="hero-stats">
        <div className="hero-stat"><b>22+</b><span>Years Industry Experience</span></div>
        <div className="hero-stat"><b>CAD · AI · EV</b><span>Integrated Curriculum</span></div>
        <div className="hero-stat"><b>100%</b><span>Project-Based Learning</span></div>
      </div>
    </div>
  </div>
  <div className="scroll-cue"><span>Scroll</span><div className="line"></div></div>
</section>
  );
};

export default Hero;
