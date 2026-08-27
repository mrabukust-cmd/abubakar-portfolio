import { describe, expect, it } from 'vitest';
import { navLinks } from '../navigation';

describe('navigation data', () => {
  it('contains unique labels and section targets', () => {
    const labels = navLinks.map(({ name }) => name);
    const targets = navLinks.map(({ href }) => href);

    expect(new Set(labels).size).toBe(labels.length);
    expect(new Set(targets).size).toBe(targets.length);
    expect(targets.every((href) => href.startsWith('#'))).toBe(true);
  });
});
