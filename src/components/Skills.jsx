import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaServer, FaBolt, FaCodeBranch, FaCheck } from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase, SiGit, SiGithub } from 'react-icons/si';
import { skillCategories } from '../data/skills';

const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'FaMobileAlt': return <FaMobileAlt />;
    case 'FaServer': return <FaServer />;
    case 'FaBolt': return <FaBolt />;
    case 'FaCodeBranch': return <FaCodeBranch />;
    default: return <FaMobileAlt />;
  }
};

const getSkillTechIcon = (skillName) => {
  const lower = skillName.toLowerCase();
  if (lower.includes('flutter')) return <SiFlutter style={{ color: '#38BDF8' }} />;
  if (lower.includes('dart')) return <SiDart style={{ color: '#0175C2' }} />;
  if (lower.includes('firebase') || lower.includes('firestore')) return <SiFirebase style={{ color: '#FFCA28' }} />;
  if (lower.includes('git')) return <SiGit style={{ color: '#F05032' }} />;
  if (lower.includes('github')) return <SiGithub style={{ color: '#F8FAFC' }} />;
  return <FaCheck style={{ color: '#38BDF8', fontSize: '0.85rem' }} />;
};

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
          >
            All Skills
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              className={`skills-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span className="tab-icon">{getCategoryIcon(cat.iconName)}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              className="card category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="category-header">
                <div className="category-icon-box">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-desc">{category.description}</p>
                </div>
              </div>

              <div className="skills-chips-wrapper">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-chip">
                    <div className="chip-icon">
                      {getSkillTechIcon(skill.name)}
                    </div>
                    <div className="chip-info">
                      <span className="chip-name">{skill.name}</span>
                      <span className="chip-level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-tab-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .skills-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          background: rgba(23, 32, 51, 0.6);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .skills-tab:hover {
          color: var(--text-primary);
          border-color: var(--text-secondary);
        }

        .skills-tab.active {
          background: var(--accent-primary);
          color: #FFFFFF;
          border-color: var(--accent-primary);
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
        }

        .tab-icon {
          display: flex;
          font-size: 0.95rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }

        .category-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .category-header {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .category-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(37, 99, 235, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.25);
          color: var(--accent-secondary);
          font-size: 1.35rem;
          flex-shrink: 0;
        }

        .category-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .category-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .skills-chips-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          gap: 0.85rem;
        }

        .skill-chip {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.85rem;
          border-radius: var(--radius-md);
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-color);
          transition: all var(--transition-fast);
        }

        .skill-chip:hover {
          border-color: var(--border-color-glow);
          background: rgba(30, 41, 59, 0.8);
          transform: translateY(-2px);
        }

        .chip-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .chip-info {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .chip-name {
          font-weight: 600;
          font-size: 0.875rem;
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
      `}</style>
    </section>
  );
}
