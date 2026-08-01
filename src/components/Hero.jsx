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

      <div className="container" style={{ position: 'relative', zIndex: 2, marginTop: '80px' }}>
        <div className="hero-content" style={{ maxWidth: '850px', textAlign: 'left', margin: 0, alignItems: 'flex-start' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 style={{ 
              color: '#fff', 
              fontSize: 'clamp(3rem, 7vw, 5.5rem)', 
              fontWeight: '900', 
              margin: 0, 
              letterSpacing: '-0.02em', 
              lineHeight: 1.1, 
              textTransform: 'uppercase', 
              background: 'linear-gradient(to right, #ffffff, #93a2c4)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              textShadow: 'none' 
            }}>
              WELCOME TO JC TECH
            </h2>
            <p style={{ 
              color: 'var(--orange-500)', 
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', 
              marginTop: '16px', 
              fontWeight: '600', 
              letterSpacing: '2px', 
              textTransform: 'uppercase' 
            }}>
              Learn from real industry experience
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'flex-start' }}
          >
            <a href="#courses" className="btn btn-primary">Explore Courses</a>
            <a href="#contact" className="btn btn-ghost">Book Free Consultation</a>
          </motion.div>

          <motion.div 
            className="hero-stats" 
            style={{ justifyContent: 'flex-start', marginTop: '60px' }}
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
