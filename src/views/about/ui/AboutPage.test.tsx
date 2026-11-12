import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { cvLinks, education, experience, profile, profileStats, skills } from '@/entities/profile';
import { AboutPage } from './AboutPage';

const html = renderToStaticMarkup(<AboutPage />);

// renderToStaticMarkup экранирует спецсимволы — сравниваем с экранированным текстом
const esc = (text: string) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');

describe('AboutPage', () => {
  it('renders the page heading and profile name', () => {
    expect(html).toContain('Обо мне');
    expect(html).toContain(profile.fullName);
  });

  it('renders every experience, education and skill group', () => {
    experience.forEach((item) => expect(html).toContain(esc(item.company)));
    education.forEach((item) => expect(html).toContain(esc(item.course)));
    skills.forEach((group) => expect(html).toContain(esc(group.title)));
  });

  it('renders all stats', () => {
    profileStats.forEach((stat) => expect(html).toContain(esc(stat.label)));
  });

  it('renders CV download links that open in a new tab', () => {
    cvLinks.forEach((link) => {
      expect(html).toContain(`href="${link.href}"`);
      expect(html).toContain(esc(link.label));
    });
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it('labels each section by its heading', () => {
    ['experience-heading', 'education-heading', 'skills-heading'].forEach((id) => {
      expect(html).toContain(`id="${id}"`);
      expect(html).toContain(`aria-labelledby="${id}"`);
    });
  });
});
