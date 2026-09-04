import { describe, expect, it } from 'vitest';
import { profileData } from '../profile';

describe('career journey and workflow data', () => {
  it('contains properly structured journey timeline milestones', () => {
    expect(profileData.journey).toBeInstanceOf(Array);
    expect(profileData.journey.length).toBeGreaterThanOrEqual(3);

    profileData.journey.forEach((milestone, idx) => {
      expect(milestone.period, `Milestone #${idx} missing period`).toBeTruthy();
      expect(milestone.role, `Milestone #${idx} missing role`).toBeTruthy();
      expect(milestone.institution, `Milestone #${idx} missing institution`).toBeTruthy();
      expect(milestone.description.length, `Milestone #${idx} description too short`).toBeGreaterThan(20);
      expect(milestone.skills, `Milestone #${idx} missing skills array`).toBeInstanceOf(Array);
      expect(milestone.skills.length, `Milestone #${idx} has empty skills`).toBeGreaterThan(0);
      milestone.skills.forEach((skill) => {
        expect(typeof skill).toBe('string');
        expect(skill.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('validates sequential howIBuild process stages', () => {
    expect(profileData.howIBuild).toBeInstanceOf(Array);
    expect(profileData.howIBuild.length).toBe(4);

    profileData.howIBuild.forEach((stage, idx) => {
      const expectedStep = String(idx + 1).padStart(2, '0');
      expect(stage.step).toBe(expectedStep);
      expect(stage.title).toBeTruthy();
      expect(stage.description.length).toBeGreaterThan(15);
    });
  });
});
