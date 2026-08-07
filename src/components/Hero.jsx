import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight, FaCode, FaCopy, FaCheck } from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase } from 'react-icons/si';
import { profileData } from '../data/profile';
import mentoraImg from '../assets/images/mentora_real.png';

const codeSnippets = {
  'main.dart': {
    title: 'App Init',
    code: [
      { line: "import 'package:flutter/material.dart';", type: 'import' },
      { line: "import 'package:firebase_core/firebase_core.dart';", type: 'import' },
      { line: "", type: 'empty' },
      { line: "void main() async {", type: 'func' },
      { line: "  WidgetsFlutterBinding.ensureInitialized();", type: 'body' },
      { line: "  await Firebase.initializeApp();", type: 'body' },
      { line: "  runApp(const MentoraApp());", type: 'body' },
      { line: "}", type: 'func' }
    ],
    rawText: `import 'package:flutter/material.dart';\nimport 'package:firebase_core/firebase_core.dart';\n\nvoid main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  await Firebase.initializeApp();\n  runApp(const MentoraApp());\n}`
  },
  'provider.dart': {
    title: 'State Mgmt',
    code: [
      { line: "class AuthNotifier extends ChangeNotifier {", type: 'class' },
      { line: "  final FirebaseAuth _auth = FirebaseAuth.instance;", type: 'body' },
      { line: "  User? _currentUser;", type: 'body' },
      { line: "", type: 'empty' },
      { line: "  Future<void> signIn(String email, String pass) async {", type: 'func' },
      { line: "    await _auth.signInWithEmailAndPassword(email: email, password: pass);", type: 'body' },
      { line: "    notifyListeners();", type: 'body' },
      { line: "  }", type: 'func' },
      { line: "}", type: 'class' }
    ],
    rawText: `class AuthNotifier extends ChangeNotifier {\n  final FirebaseAuth _auth = FirebaseAuth.instance;\n  User? _currentUser;\n\n  Future<void> signIn(String email, String pass) async {\n    await _auth.signInWithEmailAndPassword(email: email, password: pass);\n    notifyListeners();\n  }\n}`
  },
  'api_client.dart': {
    title: 'REST API',
    code: [
      { line: "class ApiClient {", type: 'class' },
      { line: "  final Dio _dio = Dio(BaseOptions(baseUrl: 'https://api.app/v1'));", type: 'body' },
      { line: "", type: 'empty' },
      { line: "  Future<Response> fetchUserProfile(String userId) async {", type: 'func' },
      { line: "    return await _dio.get('/users/$userId');", type: 'body' },
      { line: "  }", type: 'func' },
      { line: "}", type: 'class' }
    ],
    rawText: `class ApiClient {\n  final Dio _dio = Dio(BaseOptions(baseUrl: 'https://api.app/v1'));\n\n  Future<Response> fetchUserProfile(String userId) async {\n    return await _dio.get('/users/$userId');\n  }\n}`
  }
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState('main.dart');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section section">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />
      <div className="ambient-grid-overlay" />

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="badge hero-badge">
              <span className="badge-dot" />
              <span>{profileData.heroBadge}</span>
            </div>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I Build <span className="text-gradient shimmer-text">Real-World Mobile Apps</span> With Flutter.
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {profileData.heroSubheading}
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {profileData.heroDescription}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>View Projects</span>
              <FaArrowRight className="btn-icon" />
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Let's Connect</span>
            </motion.a>

            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-icon-only"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <FaGithub />
            </a>
          </motion.div>

          {/* Core Tech Stack Badges */}
          <motion.div
            className="hero-tech-pills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="tech-pill-label">Primary Stack:</span>
            <div className="tech-pill"><SiFlutter className="flutter-icon" /> Flutter</div>
            <div className="tech-pill"><SiDart className="dart-icon" /> Dart</div>
            <div className="tech-pill"><SiFirebase className="firebase-icon" /> Firebase</div>
            <div className="tech-pill"><FaCode className="api-icon" /> REST APIs</div>
          </motion.div>
        </div>

        {/* Hero Unique Visual Composition */}
        <motion.div
          className="hero-visual-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-card-window card glass-panel">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>

              {/* Code Tabs */}
              <div className="code-tabs-bar">
                {Object.keys(codeSnippets).map((tabKey) => (
                  <button
                    key={tabKey}
                    className={`code-tab-btn ${activeTab === tabKey ? 'active' : ''}`}
                    onClick={() => setActiveTab(tabKey)}
                  >
                    {tabKey}
                  </button>
                ))}
              </div>

              <button className="code-copy-btn" onClick={handleCopyCode} title="Copy code snippet" aria-label="Copy code snippet">
                {copied ? <FaCheck style={{ color: '#10B981' }} /> : <FaCopy />}
              </button>
            </div>

            <div className="window-body">
              <div className="code-snippet">
                {codeSnippets[activeTab].code.map((item, idx) => (
                  <span key={idx} className="code-line">
                    {item.line}
                  </span>
                ))}
              </div>

              {/* Mobile App Preview Overlay Composition */}
              <div className="app-preview-composition">
                <img src={mentoraImg} alt="Flutter Application Preview" className="app-preview-img" loading="eager" />
                <div className="app-preview-badge">
                  <span className="badge-dot" />
                  <span>Flutter App Preview</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <motion.div
              className="floating-badge badge-top-right"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <SiFlutter className="float-icon flutter" />
              <div>
                <span className="float-title">Flutter SDK</span>
                <span className="float-sub">Cross-Platform UI</span>
              </div>
            </motion.div>

            <motion.div
              className="floating-badge badge-bottom-left"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
            >
              <SiFirebase className="float-icon firebase" />
              <div>
                <span className="float-title">Firebase Cloud</span>
                <span className="float-sub">Auth, Firestore & FCM</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Hero Identity Capability Stats */}
      <div className="container hero-stats-container">
        <motion.div
          className="hero-stats-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {profileData.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-detail">{stat.detail}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          padding-top: 8rem;
          padding-bottom: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .ambient-grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(148, 163, 184, 0.07) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 0;
        }

        .glow-1 {
          top: 5%;
          left: -8%;
          width: 550px;
          height: 550px;
          background: rgba(245, 158, 11, 0.22);
        }

        .glow-2 {
          bottom: 5%;
          right: -8%;
          width: 500px;
          height: 500px;
          background: rgba(249, 115, 22, 0.18);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          margin-bottom: 1.25rem;
        }

        .hero-title {
          font-size: 3.15rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
          line-height: 1.15;
        }

        .text-gradient {
          background: linear-gradient(135deg, #FFFBEB 0%, var(--accent-primary) 50%, var(--accent-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--accent-secondary);
          margin-bottom: 1.25rem;
          font-family: var(--font-mono);
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .btn-icon-only {
          padding: 0.75rem;
          font-size: 1.25rem;
          border-radius: var(--radius-md);
        }

        .hero-tech-pills {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .tech-pill-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(38, 30, 23, 0.6);
          border: 1px solid var(--border-color);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .flutter-icon { color: #F59E0B; }
        .dart-icon { color: #F97316; }
        .firebase-icon { color: #FFCA28; }
        .api-icon { color: var(--accent-secondary); }

        /* Visual Composition Window Box */
        .hero-visual-wrapper {
          position: relative;
        }

        .hero-card-window {
          padding: 0;
          background: rgba(24, 20, 16, 0.95);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
        }

        .window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
          background: rgba(18, 14, 11, 0.95);
          border-bottom: 1px solid var(--border-color);
        }

        .window-dots {
          display: flex;
          gap: 0.4rem;
          flex-shrink: 0;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot.red { background: #EF4444; }
        .dot.yellow { background: #F59E0B; }
        .dot.green { background: #10B981; }

        .code-tabs-bar {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          overflow-x: auto;
        }

        .code-tab-btn {
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .code-tab-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .code-tab-btn.active {
          color: var(--accent-secondary);
          background: rgba(245, 158, 11, 0.12);
          border-color: rgba(249, 115, 22, 0.3);
          font-weight: 600;
        }

        .code-copy-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          width: 28px;
          height: 28px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.8rem;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }

        .code-copy-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.12);
        }

        .window-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .code-snippet {
          background: #120E0A;
          padding: 1rem;
          border-radius: var(--radius-md);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          line-height: 1.5;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .code-line { display: block; }
        .code-keyword { color: #F43F5E; }
        .code-string { color: #10B981; }
        .code-func { color: #F59E0B; }
        .code-type { color: #F97316; }

        .app-preview-composition {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          height: 190px;
          border: 1px solid var(--border-color);
          background: #0E0B08;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .app-preview-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .app-preview-badge {
          position: absolute;
          bottom: 10px;
          right: 10px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(24, 20, 16, 0.85);
          backdrop-filter: blur(8px);
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          color: var(--accent-secondary);
          border: 1px solid var(--border-color-glow);
        }

        .floating-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.9rem;
          border-radius: var(--radius-md);
          background: rgba(38, 30, 23, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid var(--border-color-glow);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          z-index: 10;
        }

        .badge-top-right {
          top: -18px;
          right: -18px;
        }

        .badge-bottom-left {
          bottom: -18px;
          left: -18px;
        }

        .float-icon {
          font-size: 1.4rem;
        }
        .float-icon.flutter { color: #38BDF8; }
        .float-icon.firebase { color: #FFCA28; }

        .float-title {
          display: block;
          font-weight: 700;
          font-size: 0.825rem;
          color: var(--text-primary);
        }

        .float-sub {
          display: block;
          font-size: 0.725rem;
          color: var(--text-secondary);
        }

        /* Hero Stats Grid */
        .hero-stats-container {
          margin-top: 4.5rem;
          position: relative;
          z-index: 1;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          transition: all var(--transition-normal);
        }

        .stat-card:hover {
          border-color: var(--accent-secondary);
          background: var(--bg-card-hover);
        }

        .stat-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.2rem;
          font-family: var(--font-mono);
        }

        .stat-value {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.15rem;
        }

        .stat-detail {
          font-size: 0.775rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-title {
            font-size: 2.65rem;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .badge-top-right { right: 10px; }
          .badge-bottom-left { left: 10px; }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 6.5rem;
          }
          .hero-title {
            font-size: 2.1rem;
          }
          .hero-subtitle {
            font-size: 1.05rem;
          }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-actions .btn {
            width: 100%;
            justify-content: center;
          }
          .hero-stats-grid {
            grid-template-columns: 1fr;
          }
          .floating-badge {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
