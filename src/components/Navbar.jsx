import React from 'react';

const Navbar = () => {
  return (
    <header>
<nav id="navbar" aria-label="Primary">
  <div className="container">
    <a href="#hero" className="nav-brand">
      <span className="logo-badge"><svg className="logo" role="img" aria-label="JC Tech logo"><use href="#jc-logo"></use></svg></span>
      <div>
        <span>JC Tech</span>
        <small>Learn from real industry experience</small>
      </div>
    </a>
    <div className="nav-links">
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#courses">Courses</a>
      <a href="#ai-solutions">AI Solutions</a>
      <a href="#ev">EV Engineering</a>
      <a href="#consulting">Consulting</a>
      <a href="#corporate">Corporate Training</a>
      <a href="#blog">Blog</a>
      <a href="#contact">Contact</a>
    </div>
    <div className="nav-cta">
      <a href="#contact" className="nav-cta-btn">Book Consultation</a>
    </div>
  </div>
</nav>
</header>
  );
};

export default Navbar;
