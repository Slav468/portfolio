import { describe, it, expect } from 'vitest';
import { profile } from './profile';
import { experience } from './experience';
import { education } from './education';
import { skills } from './skills';
import { cvLinks } from './cv-links';
import { profileStats } from './stats';
import { contacts } from './contacts';
import { socials } from './socials';

const unique = (values: string[]) => new Set(values).size === values.length;

describe('profile', () => {
  it('has required identity fields', () => {
    expect(profile.fullName).toBe('Скоромник Сергей Николаевич');
    expect(profile.role).toBe('Frontend-разработчик');
    expect(profile.location).toBeTruthy();
    expect(profile.bio.startsWith(profile.summary)).toBe(true);
  });

  it('each experience entry has all fields', () => {
    expect(experience.length).toBeGreaterThan(0);
    experience.forEach((item) => {
      Object.values(item).forEach((value) => expect(value).toBeTruthy());
    });
  });

  it('each education entry has course and year', () => {
    expect(education.length).toBeGreaterThan(0);
    education.forEach((item) => {
      expect(item.course).toBeTruthy();
      expect(item.year).toBeGreaterThan(1990);
    });
  });

  it('each skill group has a title and non-empty items', () => {
    expect(skills.length).toBeGreaterThan(0);
    skills.forEach((group) => {
      expect(group.title).toBeTruthy();
      expect(group.items.length).toBeGreaterThan(0);
    });
  });

  it('each CV link points to a PDF in /public', () => {
    expect(cvLinks.length).toBeGreaterThan(0);
    cvLinks.forEach((link) => {
      expect(link.href).toMatch(/^\/.+\.pdf$/);
      expect(link.label).toBeTruthy();
    });
  });

  it('has stats, contacts and socials', () => {
    expect(profileStats.length).toBeGreaterThan(0);
    expect(contacts.length).toBeGreaterThan(0);
    socials.forEach((social) => expect(social.href).toMatch(/^https:\/\//));
  });

  it('has no duplicate ids within lists', () => {
    expect(unique(experience.map((i) => i.id))).toBe(true);
    expect(unique(education.map((i) => i.id))).toBe(true);
    expect(unique(skills.map((g) => g.id))).toBe(true);
    expect(unique(cvLinks.map((l) => l.href))).toBe(true);
    expect(unique(socials.map((s) => s.name))).toBe(true);
  });
});
