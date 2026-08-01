import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BriefcaseBusiness, Factory } from 'lucide-react';
import './HeroBusinessCards.css';

const cards = [
  {
    icon: <GraduationCap size={24} strokeWidth={1.5} color="#ff7a30" />,
    title: "Corporate Training",
    subtitle: "Industry-Ready Engineering Programs",
    marginRight: 0,
  },
  {
    icon: <BriefcaseBusiness size={24} strokeWidth={1.5} color="#ff7a30" />,
    title: "Engineering Consulting",
    subtitle: "From Design to Manufacturing Support",
    marginRight: 40,
  },
  {
    icon: <Factory size={24} strokeWidth={1.5} color="#ff7a30" />,
    title: "Industrial Automation",
    subtitle: "Smart Manufacturing & Digital Transformation",
    marginRight: 80,
  }
];

const HeroBusinessCards = () => {
  return (
    <div className="bc-wrapper">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="bc-card"
          style={{ marginRight: `${card.marginRight}px` }}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: index * 0.15 },
            x: { duration: 0.6, delay: index * 0.15 },
            scale: { duration: 0.6, delay: index * 0.15 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2 // slight offset
            }
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
            transition: { duration: 0.25 }
          }}
        >
          <div className="bc-icon">
            {card.icon}
          </div>
          <div className="bc-content">
            <div className="bc-title">{card.title}</div>
            <div className="bc-subtitle">{card.subtitle}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroBusinessCards;
