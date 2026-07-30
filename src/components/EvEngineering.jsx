import React from 'react';

const EvEngineering = () => {
  return (
    <section id="ev">
  <div className="container">
    <div className="ev-wrap">
      <div className="ev-visual reveal">
        <div className="glow"></div>
        <svg viewBox="0 0 200 200" fill="none">
          <rect x="30" y="80" width="140" height="55" rx="10" stroke="#FF9152" strokeWidth="2.5"/>
          <circle cx="60" cy="150" r="16" stroke="#FF6A1F" strokeWidth="2.5"/>
          <circle cx="140" cy="150" r="16" stroke="#FF6A1F" strokeWidth="2.5"/>
          <path d="M50 80V60a10 10 0 0110-10h80a10 10 0 0110 10v20" stroke="#2A52A0" strokeWidth="2.5"/>
          <path d="M70 100h20l-8 15h18l-22 25 6-22H70z" fill="#FF6A1F"/>
        </svg>
      </div>
      <div>
        <div className="section-head reveal">
          <div className="eyebrow">Electric Vehicle Engineering</div>
          <h2>Full-Stack EV Systems, Taught the Way Industry Builds Them</h2>
          <p>From cells to charging infrastructure — the complete EV engineering stack.</p>
        </div>
        <div className="ev-list stagger">
          <div className="ev-item reveal"><span className="num">01</span>Battery Systems</div>
          <div className="ev-item reveal"><span className="num">02</span>Motor Systems</div>
          <div className="ev-item reveal"><span className="num">03</span>Charging</div>
          <div className="ev-item reveal"><span className="num">04</span>Thermal Management</div>
          <div className="ev-item reveal"><span className="num">05</span>Safety</div>
          <div className="ev-item reveal"><span className="num">06</span>Harness</div>
          <div className="ev-item reveal"><span className="num">07</span>Standards</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default EvEngineering;
