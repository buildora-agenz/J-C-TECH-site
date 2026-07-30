import React from 'react';

const Courses = () => {
  return (
    <section id="courses">
  <div className="container">
    <div className="section-head reveal">
      <div className="eyebrow">Courses, Organized by Career Path</div>
      <h2>Choose Where You Want to Go — We'll Build the Path</h2>
      <p>Instead of a list of software names, we organize learning by the career you're building toward.</p>
    </div>
    <div className="course-grid stagger">
      <div className="course-card reveal">
        <span className="course-num">Path 01</span>
        <h4>Mechanical Design</h4>
        <ul>
          <li>CATIA</li><li>Creo</li><li>NX</li><li>GD&amp;T</li><li>DFMEA</li><li>DFM</li>
        </ul>
      </div>
      <div className="course-card reveal">
        <span className="course-num">Path 02</span>
        <h4>Artificial Intelligence</h4>
        <ul>
          <li>Python</li><li>Machine Learning</li><li>Deep Learning</li><li>Computer Vision</li><li>LLM</li>
        </ul>
      </div>
      <div className="course-card reveal">
        <span className="course-num">Path 03</span>
        <h4>Electric Vehicle</h4>
        <ul>
          <li>Battery</li><li>Motor</li><li>BMS</li><li>Charging</li><li>HV Harness</li><li>Safety</li>
        </ul>
      </div>
      <div className="course-card reveal">
        <span className="course-num">Path 04</span>
        <h4>Engineering Automation</h4>
        <ul>
          <li>Python Automation</li><li>Excel Automation</li><li>CAD Automation</li><li>AI Automation</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};

export default Courses;
