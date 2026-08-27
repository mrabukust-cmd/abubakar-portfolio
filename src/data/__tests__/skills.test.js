import { describe, expect, it } from 'vitest';
import { skillCategories } from '../skills';

describe('skills data', () => {
  it('keeps every category populated with unique skill names', () => {
    const skills = skillCategories.flatMap(({ skills: items }) => items);

    expect(skillCategories.length).toBeGreaterThan(0);
    expect(skills.length).toBeGreaterThan(0);
    expect(new Set(skills.map(({ name }) => name)).size).toBe(skills.length);
  });
});
