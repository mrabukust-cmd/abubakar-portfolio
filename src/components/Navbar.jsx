import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profileData } from '../data/profile';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'What I Build', href: '#what-i-build' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Process', href: '#process' },
  { name: 'Journey', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" aria-label="Abubakar Siddique Homepage">
          <span className="logo-badge">{profileData.shortName}</span>
          <span className="logo-text">{profileData.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="nav-active-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="navbar-actions">
          <a href="#contact" className="btn btn-primary btn-sm btn-talk">
            <FaEnvelope className="btn-icon" />
            <span>Let's Talk</span>
          </a>

          <button
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container mobile-drawer-content">
              <ul className="mobile-nav-links">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mobile-drawer-footer">
                <a
                  href="#contact"
                  className="btn btn-primary btn-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaEnvelope /> Let's Talk
                </a>
                <div className="mobile-socials">
                  <a href={profileData.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all var(--transition-normal);
          background: transparent;
        }

        .navbar-scrolled {
          padding: 0.85rem 0;
          background: rgba(18, 14, 11, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--text-primary);
        }

        .logo-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%);
          color: #FFFFFF;
          font-weight: 800;
          font-size: 0.95rem;
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.45);
        }

        .logo-text {
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .navbar-desktop {
          display: flex;
          align-items: center;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          list-style: none;
        }

        .nav-link {
          position: relative;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.35rem 0;
          transition: color var(--transition-fast);
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--text-primary);
        }

        .nav-active-pill {
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent-secondary);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--accent-secondary);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mobile-toggle-btn {
          display: none;
          background: rgba(38, 30, 23, 0.6);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          border-radius: 10px;
          font-size: 1.2rem;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .mobile-drawer {
          overflow: hidden;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-drawer-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mobile-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-secondary);
          display: block;
          padding: 0.5rem 0;
        }

        .mobile-nav-link:hover {
          color: var(--accent-secondary);
        }

        .mobile-drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .btn-full {
          width: 100%;
        }

        .mobile-socials {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          justify-content: center;
          font-size: 1.3rem;
          color: var(--text-secondary);
        }

        .mobile-socials a:hover {
          color: var(--accent-secondary);
        }

        @media (max-width: 960px) {
          .navbar-desktop,
          .btn-talk {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
