import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { whatIBuildData } from '../data/whatIBuild';
import { getCapabilityIcon } from '../utils/iconMap';

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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="capability-header-row">
                <span className="capability-index">0{idx + 1} / CAPABILITY</span>
                <span className="capability-icon-inline">
                  {getCapabilityIcon(item.iconName)}
                </span>
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
          gap: 1.5rem;
        }

        .capability-card {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-left: 2px solid var(--accent-primary);
          border-radius: var(--radius-sm);
        }

        .capability-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .capability-index {
          font-family: var(--font-mono);
          font-size: 0.775rem;
          color: var(--accent-primary);
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .capability-icon-inline {
          font-size: 1.25rem;
          color: var(--accent-primary);
        }

        .capability-title {
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
          font-family: var(--font-heading);
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
          color: var(--accent-primary);
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
