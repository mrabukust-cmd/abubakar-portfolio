import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMobileAlt, FaLayerGroup, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import { profileData } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Background & Mindset</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Dedicated Software Engineering student and Flutter Developer building real-world digital products.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Profile Photo Card & Philosophy */}
          <motion.div
            className="about-left-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Profile Photo Card */}
            <div className="card profile-photo-card">
              <div className="profile-img-wrapper">
                <img
                  src={profileData.profileImage}
                  alt="Abubakar Siddique — Software Engineering Student and Flutter Developer"
                  className="profile-portrait-img"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div className="profile-photo-gradient" />
                <div className="profile-photo-info">
                  <h3 className="profile-photo-name">{profileData.name}</h3>
                  <span className="profile-photo-role">Software Engineering Student · Flutter Developer</span>
                </div>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="card philosophy-card">
              <div className="quote-icon-bg">
                <FaQuoteLeft />
              </div>

              <h3 className="philosophy-title">{profileData.philosophy.heading}</h3>
              <div className="philosophy-divider" />

              <div className="philosophy-bullets">
                {profileData.philosophy.bullets.map((bullet, idx) => (
                  <div key={idx} className="bullet-item">
                    <span className="bullet-number">0{idx + 1}</span>
                    <span className="bullet-text">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="philosophy-footer">
                <span className="footer-tag">— Abubakar Siddique</span>
                <span className="footer-role">Flutter Developer</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Main Story & Core Values */}
          <motion.div
            className="about-story"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="about-highlights-bar">
              <div className="highlight-pill">
                <FaGraduationCap className="pill-icon" />
                <span>{profileData.education}</span>
              </div>
              <div className="highlight-pill">
                <FaMobileAlt className="pill-icon" />
                <span>Flutter & Mobile Dev</span>
              </div>
              <div className="highlight-pill">
                <FaLayerGroup className="pill-icon" />
                <span>Clean Architecture</span>
              </div>
            </div>

            <div className="story-paragraphs">
              {profileData.aboutText.map((paragraph, index) => (
                <p key={index} className="story-p">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="core-focus-list">
              <h3 className="focus-heading">Core Engineering Values:</h3>
              <div className="focus-grid">
                <div className="focus-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Real-World App Focus</span>
                </div>
                <div className="focus-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Reusable Component Architecture</span>
                </div>
                <div className="focus-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Firebase & REST API Synchronization</span>
                </div>
                <div className="focus-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Git Version Control & Code Quality</span>
                </div>
              </div>
            </div>

            {/* Quick Tech Summary Card */}
            <div className="card tech-summary-card">
              <h4 className="tech-summary-heading">Main Engineering Focus</h4>
              <p className="tech-summary-text">
                Specializing in Flutter client UIs, state management, Cloud Firestore, Firebase Auth, REST API serialization, and modular code structures.
              </p>
            </div>

            {/* Currently Learning / Exploring Now Card */}
            {profileData.currentlyLearning && (
              <div className="card currently-learning-card">
                <div className="learning-header">
                  <span className="badge badge-cool">
                    Currently Exploring
                  </span>
                  <h4 className="learning-title">Continuous Growth</h4>
                </div>
                <div className="learning-grid">
                  {profileData.currentlyLearning.map((item, idx) => (
                    <div key={idx} className="learning-item">
                      <span className="learning-name">{item.title}</span>
                      <span className="learning-desc">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Engineering Approach Subsection (Folded from HowIBuild) */}
        {profileData.howIBuild && (
          <motion.div
            className="about-process-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="about-process-header">
              <span className="process-subtitle">Engineering Approach</span>
              <h3 className="process-heading">How I Turn Ideas Into Reliable Mobile Software</h3>
            </div>

            <div className="about-process-grid">
              {profileData.howIBuild.map((step) => (
                <div key={step.step} className="about-process-card">
                  <div className="process-card-top">
                    <span className="process-num">{step.step}</span>
                    <h4 className="process-card-title">{step.title}</h4>
                  </div>
                  <p className="process-card-desc">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <style>{`
        .about-process-wrapper {
          margin-top: 3.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid var(--border-color);
        }

        .about-process-header {
          margin-bottom: 1.5rem;
        }

        .process-subtitle {
          font-family: var(--font-mono);
          font-size: 0.775rem;
          color: var(--accent-primary);
          font-weight: 500;
          display: block;
          margin-bottom: 0.25rem;
        }

        .process-heading {
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--text-primary);
          font-family: var(--font-heading);
        }

        .about-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .about-process-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 1.25rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .process-card-top {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .process-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-primary);
          background: var(--bg-secondary);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }

        .process-card-title {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
          font-family: var(--font-heading);
        }

        .process-card-desc {
          font-size: 0.825rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .about-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .about-process-grid {
            grid-template-columns: 1fr;
          }
        }

        .currently-learning-card {
          margin-top: 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-sm);
        }

        .learning-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .learning-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-sans);
        }

        .learning-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 0.75rem;
        }

        .learning-item {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.65rem 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .learning-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-primary);
          font-family: var(--font-mono);
        }

        .learning-desc {
          font-size: 0.775rem;
          color: var(--text-secondary);
        }

        .about-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 3rem;
          align-items: start;
        }

        .about-left-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Profile Photo Card */
        .profile-photo-card {
          padding: 0;
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transition: all var(--transition-normal);
        }

        .profile-photo-card:hover {
          border-color: var(--accent-primary);
        }

        .profile-img-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
          background: var(--bg-primary);
        }

        .profile-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transition: transform var(--transition-slow);
        }

        .profile-photo-card:hover .profile-portrait-img {
          transform: scale(1.02);
        }

        .profile-photo-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, var(--bg-primary) 100%);
        }

        .profile-photo-info {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          right: 1.25rem;
        }

        .profile-photo-name {
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.15rem;
          font-family: var(--font-heading);
        }

        .profile-photo-role {
          display: block;
          font-size: 0.8rem;
          color: var(--accent-primary);
          font-weight: 500;
          font-family: var(--font-mono);
        }

        /* Philosophy Card */
        .philosophy-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          position: relative;
          padding: 2rem;
        }

        .quote-icon-bg {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 2.5rem;
          color: var(--border-color);
        }

        .philosophy-title {
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-family: var(--font-heading);
        }

        .philosophy-divider {
          width: 32px;
          height: 2px;
          background: var(--accent-primary);
          margin-bottom: 1.25rem;
        }

        .philosophy-bullets {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1.5rem;
        }

        .bullet-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .bullet-number {
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.8rem;
          color: var(--accent-primary);
          background: var(--bg-secondary);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
        }

        .bullet-text {
          font-weight: 500;
          font-size: 1rem;
          color: var(--text-primary);
        }

        .philosophy-footer {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border-color);
          padding-top: 0.85rem;
        }

        .footer-tag {
          font-weight: 500;
          color: var(--accent-primary);
          font-size: 0.9rem;
          font-family: var(--font-heading);
        }

        .footer-role {
          font-size: 0.775rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        /* Right Column Story */
        .about-highlights-bar {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 1.75rem;
        }

        .highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 400;
          font-family: var(--font-mono);
        }

        .pill-icon {
          font-size: 0.9rem;
          color: var(--accent-primary);
        }

        .story-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 1.75rem;
        }

        .story-p {
          font-size: 1.025rem;
          line-height: 1.75;
          color: var(--text-secondary);
        }

        .core-focus-list {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .focus-heading {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-family: var(--font-sans);
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }

        .focus-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .check-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
        }

        .tech-summary-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .tech-summary-heading {
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-family: var(--font-sans);
          font-weight: 600;
        }

        .tech-summary-text {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .profile-img-wrapper {
            height: 320px;
          }
          .focus-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
