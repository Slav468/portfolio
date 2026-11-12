import { describe, it, expect } from 'vitest';
import { projects } from './projects';
import { getAllProjects, getFeaturedProjects, getProjectBySlug } from './selectors';

describe('projects data', () => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('each entry has the required fields', () => {
    projects.forEach((p) => {
      expect(p.id).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.slug).toMatch(/^[a-z0-9-]+$/);
      expect(p.category).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.shortDescription).toBeTruthy();
      expect(Array.isArray(p.stack)).toBe(true);
      expect(p.image).toMatch(/^\//);
      expect(p.githubUrl).toMatch(/^https:\/\//);
      expect(p.createdAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  it('has unique ids and slugs', () => {
    expect(new Set(projects.map((p) => p.id)).size).toBe(projects.length);
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
  });

  it('contains only Cyrillic/Latin text (no stray characters)', () => {
    const text = projects.map((p) => `${p.title}${p.description}${p.shortDescription}`).join('');
    expect(text).not.toMatch(/[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/);
  });
});

describe('selectors', () => {
  it('getAllProjects returns every project', () => {
    expect(getAllProjects()).toHaveLength(projects.length);
  });

  it('getProjectBySlug finds a project or returns undefined', () => {
    expect(getProjectBySlug(projects[0].slug)).toBe(projects[0]);
    expect(getProjectBySlug('does-not-exist')).toBeUndefined();
  });

  it('getFeaturedProjects returns only featured, newest first, limited', () => {
    const featured = getFeaturedProjects(2);
    expect(featured.length).toBeLessThanOrEqual(2);
    featured.forEach((p) => expect(p.featured).toBe(true));
    const dates = featured.map((p) => p.createdAt);
    expect([...dates].sort().reverse()).toEqual(dates);
  });
});
