import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaFolderOpen } from 'react-icons/fa';
import { profileData } from '../data/profile';
import styles from './GithubSection.module.css';

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
    <section className={`section ${styles.githubSection}`}>
      <div className="container">
        <motion.div
          className={`card glass-panel ${styles.githubCard}`}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.githubGrid}>
            <div className={styles.githubContent}>
              <div className={styles.githubBadge}>
                <FaCodeBranch />
                <span>Open Source & Code Quality</span>
              </div>

              <h2 className={styles.githubTitle}>Building in Public</h2>

              <p className={styles.githubDescription}>
                I use GitHub to manage project repositories, maintain clean commit histories, track architectural refactoring, and continuously improve my Flutter code quality.
              </p>

              <div className={styles.githubActions}>
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
            <div className={styles.terminalBox}>
              <div className={styles.terminalHeader}>
                <div className={styles.windowDots}>
                  <span className={`${styles.dot} ${styles.red}`} />
                  <span className={`${styles.dot} ${styles.yellow}`} />
                  <span className={`${styles.dot} ${styles.green}`} />
                </div>
                <span className={styles.terminalTitle}>zsh — git log --oneline</span>
              </div>

              <div className={styles.terminalBody}>
                <div className={styles.termLine}><span className={styles.termPrompt}>$</span> git status</div>
                <div className={styles.termOutput}>On branch main. Your branch is up to date with 'origin/main'.</div>
                <div className={styles.termLine}><span className={styles.termPrompt}>$</span> git log --oneline -n 4</div>
                <div className={styles.termLog}><span className={styles.commitHash}>a9f82d1</span> feat(ui): optimize Flutter widget build cycles</div>
                <div className={styles.termLog}><span className={styles.commitHash}>c4e10b7</span> refactor(firebase): implement Cloud Firestore security rules</div>
                <div className={styles.termLog}><span className={styles.commitHash}>e7b39a4</span> feat(auth): add Google Sign-In & Auth state stream listeners</div>
                <div className={styles.termLog}><span className={styles.commitHash}>b12d89f</span> docs: update README with architecture setup guide</div>
                <div className={styles.termLine}><span className={styles.termPrompt}>$</span> <span className={styles.termCursor}>█</span></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
