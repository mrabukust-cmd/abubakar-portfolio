import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const ProjectModal = React.lazy(() => import('./ProjectModal'));
import { socialLinks } from '../data/socialLinks';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Real-World Software</span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-description">
            Mobile application solutions I build using Flutter, Cloud Firestore, REST APIs, and clean software architecture.
          </p>
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  onOpenModal={(proj) => setActiveModalProject(proj)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects on GitHub CTA */}
        <div className="projects-more-cta">
          <div className="projects-more-card">
            <div className="projects-more-info">
              <h3 className="projects-more-title">Looking for more projects?</h3>
              <p className="projects-more-desc">
                Explore all of my repositories, experimental apps, and open-source code on my GitHub profile.
              </p>
            </div>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary github-more-btn"
            >
              <FaGithub style={{ fontSize: '1.25rem' }} />
              <span>Go to My GitHub Profile</span>
              <FaExternalLinkAlt style={{ fontSize: '0.85rem', opacity: 0.85 }} />
            </a>
          </div>
        </div>
      </div>

      {/* Modal Render */}
      {activeModalProject && (
        <React.Suspense fallback={null}>
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        </React.Suspense>
      )}

      <style>{`
        .projects-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }

        .projects-more-cta {
          margin-top: 3.5rem;
          display: flex;
          justify-content: center;
        }

        .projects-more-card {
          width: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-left: 2px solid var(--accent-primary);
          border-radius: var(--radius-sm);
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          transition: all var(--transition-normal);
          position: relative;
        }

        .projects-more-card:hover {
          border-color: var(--accent-primary);
        }

        .projects-more-title {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
          font-family: var(--font-heading);
        }

        .projects-more-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .github-more-btn {
          padding: 0.75rem 1.5rem;
          font-size: 0.925rem;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .projects-more-card {
            flex-direction: column;
            text-align: center;
            padding: 1.75rem 1.5rem;
            gap: 1.25rem;
          }

          .github-more-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
