import React from 'react';
import { motion } from 'framer-motion';
import FloatingServiceCards from './FloatingServiceCards';

const Hero = () => {
  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      
      {/* Background Video */}
      <video 
        src="/jc-animation.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.7
        }}
      />
      
      {/* Gradient overlay to ensure text is readable against the video */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, rgba(4,11,26,0.95) 0%, rgba(4,11,26,0.5) 50%, rgba(4,11,26,0.2) 100%)',
        zIndex: 1
      }} />

      <FloatingServiceCards />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content">
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="eyebrow">Engineering Intelligence Company</div>
            <h1>Learn from Real <span className="accent">experience</span></h1>
            <p className="hero-desc" style={{ textAlign: 'left', margin: '0 auto 40px auto' }}>
              JC Tech empowers engineers, students and industries through practical training, AI-driven engineering solutions, EV technologies, CAD expertise and industrial consulting.
            </p>
          </motion.div>
          
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            style={{ marginTop: '120px' }}
          >
            <a href="#courses" className="btn btn-primary">Explore Courses</a>
            <a href="#contact" className="btn btn-ghost">Book Free Consultation</a>
          </motion.div>

          <motion.div 
            className="hero-stats" 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          >
            <div className="hero-stat"><b>22+</b><span>Years Industry Experience</span></div>
            <div className="hero-stat"><b>CAD · AI · EV</b><span>Integrated Curriculum</span></div>
            <div className="hero-stat"><b>100%</b><span>Project-Based Learning</span></div>
          </motion.div>

        </div>
      </div>
      
      <div className="scroll-cue" style={{ zIndex: 2 }}><span>Scroll</span><div className="line"></div></div>
    </section>
  );
};

export default Hero;
