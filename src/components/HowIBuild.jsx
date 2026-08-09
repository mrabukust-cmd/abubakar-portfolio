import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';

export default function HowIBuild() {
  return (
    <section id="process" className="section how-i-build-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Engineering Approach</span>
          <h2 className="section-title">How I Build</h2>
          <p className="section-description">
            A structured software engineering process to transform application ideas into robust, functional mobile software.
          </p>
        </div>

        <div className="process-grid">
          {profileData.howIBuild.map((step, idx) => (
            <motion.div
              key={step.step}
              className="card process-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="process-card-header">
                <span className="process-number">{step.step}</span>
                <div className="process-line" />
              </div>

              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .how-i-build-section {
          position: relative;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .process-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .process-card:hover {
          border-color: var(--accent-primary);
          background: var(--bg-card-hover);
        }

        .process-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .process-number {
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--accent-primary);
          background: var(--bg-secondary);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }

        .process-line {
          flex: 1;
          height: 1px;
          background: var(--border-color);
        }

        .process-title {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
          font-family: var(--font-heading);
        }

        .process-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
