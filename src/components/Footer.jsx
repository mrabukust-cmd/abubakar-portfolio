import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="Abubakar Siddique Portfolio Home">
              <span className="logo-badge">{profileData.shortName}</span>
              <span className="logo-text">{profileData.name}</span>
            </a>
            <p className="footer-tagline">
              Software Engineering Student · Flutter Developer
            </p>
            <p className="footer-subtext">
              Building modern, reliable, and user-friendly mobile applications.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#what-i-build">What I Build</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#experience">Journey</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-socials-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-icons">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="social-icon-btn"
              >
                <FaGithub />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-icon-btn"
              >
                <FaLinkedin />
              </a>
              <a
                href={profileData.socials.mailto}
                aria-label="Send Direct Email"
                className="social-icon-btn"
              >
                <FaEnvelope />
              </a>
            </div>
            <button className="btn btn-outline btn-sm scroll-top-btn" onClick={scrollToTop} aria-label="Back to top of page">
              <FaArrowUp /> Back to top
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 Abubakar Siddique. All rights reserved.
          </p>
          <p className="built-tag">
            Built with <span className="highlight">React.js</span> & <span className="highlight">Framer Motion</span>
          </p>
        </div>
      </div>

      <style>{`
        .footer-container {
          background: #0B0F19;
          border-top: 1px solid var(--border-color);
          padding-top: 4rem;
          padding-bottom: 2.5rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .footer-tagline {
          font-weight: 600;
          color: var(--accent-secondary);
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }

        .footer-subtext {
          font-size: 0.875rem;
          color: var(--text-muted);
          max-width: 380px;
          line-height: 1.6;
        }

        .footer-heading {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .footer-links {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          font-size: 0.875rem;
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--accent-secondary);
        }

        .footer-socials-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-social-icons {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 1.15rem;
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          color: var(--accent-secondary);
          border-color: var(--accent-secondary);
          transform: translateY(-2px);
        }

        .scroll-top-btn {
          margin-top: auto;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          font-size: 0.85rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .highlight {
          color: var(--accent-secondary);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
