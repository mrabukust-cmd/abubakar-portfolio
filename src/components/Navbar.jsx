import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, FaTimes, FaEnvelope, FaGithub, FaLinkedin, 
  FaMoon, FaSun, FaHome, FaUser, FaMicrochip, FaCode, FaBriefcase 
} from 'react-icons/fa';
import { profileData } from '../data/profile';

const navLinks = [
  { name: 'Home', href: '#home', icon: FaHome },
  { name: 'About', href: '#about', icon: FaUser },
  { name: 'Skills', href: '#skills', icon: FaMicrochip },
  { name: 'Projects', href: '#projects', icon: FaCode },
  { name: 'Experience', href: '#experience', icon: FaBriefcase },
  { name: 'Contact', href: '#contact', icon: FaEnvelope },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const isNavClicking = useRef(false);
  const clickTimeoutRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Skip scroll position recalculations while smooth scrolling from a nav link click
      if (isNavClicking.current) return;

      const scrollPosition = window.scrollY + 180;
      const sectionElements = navLinks
        .map(link => document.getElementById(link.href.substring(1)))
        .filter(Boolean)
        .sort((a, b) => a.offsetTop - b.offsetTop);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      // Lock scroll listener to prevent intermediate flickering during smooth scroll
      isNavClicking.current = true;
      setActiveSection(targetId);

      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }

      targetEl.scrollIntoView({ behavior: 'smooth' });

      // Unlock scroll listener after smooth scroll finishes
      clickTimeoutRef.current = setTimeout(() => {
        isNavClicking.current = false;
      }, 800);
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Left: Logo Badge */}
        <a href="#home" className="navbar-logo" aria-label="Abubakar Siddique Homepage">
          <span className="logo-badge">{profileData.shortName}</span>
          <span className="logo-text">{profileData.name}</span>
        </a>

        {/* Center: Floating Glass Capsule Navigation Bar */}
        <nav className="navbar-desktop" aria-label="Main Navigation">
          <div className="navbar-floating-capsule">
            {navLinks.map((link) => {
              const IconComp = link.icon;
              const targetId = link.href.substring(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`capsule-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <IconComp className="nav-item-icon" />
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="capsuleActivePill"
                      className="capsule-active-bg"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Right: Theme Switch Capsule */}
        <div className="navbar-actions">
          <div className="theme-capsule-toggle">
            <button
              className={`theme-circle-btn ${theme === 'dark' ? 'active' : ''}`}
              onClick={() => toggleTheme('dark')}
              title="Dark Theme"
              aria-label="Switch to Dark Theme"
            >
              <FaMoon />
            </button>
            <button
              className={`theme-circle-btn ${theme === 'light' ? 'active' : ''}`}
              onClick={() => toggleTheme('light')}
              title="White Theme"
              aria-label="Switch to White Theme"
            >
              <FaSun />
            </button>
          </div>

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
                {navLinks.map((link) => {
                  const IconComp = link.icon;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="mobile-nav-link"
                        onClick={(e) => {
                          setMobileMenuOpen(false);
                          handleNavClick(e, link.href);
                        }}
                      >
                        <IconComp style={{ fontSize: '1rem' }} />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  );
                })}
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
          padding: 0.75rem 0;
          background: rgba(6, 6, 8, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
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

        /* Center Floating Glass Capsule Bar */
        .navbar-desktop {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .navbar-floating-capsule {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: rgba(14, 18, 28, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
          padding: 0.35rem 0.5rem;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
        }

        [data-theme="light"] .navbar-floating-capsule {
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(15, 23, 42, 0.12);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .capsule-nav-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          border-radius: 9999px;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: color var(--transition-fast);
          z-index: 1;
        }

        .capsule-nav-link:hover {
          color: var(--text-primary);
        }

        .capsule-nav-link.active {
          color: #FFFFFF;
          font-weight: 600;
        }

        .nav-item-icon {
          font-size: 0.95rem;
        }

        .capsule-active-bg {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.85) 0%, rgba(30, 58, 138, 0.95) 100%);
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
          z-index: -1;
        }

        [data-theme="light"] .capsule-active-bg {
          background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
        }

        /* Rightmost Circular Theme Switch Capsule */
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .theme-capsule-toggle {
          display: flex;
          align-items: center;
          background: rgba(14, 18, 28, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
          padding: 3px;
          gap: 4px;
        }

        [data-theme="light"] .theme-capsule-toggle {
          background: rgba(241, 245, 249, 0.95);
          border-color: rgba(15, 23, 42, 0.15);
        }

        .theme-circle-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        [data-theme="light"] .theme-circle-btn {
          color: rgba(15, 23, 42, 0.5);
        }

        .theme-circle-btn.active {
          background: #FFFFFF;
          color: #2563EB;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        }

        [data-theme="light"] .theme-circle-btn.active {
          background: #0F172A;
          color: #F59E0B;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .mobile-toggle-btn {
          display: none;
          background: rgba(14, 18, 28, 0.8);
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
          gap: 0.75rem;
        }

        .mobile-nav-link {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.75rem;
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

        @media (max-width: 1120px) {
          .capsule-nav-link {
            padding: 0.45rem 0.75rem;
            font-size: 0.825rem;
            gap: 0.35rem;
          }
        }

        @media (max-width: 960px) {
          .navbar-desktop {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .logo-text {
            font-size: 0.95rem;
          }
          .logo-badge {
            width: 32px;
            height: 32px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </header>
  );
}


