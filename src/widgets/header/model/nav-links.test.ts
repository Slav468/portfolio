import { describe, it, expect } from 'vitest';
import { isActiveLink } from './nav-links';

describe('isActiveLink', () => {
  it('matches the exact path', () => {
    expect(isActiveLink('/projects', '/projects')).toBe(true);
  });

  it('matches nested paths', () => {
    expect(isActiveLink('/projects/arik', '/projects')).toBe(true);
  });

  it('does not match siblings with a common prefix', () => {
    expect(isActiveLink('/projects-old', '/projects')).toBe(false);
    expect(isActiveLink('/about', '/projects')).toBe(false);
  });
});
