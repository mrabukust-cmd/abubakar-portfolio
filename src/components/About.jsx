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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile Photo Card */}
            <div className="card profile-photo-card">
              <div className="profile-img-wrapper">
                <img
                  src={profileData.profileImage}
                  alt="Abubakar Siddique — Software Engineering Student and Flutter Developer"
                  className="profile-portrait-img"
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
          </motion.div>
        </div>
      </div>

      <style>{`
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
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
          transition: all var(--transition-normal);
        }

        .profile-photo-card:hover {
          border-color: var(--border-color-glow);
          transform: translateY(-3px);
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.5), 0 0 15px var(--accent-glow);
        }

        .profile-img-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
          background: #0B0F19;
        }

        .profile-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transition: transform var(--transition-slow);
        }

        .profile-photo-card:hover .profile-portrait-img {
          transform: scale(1.03);
        }

        .profile-photo-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.95) 100%);
        }

        .profile-photo-info {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          right: 1.25rem;
        }

        .profile-photo-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.15rem;
        }

        .profile-photo-role {
          display: block;
          font-size: 0.8rem;
          color: var(--accent-secondary);
          font-weight: 600;
        }

        /* Philosophy Card */
        .philosophy-card {
          background: linear-gradient(145deg, var(--bg-card) 0%, rgba(30, 41, 59, 0.8) 100%);
          border: 1px solid var(--border-color-glow);
          position: relative;
          padding: 2rem;
        }

        .quote-icon-bg {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 2.75rem;
          color: rgba(56, 189, 248, 0.08);
        }

        .philosophy-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .philosophy-divider {
          width: 36px;
          height: 3px;
          background: var(--accent-secondary);
          border-radius: 2px;
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
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--accent-secondary);
          background: rgba(56, 189, 248, 0.1);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .bullet-text {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .philosophy-footer {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border-color);
          padding-top: 0.85rem;
        }

        .footer-tag {
          font-weight: 700;
          color: var(--accent-secondary);
          font-size: 0.9rem;
        }

        .footer-role {
          font-size: 0.775rem;
          color: var(--text-muted);
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
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.2);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          color: var(--accent-secondary);
          font-size: 0.875rem;
          font-weight: 600;
        }

        .pill-icon {
          font-size: 0.95rem;
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
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .focus-heading {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
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
          color: #10B981;
          flex-shrink: 0;
        }

        .tech-summary-card {
          background: rgba(15, 23, 42, 0.7);
          border-color: var(--border-color);
        }

        .tech-summary-heading {
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
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
