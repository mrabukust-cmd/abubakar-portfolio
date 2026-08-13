import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { getCategoryIcon } from '../utils/iconMap';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Proficiency</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            Organized tools and software engineering methodologies I utilize to build robust mobile products.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="skills-tab-bar">
          <button
            className={`skills-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
            style={{ position: 'relative' }}
          >
            <span style={{ zIndex: 2, position: 'relative' }}>All Skills</span>
            {activeTab === 'all' && (
              <motion.div
                layoutId="skillTabPill"
                className="skills-tab-active-bg"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`skills-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
              style={{ position: 'relative' }}
            >
              <span className="tab-icon" style={{ zIndex: 2, position: 'relative' }}>{getCategoryIcon(cat.iconName)}</span>
              <span style={{ zIndex: 2, position: 'relative' }}>{cat.title}</span>
              {activeTab === cat.id && (
                <motion.div
                  layoutId="skillTabPill"
                  className="skills-tab-active-bg"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <motion.div layout className="skills-grid">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              layout
              className="card category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="category-header">
                <span className="category-icon-inline">
                  {getCategoryIcon(category.iconName)}
                </span>
                <div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-desc">{category.description}</p>
                </div>
              </div>

              <motion.div 
                className="skills-chips-wrapper"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.04
                    }
                  }
                }}
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    className="skill-chip"
                    variants={{
                      hidden: { opacity: 0, scale: 0.95 },
                      show: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{ scale: 1.02, y: -1 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  >
                    <span className="skill-dot">●</span>
                    <div className="chip-info">
                      <span className="chip-name">{skill.name}</span>
                      <span className="chip-level">{skill.level}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-tab-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .skills-tab {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
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

        .skills-tab:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
        }

        .skills-tab.active {
          color: #0D0D11;
          border-color: var(--accent-primary);
        }

        [data-theme="light"] .skills-tab.active {
          color: #FFFFFF;
        }

        .skills-tab-active-bg {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-sm);
          background: var(--accent-primary);
          z-index: 1;
        }

        .tab-icon {
          display: flex;
          font-size: 0.95rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .category-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 2rem;
        }

        .category-header {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .category-icon-inline {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.35rem;
          color: var(--accent-primary);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .category-title {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          font-family: var(--font-heading);
        }

        .category-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .skills-chips-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 0.75rem;
        }

        .skill-chip {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 0.85rem;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          transition: all var(--transition-fast);
        }

        .skill-chip:hover {
          border-color: var(--accent-primary);
        }

        .skill-dot {
          color: var(--accent-primary);
          font-size: 0.6rem;
        }

        .chip-info {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .chip-name {
          font-weight: 500;
          font-size: 0.85rem;
          color: var(--text-primary);
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .chip-level {
          font-size: 0.725rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .skills-chips-wrapper {
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
            gap: 0.65rem;
          }
          .skills-tab-bar {
            gap: 0.5rem;
          }
          .skills-tab {
            padding: 0.4rem 0.85rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}
