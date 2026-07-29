import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaFire, FaPlug, FaPalette, FaCheck } from 'react-icons/fa';
import { servicesData } from '../data/services';

const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'FaMobileAlt': return <FaMobileAlt />;
    case 'FaFire': return <FaFire />;
    case 'FaPlug': return <FaPlug />;
    case 'FaPalette': return <FaPalette />;
    default: return <FaMobileAlt />;
  }
};

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Core Capabilities</span>
          <h2 className="section-title">What I Can Build</h2>
          <p className="section-description">
            Technical services and development solutions I deliver with Flutter, Firebase, and modern software engineering practices.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              className="card service-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="service-icon-box">
                {getServiceIcon(service.iconName)}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-highlights-list">
                {service.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="service-highlight-item">
                    <FaCheck className="highlight-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          padding: 2rem;
        }

        .service-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.25);
          color: var(--accent-secondary);
          font-size: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .service-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
        }

        .service-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .service-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .service-highlight-item {
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
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
