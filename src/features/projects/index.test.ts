import { describe, it } from 'vitest';
import { projects } from './index';
import { Project } from './types';

describe('projects', () => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('each entry has all fields defined', () => {
    projects.forEach((p: any) => {
      expect(p.id).toBeDefined();
      expect(p.title).toBeDefined();
      expect(p.slug).toBeDefined();
      expect(p.category).toBeDefined();
      expect(p.description).toBeDefined();
      expect(p.shortDescription).toBeDefined();
      expect(p.stack).toEqual([]); // placeholder
      expect(p.image).toBeDefined();
      expect(p.githubUrl).toBeDefined();
      expect(p.demoUrl).toBeDefined();
      expect(p.featured).toBeDefined();
      expect(p.createdAt).toBeDefined();
    });
  });
});
