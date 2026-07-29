import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaExclamationTriangle, FaLightbulb, FaUserCheck } from 'react-icons/fa';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <motion.div
          className="modal-content glass-panel"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Modal Header Bar */}
          <div className="modal-header">
            <div className="modal-badge">{project.badge}</div>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close project modal">
              <FaTimes />
            </button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            {/* Banner Image Container */}
            <div className="modal-image-wrapper">
              <img src={project.image} alt={`${project.title} Screenshot`} className="modal-banner-img" />
              <div className="modal-banner-info">
                <h2 id="modal-title" className="modal-title">{project.title}</h2>
                <p className="modal-tagline">{project.tagline}</p>
              </div>
            </div>

            {/* Quick Actions & Tech Stack */}
            <div className="modal-quick-bar">
              <div className="modal-tech-pills">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="modal-tech-tag">{tech}</span>
                ))}
              </div>
              <div className="modal-action-btns">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    <FaGithub /> View Source
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Overview */}
            <div className="modal-section">
              <h3 className="modal-section-title">Overview</h3>
              <p className="modal-text">{project.shortDescription}</p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="modal-grid-2">
              <div className="card modal-card problem-card">
                <div className="modal-card-header text-red">
                  <FaExclamationTriangle className="modal-icon" />
                  <h4>The Engineering Challenge</h4>
                </div>
                <p className="modal-card-text">{project.modalData.problem}</p>
              </div>

              <div className="card modal-card solution-card">
                <div className="modal-card-header text-cyan">
                  <FaLightbulb className="modal-icon" />
                  <h4>The Architectural Solution</h4>
                </div>
                <p className="modal-card-text">{project.modalData.solution}</p>
              </div>
            </div>

            {/* Features List */}
            <div className="modal-section">
              <h3 className="modal-section-title">Key Implemented Features</h3>
              <div className="modal-features-grid">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="modal-feature-item">
                    <FaCheckCircle className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contribution & Key Challenges */}
            <div className="modal-grid-2">
              <div className="modal-section">
                <h3 className="modal-section-title">
                  <FaUserCheck className="inline-icon text-cyan" /> My Specific Contribution
                </h3>
                <p className="modal-text">{project.modalData.contribution}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Technical Challenges Overcome</h3>
                <ul className="modal-bullets">
                  {project.modalData.challenges.map((challenge, cIdx) => (
                    <li key={cIdx}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-outline" onClick={onClose} aria-label="Close case study details">
              Close Details
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          overflow-y: auto;
        }

        .modal-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color-glow);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 860px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          background: var(--bg-primary);
        }

        .modal-badge {
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: var(--accent-secondary);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .modal-close-btn {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.1rem;
        }

        .modal-close-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          color: #EF4444;
        }

        .modal-body {
          padding: 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .modal-image-wrapper {
          position: relative;
          width: 100%;
          height: 320px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #070B12;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border: 1px solid var(--border-color);
        }

        .modal-banner-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: var(--radius-sm);
        }

        .modal-banner-info {
          position: absolute;
          bottom: 0.75rem;
          left: 1rem;
          right: 1rem;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color-glow);
        }

        .modal-title {
          font-size: 1.65rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .modal-tagline {
          font-size: 0.9rem;
          color: var(--accent-secondary);
          font-weight: 500;
        }

        .modal-quick-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-tech-tag {
          background: rgba(30, 41, 59, 0.7);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-sm);
        }

        .modal-action-btns {
          display: flex;
          gap: 0.75rem;
        }

        .modal-section-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .modal-text {
          font-size: 0.975rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .modal-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .modal-card {
          padding: 1.25rem;
          background: rgba(15, 23, 42, 0.6);
        }

        .modal-card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .text-red { color: #F43F5E; }
        .text-cyan { color: var(--accent-secondary); }

        .modal-card-text {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .modal-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .modal-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          background: rgba(30, 41, 59, 0.4);
          padding: 0.65rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .modal-bullets {
          list-style: disc;
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .inline-icon {
          font-size: 1.1rem;
        }

        .modal-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid var(--border-color);
          background: var(--bg-primary);
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 768px) {
          .modal-grid-2, .modal-features-grid {
            grid-template-columns: 1fr;
          }
          .modal-quick-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .modal-image-wrapper {
            height: 220px;
          }
          .modal-title {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
