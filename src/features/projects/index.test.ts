import { describe, it, expect } from 'vitest';
import { projects } from './index';
import { Project } from './types';

describe('projects', () => {
  it('has at least one project', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('each entry is a Project instance', () => {
    projects.forEach((p: Project) => {
      expect(p).toBeInstanceOf(Project);
    });
  });
});
