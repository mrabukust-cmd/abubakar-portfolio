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
          className="card github-card glass-panel"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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

            {/* Terminal Window Graphic */}
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="terminal-title">zsh — git log --oneline</span>
              </div>

              <div className="terminal-body">
                <div className="term-line"><span className="term-prompt">$</span> git status</div>
                <div className="term-output">On branch main. Your branch is up to date with 'origin/main'.</div>
                <div className="term-line"><span className="term-prompt">$</span> git log --oneline -n 4</div>
                <div className="term-log"><span className="commit-hash">a9f82d1</span> feat(ui): optimize Flutter widget build cycles</div>
                <div className="term-log"><span className="commit-hash">c4e10b7</span> refactor(firebase): implement Cloud Firestore security rules</div>
                <div className="term-log"><span className="commit-hash">e7b39a4</span> feat(auth): add Google Sign-In & Auth state stream listeners</div>
                <div className="term-log"><span className="commit-hash">b12d89f</span> docs: update README with architecture setup guide</div>
                <div className="term-line"><span className="term-prompt">$</span> <span className="term-cursor">█</span></div>
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
          background: linear-gradient(135deg, rgba(38, 30, 23, 0.9) 0%, rgba(24, 20, 16, 0.95) 100%);
          border-color: var(--border-color-glow);
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
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(249, 115, 22, 0.3);
          color: var(--accent-secondary);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .github-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 1rem;
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

        /* Terminal Window */
        .terminal-box {
          background: #120E0A;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          font-family: var(--font-mono);
          font-size: 0.825rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
        }

        .terminal-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.65rem 1rem;
          background: #1B1510;
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
          color: #E2E8F0;
        }

        .term-line { display: block; }
        .term-prompt { color: #F59E0B; font-weight: 700; }
        .term-output { color: #94A3B8; font-size: 0.8rem; padding-left: 0.5rem; }
        .term-log { display: block; padding-left: 0.5rem; font-size: 0.8rem; }
        .commit-hash { color: #F97316; }
        .term-cursor { animation: blink 1s infinite; color: #F59E0B; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
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
