import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaCopy, FaCheck } from 'react-icons/fa';
import { profileData } from '../data/profile';
import { socialLinks, formatSocialDisplay } from '../data/socialLinks';

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
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
    setStatus('fallback');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill out all required fields (Name, Email, Message).');
      setStatus('error');
      return;
    }

    if (!EMAIL_REGEX.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                {emailCopied ? <FaCheck style={{ color: 'var(--accent-primary)' }} /> : <FaCopy />}
              </button>
            </div>

            <div className="card contact-method-card">
              <div className="method-icon-box">
                <FaLinkedin />
              </div>
              <div>
                <span className="method-label">LinkedIn Profile</span>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="method-value">
                  {formatSocialDisplay(socialLinks.linkedin)}
                </a>
              </div>
            </div>

            <div className="card contact-method-card">
              <div className="method-icon-box">
                <FaGithub />
              </div>
              <div>
                <span className="method-label">GitHub Repositories</span>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="method-value">
                  {formatSocialDisplay(socialLinks.github)}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <form className="card contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="form-heading">Send A Message</h3>

              {status === 'success' && (
                <div className="form-alert alert-success">
                  <FaCheckCircle />
                  <span>Thank you! Your message has been sent. I will respond as soon as possible.</span>
                </div>
              )}

              {status === 'fallback' && (
                <div className="form-alert alert-info alert-fallback">
                  <div className="alert-fallback-header">
                    <FaEnvelope className="alert-fallback-icon" />
                    <span>Sending service is currently undergoing maintenance. Please reach out directly:</span>
                  </div>
                  <div className="alert-fallback-actions">
                    <a href={profileData.socials.mailto} className="alert-fallback-btn">
                      Open Mail Client
                    </a>
                    <div className="fallback-copy-wrapper">
                      <span className="fallback-email-text">{profileData.email}</span>
                      <button type="button" className="contact-copy-btn" onClick={handleCopyEmail} title="Copy Email">
                        {emailCopied ? <FaCheck /> : <FaCopy />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="form-alert alert-error">
                  <FaExclamationCircle />
                  <span>Failed to send. Please check your form input or email directly.</span>
                </div>
              )}

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="user_name" className="form-label">Your Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user_email" className="form-label">Your Email <span className="req">*</span></label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="form-input"
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
                  placeholder="Internship / Flutter Project Query"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message <span className="req">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Abubakar, I'd like to discuss a mobile app project..."
                  className="form-input form-textarea"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
                style={{ alignSelf: 'flex-start' }}
              >
                {submitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-secondary);
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
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .contact-email-card {
          justify-content: space-between;
        }

        .method-text-box {
          flex: 1;
        }

        .contact-copy-btn {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .contact-copy-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
        }

        .method-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--accent-primary);
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .method-label {
          display: block;
          font-size: 0.775rem;
          color: var(--text-muted);
          margin-bottom: 0.15rem;
          font-family: var(--font-mono);
        }

        .method-value {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-primary);
          transition: color var(--transition-fast);
        }

        .method-value:hover {
          color: var(--accent-primary);
        }

        .contact-availability-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          margin-top: 0.5rem;
          padding: 1.5rem;
        }

        .avail-title {
          font-size: 1rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-family: var(--font-sans);
          font-weight: 600;
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
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .form-heading {
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-family: var(--font-heading);
        }

        .form-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.875rem;
        }

        .alert-success {
          background: var(--bg-secondary);
          border: 1px solid var(--accent-primary);
          color: var(--accent-primary);
        }

        .alert-info {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
        }

        .alert-fallback {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1rem 1.15rem;
        }

        .alert-fallback-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          color: var(--text-primary);
          font-weight: 500;
          line-height: 1.45;
        }

        .alert-fallback-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          color: var(--accent-primary);
        }

        .alert-fallback-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-color);
        }

        .alert-fallback-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent-primary);
          color: #0D0D11;
          font-weight: 500;
          font-size: 0.85rem;
          padding: 0.5rem 0.95rem;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        [data-theme="light"] .alert-fallback-btn {
          color: #FFFFFF;
        }

        .alert-fallback-btn:hover {
          background: var(--accent-primary-hover);
        }

        .fallback-copy-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 0.25rem 0.35rem 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
        }

        .fallback-email-text {
          font-size: 0.85rem;
          font-family: var(--font-mono);
          color: var(--text-primary);
          user-select: all;
        }

        .alert-error {
          background: var(--bg-secondary);
          border: 1px solid #E11D48;
          color: #E11D48;
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
          font-size: 0.825rem;
          font-weight: 500;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .req {
          color: var(--accent-primary);
        }

        .form-input {
          width: 100%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.925rem;
          transition: all var(--transition-fast);
        }

        .form-input:focus {
          border-color: var(--accent-primary);
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