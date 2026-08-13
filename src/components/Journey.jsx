import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { profileData } from '../data/profile';

export default function Journey() {
  return (
    <section id="experience" className="section journey-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic & Technical Path</span>
          <h2 className="section-title">My Development Journey</h2>
          <p className="section-description">
            A transparent timeline of my software engineering studies, technical focus, and hands-on app development milestones.
          </p>
        </div>

        <div className="timeline-container">
          <motion.div 
            className="timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
          />

          {profileData.journey.map((item, idx) => (
            <motion.div
              key={idx}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
              </div>

              <div className="card timeline-card">
                <div className="timeline-header">
                  <span className="timeline-period-badge">{item.period}</span>
                  <h3 className="timeline-role">{item.role}</h3>
                  <span className="timeline-institution">{item.institution}</span>
                </div>

                <p className="timeline-description">{item.description}</p>

                <div className="timeline-skills">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="timeline-skill-pill">
                      <FaCheckCircle className="skill-pill-check" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .journey-section {
          position: relative;
        }

        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          background: var(--border-color);
          transform: translateX(-50%);
          z-index: 0;
        }

        .timeline-item {
          display: flex;
          justify-content: flex-end;
          padding-bottom: 3.5rem;
          position: relative;
          width: 50%;
        }

        .timeline-item.left {
          left: 0;
          padding-right: 3rem;
        }

        .timeline-item.right {
          left: 50%;
          padding-left: 3rem;
          justify-content: flex-start;
        }

        .timeline-dot-wrapper {
          position: absolute;
          top: 0.5rem;
          z-index: 10;
        }

        .timeline-item.left .timeline-dot-wrapper {
          right: -6px;
        }

        .timeline-item.right .timeline-dot-wrapper {
          left: -6px;
        }

        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent-primary);
          border: 2px solid var(--bg-primary);
        }

        .timeline-card {
          width: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .timeline-header {
          margin-bottom: 1rem;
        }

        .timeline-period-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.775rem;
          font-weight: 500;
          color: var(--accent-primary);
          background: var(--bg-secondary);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          margin-bottom: 0.5rem;
        }

        .timeline-role {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.15rem;
          font-family: var(--font-heading);
        }

        .timeline-institution {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .timeline-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }

        .timeline-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border-color);
        }

        .timeline-skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          background: var(--bg-secondary);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }

        .skill-pill-check {
          color: var(--accent-primary);
          font-size: 0.7rem;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 24px;
          }
          .timeline-item, .timeline-item.left, .timeline-item.right {
            width: 100%;
            left: 0 !important;
            padding-left: 3.5rem !important;
            padding-right: 0 !important;
          }
          .timeline-item.left .timeline-dot-wrapper,
          .timeline-item.right .timeline-dot-wrapper {
            left: 18px !important;
            right: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
