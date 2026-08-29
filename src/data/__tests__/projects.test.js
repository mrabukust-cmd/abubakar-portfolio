import { describe, expect, it } from 'vitest';
import { projectsData } from '../projects';

describe('project data', () => {
  it('keeps project records uniquely named and ready to display', () => {
    const titles = projectsData.map(({ title }) => title);

    expect(projectsData.length).toBeGreaterThan(0);
    expect(new Set(titles).size).toBe(titles.length);
    expect(projectsData.every(({ shortDescription, technologies }) => shortDescription && technologies.length)).toBe(true);
  });
});
