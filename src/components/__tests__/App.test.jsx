import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../../App';
import { EMAIL_REGEX } from '../Contact';
import { projectsData } from '../../data/projects';

describe('Portfolio App Smoke Test', () => {
  it('renders App without crashing and mounts key section headings', () => {
    render(<App />);
    const nameElements = screen.getAllByText(/Abubakar Siddique/i);
    expect(nameElements.length).toBeGreaterThan(0);
    expect(nameElements[0]).toBeInTheDocument();
    expect(screen.getByText(/Building in Public/i)).toBeInTheDocument();
  });
});

describe('Email Validation Logic (Contact)', () => {
  it('validates correct email addresses', () => {
    expect(EMAIL_REGEX.test('abubakar@example.com')).toBe(true);
    expect(EMAIL_REGEX.test('test.user+sub@domain.co.uk')).toBe(true);
  });

  it('rejects invalid email formats', () => {
    expect(EMAIL_REGEX.test('invalid-email')).toBe(false);
    expect(EMAIL_REGEX.test('user@domain')).toBe(false);
    expect(EMAIL_REGEX.test('@domain.com')).toBe(false);
  });
});

describe('Project Filter Logic (Projects)', () => {
  it('correctly filters projects by category', () => {
    const categoryName = 'Education & Peer Learning';
    const eduProjects = projectsData.filter((p) => p.category === categoryName);
    expect(eduProjects.length).toBeGreaterThan(0);
    expect(eduProjects.every((p) => p.category === categoryName)).toBe(true);
  });

  it('correctly filters projects by search query', () => {
    const query = 'flutter';
    const matches = projectsData.filter((proj) =>
      proj.title.toLowerCase().includes(query) ||
      proj.shortDescription.toLowerCase().includes(query) ||
      proj.tagline.toLowerCase().includes(query) ||
      proj.technologies.some((t) => t.toLowerCase().includes(query))
    );

    expect(matches.length).toBeGreaterThan(0);
  });
});
