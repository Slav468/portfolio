import { describe, it, expect } from 'vitest';
import { aboutData } from './about';
import type { AboutData, ExperienceItem, EducationItem, SkillGroup, PdfLink } from './about';

describe('aboutData', () => {
  it('has required top-level fields', () => {
    expect(aboutData.name).toBeDefined();
    expect(aboutData.role).toBeDefined();
    expect(aboutData.location).toBeDefined();
    expect(aboutData.bio).toBeDefined();
  });

  it('each experience entry has all fields defined', () => {
    aboutData.experience.forEach((exp: ExperienceItem) => {
      expect(exp.id).toBeDefined();
      expect(exp.role).toBeDefined();
      expect(exp.company).toBeDefined();
      expect(exp.period).toBeDefined();
      expect(exp.location).toBeDefined();
      expect(exp.stack).toBeDefined();
      expect(exp.description).toBeDefined();
    });
  });

  it('each education entry has all fields defined', () => {
    aboutData.education.forEach((edu: EducationItem) => {
      expect(edu.id).toBeDefined();
      expect(edu.course).toBeDefined();
      expect(edu.year).toBeDefined();
    });
  });

  it('each skill group has id, title and non-empty items', () => {
    aboutData.skills.forEach((group: SkillGroup) => {
      expect(group.id).toBeDefined();
      expect(group.title).toBeDefined();
      expect(Array.isArray(group.items)).toBe(true);
      expect(group.items.length).toBeGreaterThan(0);
    });
  });

  it('each pdf link has href and label', () => {
    aboutData.pdfLinks.forEach((link: PdfLink) => {
      expect(link.href).toBeDefined();
      expect(link.label).toBeDefined();
    });
  });

  it('has no duplicate ids within lists', () => {
    const ids = (arr: { id: string }[]) => arr.map((item) => item.id);
    expect(new Set(ids(aboutData.experience)).size).toBe(aboutData.experience.length);
    expect(new Set(ids(aboutData.education)).size).toBe(aboutData.education.length);
    expect(new Set(aboutData.skills.map((g) => g.id)).size).toBe(aboutData.skills.length);
    expect(
      new Set(aboutData.pdfLinks.map((l) => l.href)).size
    ).toBe(aboutData.pdfLinks.length);
  });

  it('matches AboutData type shape', () => {
    const data: AboutData = aboutData;
    expect(data.name).toBe('Сергей Скоромник');
    expect(data.role).toBe('Frontend Developer');
    expect(data.experience.length).toBeGreaterThan(0);
    expect(data.education.length).toBeGreaterThan(0);
    expect(data.skills.length).toBeGreaterThan(0);
    expect(data.pdfLinks.length).toBeGreaterThan(0);
  });
});
