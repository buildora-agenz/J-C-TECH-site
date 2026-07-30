import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import bgImage from '../assets/consulting.jpg';
import './Consulting.css';

const servicesData = [
  {
    id: 1,
    title: 'CAD Consulting',
    description: 'Transform product ideas into manufacturing-ready designs with expert CAD modeling, assemblies, technical drawings, reverse engineering, and design optimization using industry-standard engineering workflows.',
    features: ['3D CAD Modeling', 'Technical Drawings', 'Reverse Engineering', 'Design Validation']
  },
  {
    id: 2,
    title: 'Product Development',
    description: 'Accelerate your product development lifecycle from concept to prototype with engineering expertise, simulation-driven design, validation, and manufacturing support.',
    features: ['Product Design', 'Prototype Development', 'Design Optimization', 'Manufacturing Support']
  },
  {
    id: 3,
    title: 'AI for Manufacturing',
    description: 'Leverage Artificial Intelligence to improve production efficiency, predictive maintenance, quality inspection, and intelligent decision-making across modern manufacturing systems.',
    features: ['Predictive Maintenance', 'Computer Vision', 'Process Automation', 'Production Analytics']
  },
  {
    id: 4,
    title: 'EV System Consulting',
    description: 'Develop next-generation electric mobility solutions with consulting on battery systems, motor selection, BMS, charging infrastructure, thermal management, and EV architecture.',
    features: ['Battery Pack Design', 'Battery Management System', 'Motor & Controller', 'Charging Systems']
  },
  {
    id: 5,
    title: 'Wiring Harness Consulting',
    description: 'Design reliable automotive and industrial wiring harnesses with optimized routing, connector selection, protection strategies, and compliance with global standards.',
    features: ['Harness Routing', 'Connector Selection', 'Electrical Schematics', 'Manufacturing Documentation']
  },
  {
    id: 6,
    title: 'Process Improvement',
    description: 'Optimize engineering and manufacturing workflows through Lean methodologies, automation strategies, productivity analysis, and continuous improvement initiatives.',
    features: ['Lean Engineering', 'Workflow Optimization', 'Cost Reduction', 'Performance Analysis']
  },
  {
    id: 7,
    title: 'Digital Engineering',
    description: 'Enable digital transformation using CAD, CAE, PLM, Digital Twins, simulation technologies, and connected engineering workflows.',
    features: ['Digital Twin', 'PLM Integration', 'Engineering Simulation', 'Automation']
  },
  {
    id: 8,
    title: 'Technical Documentation',
    description: 'Produce industry-standard engineering documentation including SOPs, manuals, assembly guides, compliance reports, BOMs, and technical specifications.',
    features: ['SOP Documentation', 'User Manuals', 'BOM Creation', 'Engineering Reports']
  }
];

const Consulting = () => {
  const [activeService, setActiveService] = useState(null);

  const handleCardClick = (service) => {
    setActiveService(activeService?.id === service.id ? null : service);
  };

  const renderPanel = (service) => {
    return (
      <motion.div 
        key={`panel-${service.id}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="service-panel"
      >
        <div className="panel-header">
          <h3>{service.title}</h3>
          <button className="close-btn" onClick={() => setActiveService(null)} aria-label="Close panel">
            <X size={24}/>
          </button>
        </div>
        <p className="panel-desc">{service.description}</p>
        <div className="panel-features">
          {service.features.map((feature, i) => (
            <div key={i} className="feature-badge">
              <CheckCircle2 size={18} className="feature-icon" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="panel-actions">
          <button className="btn">Book Consultation</button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </motion.div>
    );
  };

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
          {servicesData.map((service) => (
            <React.Fragment key={service.id}>
              <div 
                className={`consult-card reveal ${activeService?.id === service.id ? 'active' : ''}`}
                onClick={() => handleCardClick(service)}
                style={{ cursor: 'pointer' }}
              >
                <h4>{service.title}</h4>
                <span className="arrow">↗</span>
              </div>
              
              {/* Mobile Panel inline rendering */}
              <AnimatePresence mode="wait">
                {activeService?.id === service.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="mobile-panel-wrapper"
                    style={{ overflow: 'hidden' }}
                  >
                    {renderPanel(service)}
                  </motion.div>
                )}
              </AnimatePresence>
            </React.Fragment>
          ))}
        </div>

        {/* Desktop Panel rendering below the grid */}
        <div className="desktop-panel-wrapper">
          <AnimatePresence mode="wait">
            {activeService && renderPanel(activeService)}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Consulting;
