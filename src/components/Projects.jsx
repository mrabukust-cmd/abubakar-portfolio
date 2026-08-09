import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData, projectCategories } from '../data/projects';

const ProjectModal = React.lazy(() => import('./ProjectModal'));
import { socialLinks } from '../data/socialLinks';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaTimes, FaInbox } from 'react-icons/fa';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = projectsData.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      proj.title.toLowerCase().includes(q) ||
      proj.shortDescription.toLowerCase().includes(q) ||
      proj.tagline.toLowerCase().includes(q) ||
      proj.technologies.some(t => t.toLowerCase().includes(q)) ||
      proj.features.some(f => f.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

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

        {/* Filter & Search Controls */}
        <div className="projects-controls-container">
          {/* Category Filter Pills */}
          <div className="projects-filter-bar">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                style={{ position: 'relative' }}
              >
                <span style={{ zIndex: 2, position: 'relative' }}>{cat}</span>
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="projectCategoryPill"
                    className="filter-btn-active-bg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Real-time Search Box */}
          <div className="projects-search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by tech or keyword (e.g. Firebase, Chat, Mentora)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="projects-search-input"
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery('')} aria-label="Clear search">
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Filter / Search Active Status Indicator */}
        {(selectedCategory !== 'All' || searchQuery) && (
          <div className="projects-filter-status">
            <span>
              Showing {filteredProjects.length} of {projectsData.length} projects
              {searchQuery ? ` matching "${searchQuery}"` : ''}
              {selectedCategory !== 'All' ? ` in category "${selectedCategory}"` : ''}
            </span>
            <button className="reset-filter-btn" onClick={clearFilters}>
              Reset Filters
            </button>
          </div>
        )}

        {/* Projects Grid with AnimatePresence */}
        {filteredProjects.length > 0 ? (
          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
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
        ) : (
          <div className="projects-empty-state card glass-panel">
            <FaInbox className="empty-icon" />
            <h3>No projects found</h3>
            <p>No project matched your search parameters. Try searching for "Flutter", "Firebase", or reset filters.</p>
            <button className="btn btn-secondary btn-sm" onClick={clearFilters}>
              Clear Search & Filters
            </button>
          </div>
        )}

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

        .projects-controls-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .projects-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .projects-search-box {
          position: relative;
          width: 100%;
          max-width: 480px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .projects-search-input {
          width: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.65rem 2.5rem 0.65rem 2.6rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.875rem;
          transition: all var(--transition-fast);
        }

        .projects-search-input:focus {
          border-color: var(--accent-primary);
        }

        .search-clear-btn {
          position: absolute;
          right: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .search-clear-btn:hover {
          color: var(--text-primary);
        }

        .projects-filter-status {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-sm);
          margin-bottom: 2rem;
          font-size: 0.85rem;
          color: var(--accent-primary);
          font-family: var(--font-mono);
        }

        .reset-filter-btn {
          background: transparent;
          border: none;
          color: var(--text-primary);
          text-decoration: underline;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.85rem;
          font-family: var(--font-mono);
        }

        .projects-empty-state {
          text-align: center;
          padding: 3.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .empty-icon {
          font-size: 2.75rem;
          color: var(--text-muted);
        }

        .filter-btn {
          position: relative;
          padding: 0.45rem 1.1rem;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.85rem;
          font-family: var(--font-mono);
          cursor: pointer;
          transition: color var(--transition-fast);
          overflow: hidden;
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
        }

        .filter-btn.active {
          color: #0D0D11;
          border-color: var(--accent-primary);
        }

        [data-theme="light"] .filter-btn.active {
          color: #FFFFFF;
        }

        .filter-btn-active-bg {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-sm);
          background: var(--accent-primary);
          z-index: 1;
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

