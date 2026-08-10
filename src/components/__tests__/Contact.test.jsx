import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact, { EMAIL_REGEX } from '../Contact';

// ---------------------------------------------------------------------------
// Smoke test — Contact renders without crashing
// ---------------------------------------------------------------------------
describe('Contact component', () => {
  it('renders the "Send A Message" heading', () => {
    render(<Contact />);
    expect(screen.getByText(/Send A Message/i)).toBeInTheDocument();
  });
});

// ---------------------------------------------------------------------------
// EMAIL_REGEX unit tests
// ---------------------------------------------------------------------------
describe('EMAIL_REGEX', () => {
  it('accepts valid email addresses', () => {
    expect(EMAIL_REGEX.test('user@example.com')).toBe(true);
    expect(EMAIL_REGEX.test('first.last+tag@sub.domain.org')).toBe(true);
  });

  it('rejects invalid email addresses', () => {
    expect(EMAIL_REGEX.test('notanemail')).toBe(false);
    expect(EMAIL_REGEX.test('missing@tld')).toBe(false);
  });
});
