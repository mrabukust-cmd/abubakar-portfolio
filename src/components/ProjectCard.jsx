import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaCheck, FaStar } from 'react-icons/fa';

export default function ProjectCard({ project, onOpenModal }) {
  const isFeatured = project.featured;

  if (isFeatured) {
    return (
      <motion.div
        className="card project-card featured-project-card"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="featured-banner-tag">
          <FaStar className="star-icon" /> Featured Software Project
        </div>

        <div className="featured-grid">
          <div className="project-image-container featured-img-container">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-image-overlay">
              <span className="project-category-badge">{project.badge}</span>
            </div>
          </div>

          <div className="project-card-body featured-body">
            <div className="project-header">
              <h3 className="project-title featured-title">{project.title}</h3>
              <span className="project-tagline">{project.tagline}</span>
            </div>

            <p className="project-description">{project.shortDescription}</p>

            <div className="project-features-list-wrapper">
              <h4 className="features-subheading">Implemented Features:</h4>
              <ul className="project-features-list">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="feature-item">
                    <FaCheck className="feature-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-tech-stack">
              {project.technologies.map((tech, tIdx) => (
                <span key={tIdx} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project-card-actions">
              <button
                className="btn btn-primary btn-sm flex-1"
                onClick={() => onOpenModal(project)}
              >
                <FaInfoCircle />
                <span>View Detailed Case Study</span>
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  title="View Source on GitHub"
                >
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        <style>{`
          .featured-project-card {
            grid-column: 1 / -1;
            padding: 0;
            background: linear-gradient(135deg, rgba(23, 32, 51, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%);
            border: 1px solid var(--border-color-glow);
            box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 25px rgba(56, 189, 248, 0.15);
            position: relative;
            overflow: hidden;
            margin-bottom: 1.5rem;
          }

          .featured-banner-tag {
            position: absolute;
            top: 1rem;
            right: 1rem;
            z-index: 10;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            background: rgba(37, 99, 235, 0.9);
            color: #FFFFFF;
            font-size: 0.775rem;
            font-weight: 700;
            padding: 0.35rem 0.85rem;
            border-radius: var(--radius-full);
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
          }

          .star-icon {
            color: #FFCA28;
          }

          .featured-grid {
            display: grid;
            grid-template-columns: 1.15fr 1fr;
            min-height: 420px;
          }

          .featured-img-container {
            height: 100%;
            min-height: 380px;
          }

          .featured-body {
            padding: 2.25rem;
          }

          .featured-title {
            font-size: 2.15rem;
          }

          .features-subheading {
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
            font-family: var(--font-mono);
          }

          @media (max-width: 960px) {
            .featured-grid {
              grid-template-columns: 1fr;
            }
            .featured-img-container {
              height: 250px;
              min-height: 250px;
            }
          }
        `}</style>
      </motion.div>
    );
  }

  // Standard Project Card
  return (
    <motion.div
      className="card project-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-img" />
        <div className="project-image-overlay">
          <span className="project-category-badge">{project.badge}</span>
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-tagline">{project.tagline}</span>
        </div>

        <p className="project-description">{project.shortDescription}</p>

        <ul className="project-features-list">
          {project.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="feature-item">
              <FaCheck className="feature-check" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div className="project-tech-stack">
          {project.technologies.map((tech, tIdx) => (
            <span key={tIdx} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="project-card-actions">
          <button
            className="btn btn-primary btn-sm flex-1"
            onClick={() => onOpenModal(project)}
          >
            <FaInfoCircle />
            <span>View Details</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
              title="View Source on GitHub"
            >
              <FaGithub />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
              title="Live Demo"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>

      <style>{`
        .project-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--bg-card);
        }

        .project-image-container {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          background: #0B0F19;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .project-card:hover .project-img {
          transform: scale(1.05);
        }

        .project-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(15, 23, 42, 0.9) 100%);
          display: flex;
          align-items: flex-start;
          padding: 1rem;
        }

        .project-category-badge {
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-color-glow);
          color: var(--accent-secondary);
          font-family: var(--font-mono);
          font-size: 0.775rem;
          font-weight: 600;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .project-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-header {
          margin-bottom: 0.75rem;
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .project-tagline {
          font-size: 0.85rem;
          color: var(--accent-secondary);
          font-weight: 500;
        }

        .project-description {
          font-size: 0.925rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          line-height: 1.6;
        }

        .project-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.825rem;
          color: var(--text-secondary);
        }

        .feature-check {
          color: #10B981;
          font-size: 0.75rem;
          flex-shrink: 0;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
          padding-top: 1rem;
          margin-bottom: 1.25rem;
          border-top: 1px solid var(--border-color);
        }

        .tech-badge {
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .project-card-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .flex-1 {
          flex: 1;
        }
      `}</style>
    </motion.div>
  );
}
