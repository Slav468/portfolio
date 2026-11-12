import { describe, it, expect } from 'vitest';
import { resolveTechKey } from '@/shared/ui';
import { projects } from '@/entities/project';
import { HERO_STATS, HERO_TECH } from './hero-content';

describe('hero content', () => {
  it('has an icon for every floating technology', () => {
    HERO_TECH.forEach((name) => expect(resolveTechKey(name)).toBeDefined());
  });

  it('derives the projects count from real data', () => {
    expect(HERO_STATS[0].value).toBe(`${projects.length}+`);
  });
});
