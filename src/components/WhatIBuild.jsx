import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaFire, FaPlug, FaBolt, FaCheck } from 'react-icons/fa';
import { whatIBuildData } from '../data/whatIBuild';

const getCapabilityIcon = (iconName) => {
  switch (iconName) {
    case 'FaMobileAlt': return <FaMobileAlt />;
    case 'FaFire': return <FaFire />;
    case 'FaPlug': return <FaPlug />;
    case 'FaBolt': return <FaBolt />;
    default: return <FaMobileAlt />;
  }
};

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="section what-i-build-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Capabilities</span>
          <h2 className="section-title">What I Build</h2>
          <p className="section-description">
            Software engineering capabilities and mobile application solutions I develop using Flutter, Firebase, APIs, and clean software practices.
          </p>
        </div>

        <div className="capabilities-grid">
          {whatIBuildData.map((item, idx) => (
            <motion.div
              key={item.id}
              className="card capability-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="capability-icon-box">
                {getCapabilityIcon(item.iconName)}
              </div>

              <h3 className="capability-title">{item.title}</h3>
              <p className="capability-description">{item.description}</p>

              <div className="capability-highlights-list">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="capability-highlight-item">
                    <FaCheck className="highlight-check" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .what-i-build-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }

        .capability-card {
          display: flex;
          flex-direction: column;
          padding: 2rem;
        }

        .capability-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(249, 115, 22, 0.3);
          color: var(--accent-secondary);
          font-size: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .capability-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }

        .capability-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .capability-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .capability-highlight-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .highlight-check {
          color: #10B981;
          font-size: 0.75rem;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .capabilities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
