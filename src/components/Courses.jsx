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
          <li>CERTIFIED PRODUCT DESIGN</li>
          <li>MASTERS IN INDUSTRIAL DESIGN</li>
          <li>MASTERS IN CAD / CAM ENGINEER</li>
          <li>REVERSE ENGINEERING / REMASTERING</li>
        </ul>
      </div>
      <div className="course-card reveal">
        <span className="course-num">Path 02</span>
        <h4>Artificial Intelligence</h4>
        <ul>
          <li>INDUSTRIES REQUIRED SKILLS</li>
          <li>INTERVIEW PREPARATIONS</li>
          <li>PYTHON</li>
        </ul>
      </div>
      <div className="course-card reveal">
        <span className="course-num">Path 03</span>
        <h4>Electric Vehicle</h4>
        <ul>
          <li>MASTERS IN AUTOMOTIVE DESIGN</li>
          <li>CERTIFIED IN WIRING HARNESS DESIGN</li>
          <li>BMS</li>
        </ul>
      </div>
      <div className="course-card reveal">
        <span className="course-num">Path 04</span>
        <h4>Engineering Automation</h4>
        <ul>
          <li>CERTIFIED IN CAE</li>
          <li>CERTIFIED CAM PROGRAMMER</li>
          <li>MASTERS IN R&D DESIGN</li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};

export default Courses;
