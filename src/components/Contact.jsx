import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaCopy, FaCheck } from 'react-icons/fa';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setStatus('success');
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (apiKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: apiKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Portfolio Contact from ${formData.name}`,
            message: formData.message
          })
        });

        const data = await response.json();

        if (data.success) {
          setStatus('success');
          confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          triggerMailtoFallback();
        }
      } catch {
        triggerMailtoFallback();
      }
    } else {
      triggerMailtoFallback();
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Have a Project or Opportunity?</h2>
          <p className="section-description">
            I'm open to internship opportunities, Flutter development projects, collaborations, and interesting software ideas.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Direct Info Cards */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card contact-method-card contact-email-card">
              <div className="method-icon-box">
                <FaEnvelope />
              </div>
              <div className="method-text-box">
                <span className="method-label">Direct Email</span>
                <a href={profileData.socials.mailto} className="method-value">
                  {profileData.email}
                </a>
              </div>
              <button 
                className="contact-copy-btn" 
                onClick={handleCopyEmail}
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {emailCopied ? <FaCheck style={{ color: '#10B981' }} /> : <FaCopy />}
              </button>
            </div>

            <div className="card contact-method-card">
              <div className="method-icon-box">
                <FaLinkedin />
              </div>
              <div>
                <span className="method-label">LinkedIn Profile</span>
                <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="method-value">
                  linkedin.com/in/abu-bakar-siddique-a82747425
                </a>
              </div>
            </div>

            <div className="card contact-method-card">
              <div className="method-icon-box">
                <FaGithub />
              </div>
              <div>
                <span className="method-label">GitHub Repositories</span>
                <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="method-value">
                  github.com/mrabukust-cmd
                </a>
              </div>
            </div>

            <div className="contact-availability-card card">
              <h4 className="avail-title">Available for Opportunities</h4>
              <p className="avail-desc">
                Currently seeking Software Engineering internships, entry-level Flutter developer positions, freelance app projects, and open-source collaborations.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="card contact-form glass-panel" onSubmit={handleSubmit}>
              <h3 className="form-heading">Send A Message</h3>

              {status === 'success' && (
                <div className="form-alert alert-success">
                  <FaCheckCircle />
                  <span>Thank you! Your message has been sent. I will respond as soon as possible.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="form-alert alert-error">
                  <FaExclamationCircle />
                  <span>Please fill out all required fields (Name, Email, Message).</span>
                </div>
              )}

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Recruiter / Collaborator"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. contact@company.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Flutter Dev Opportunity / Project Inquiry"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role, project, or collaboration..."
                  rows={5}
                  className="form-input form-textarea"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-method-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
        }

        .contact-email-card {
          justify-content: space-between;
        }

        .method-text-box {
          flex: 1;
        }

        .contact-copy-btn {
          background: rgba(38, 30, 23, 0.7);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .contact-copy-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-secondary);
          background: rgba(54, 42, 31, 0.9);
        }

        .method-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(249, 115, 22, 0.3);
          color: var(--accent-secondary);
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .method-label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.15rem;
        }

        .method-value {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
          transition: color var(--transition-fast);
        }

        .method-value:hover {
          color: var(--accent-secondary);
        }

        .contact-availability-card {
          background: rgba(24, 20, 16, 0.7);
          border-color: var(--border-color);
          margin-top: 0.5rem;
        }

        .avail-title {
          font-size: 1rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .avail-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .contact-form {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-heading {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .form-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
        }

        .alert-success {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #10B981;
        }

        .alert-error {
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #F43F5E;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .req {
          color: #F43F5E;
        }

        .form-input {
          width: 100%;
          background: rgba(24, 20, 16, 0.8);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .form-input:focus {
          border-color: var(--accent-secondary);
          background: rgba(32, 26, 20, 1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
