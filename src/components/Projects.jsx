import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData, projectCategories } from '../data/projects';
import { socialLinks } from '../data/socialLinks';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(proj => proj.category === selectedCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Real-World Software</span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-description">
            A selection of applications and software projects I've worked on while developing my skills and solving real-world problems.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

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
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}

      <style>{`
        .projects-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .projects-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          background: rgba(38, 30, 23, 0.6);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--text-secondary);
        }

        .filter-btn.active {
          background: var(--accent-primary);
          color: #FFFFFF;
          border-color: var(--accent-primary);
          box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
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
          border-radius: var(--radius-lg);
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          backdrop-filter: blur(16px);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .projects-more-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, var(--accent-primary), var(--accent-secondary));
        }

        .projects-more-card:hover {
          border-color: var(--border-color-glow);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.15);
          transform: translateY(-2px);
        }

        .projects-more-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .projects-more-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .github-more-btn {
          padding: 0.85rem 1.75rem;
          font-size: 1rem;
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

          .projects-more-card::before {
            width: 100%;
            height: 4px;
            top: 0;
            left: 0;
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

