import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaCheck } from 'react-icons/fa';

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <motion.div
      className="card project-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="project-image-container">
        <img src={project.image} alt={`${project.title} App Mockup`} className="project-img" loading="lazy" />
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
            aria-label={`View details for ${project.title}`}
          >
            <FaInfoCircle />
            <span>View Details</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="View Source on GitHub"
              aria-label={`View ${project.title} repository on GitHub`}
            >
              <FaGithub />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Live Demo"
              aria-label={`View ${project.title} live demo`}
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
          height: 250px;
          overflow: hidden;
          background: #0D0A07;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: var(--radius-sm);
          transition: transform var(--transition-slow);
        }

        .project-card:hover .project-img {
          transform: scale(1.03);
        }

        .project-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(20, 16, 13, 0.95) 100%);
          display: flex;
          align-items: flex-start;
          padding: 0.85rem;
          pointer-events: none;
        }

        .project-category-badge {
          background: rgba(24, 20, 16, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-color-glow);
          color: var(--accent-secondary);
          font-family: var(--font-mono);
          font-size: 0.775rem;
          font-weight: 600;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          pointer-events: auto;
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
          color: #F59E0B;
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
          background: rgba(38, 30, 23, 0.6);
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

        @media (max-width: 640px) {
          .project-image-container {
            height: 200px;
          }
        }
      `}</style>
    </motion.div>
  );
}
