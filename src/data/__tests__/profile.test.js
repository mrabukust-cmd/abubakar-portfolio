import { describe, expect, it } from 'vitest';
import { profileData } from '../profile';

describe('profile data', () => {
  it('keeps the public profile essentials complete', () => {
    expect(profileData.name).toBeTruthy();
    expect(profileData.title).toBeTruthy();
    expect(profileData.email).toMatch(/@/);
    expect(profileData.socials.github).toMatch(/^https:\/\//);
    expect(profileData.journey.length).toBeGreaterThan(0);
  });

  it('keeps every highlighted statistic displayable', () => {
    expect(profileData.stats.every(({ label, count, suffix }) => label && Number.isFinite(count) && suffix)).toBe(true);
  });
});
