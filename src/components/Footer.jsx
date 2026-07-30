import React from 'react';

const Footer = () => {
  return (
    <footer>
  <div className="container">
    <div className="footer-top">
      <div>
        <div className="footer-brand"><span className="logo-badge"><svg className="logo" role="img" aria-label="JC Tech logo"><use href="#jc-logo"></use></svg></span><span>J C Tech</span></div>
        <div className="tagline">Engineering the Future with Intelligence</div>
        <div className="subtagline">Learn from Real Industry Experience</div>
      </div>
      <div className="footer-col">
        <h5>Company</h5>
        <a href="#about">About</a>
        <a href="#founder">Founder</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-col">
        <h5>Programs</h5>
        <a href="#courses">Courses</a>
        <a href="#corporate">Corporate Training</a>
        <a href="#consulting">Consulting</a>
        <a href="#ai-solutions">AI Solutions</a>
      </div>
      <div className="footer-col">
        <h5>Resources</h5>
        <a href="#hub">Knowledge Hub</a>
        <a href="#blog">Blog</a>
        <a href="#ev">EV Engineering</a>
        <a href="#industries">Industries</a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2026 JC Tech. All rights reserved.</p>
      <div className="socials">
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/></svg></a>
        <a href="https://wa.me/919940226776" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5a2 2 0 012-2h3l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v3a2 2 0 01-2 2A16 16 0 013 5z"/></svg></a>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
