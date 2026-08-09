import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaFolderOpen } from 'react-icons/fa';
import { profileData } from '../data/profile';

export default function GithubSection() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section github-section">
      <div className="container">
        <motion.div
          className="card github-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="github-grid">
            <div className="github-content">
              <div className="github-badge">
                <FaCodeBranch />
                <span>Open Source & Code Quality</span>
              </div>

              <h2 className="github-title">Building in Public</h2>

              <p className="github-description">
                I use GitHub to manage project repositories, maintain clean commit histories, track architectural refactoring, and continuously improve my Flutter code quality.
              </p>

              <div className="github-actions">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  aria-label="View Abubakar Siddique GitHub Profile"
                >
                  <FaGithub />
                  <span>View GitHub Profile</span>
                </a>

                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="btn btn-secondary">
                  <FaFolderOpen />
                  <span>View Projects</span>
                </a>
              </div>
            </div>

            {/* Engineering Workflow Panel */}
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="terminal-title">engineering-workflow.md</span>
              </div>

              <div className="terminal-body">
                <div className="term-line"><span className="term-prompt">#</span> Version Control & Code Hygiene</div>
                <div className="term-output">• Dedicated feature branching for UI, Auth & Firebase modules</div>
                <div className="term-output">• Conventional commit standards (feat, refactor, fix, docs)</div>
                <div className="term-output">• State listener decoupling & widget build optimization</div>
                <div className="term-output">• Cloud Firestore security rules verification prior to release</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .github-section {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }

        .github-card {
          padding: 3rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .github-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
        }

        .github-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--accent-primary);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.825rem;
          font-weight: 500;
          font-family: var(--font-mono);
          margin-bottom: 1.25rem;
        }

        .github-title {
          font-size: 2.25rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-family: var(--font-heading);
        }

        .github-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .github-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .terminal-box {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
          font-family: var(--font-mono);
          font-size: 0.825rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.65rem 1rem;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .terminal-title {
          color: var(--text-muted);
          font-size: 0.775rem;
        }

        .terminal-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          color: var(--text-primary);
        }

        .term-line {
          display: block;
          font-weight: 600;
          color: var(--accent-primary);
          margin-bottom: 0.25rem;
        }

        .term-prompt {
          color: var(--accent-primary);
          font-weight: 700;
          margin-right: 0.35rem;
        }

        .term-output {
          color: var(--text-secondary);
          font-size: 0.825rem;
          padding-left: 0.5rem;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .github-card {
            padding: 1.75rem;
          }
          .github-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
