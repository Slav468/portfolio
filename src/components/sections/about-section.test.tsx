import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import type { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { aboutData } from '@/data/about';

// IntersectionObserver недоступен в jsdom — мокаем хук reveal-анимации.
vi.mock('@/components/ui/useInView', () => ({
  useInView: () => ({ ref: () => {}, isInView: true }),
}));

// next/link требует роутер Next.js — мокаем ExternalLink простым якорем.
vi.mock('@/components/ui/link', () => ({
  ExternalLink: ({ href, children }: { href: string; children: ReactNode }) => (
    <a data-testid="external-link" href={href}>{children}</a>
  ),
}));

// vite/vitest импортирует SVG как data-URL строку, а не как React-компонент
// (в продакшене Next.js + @svgr/webpack они компоненты). Мокаем все иконки навыков.
vi.mock('@/assets/icons/skills/css3.svg', () => ({
  default: () => <svg data-testid="skill-icon" aria-hidden="true" width="18" height="18" />,
}));
vi.mock('@/assets/icons/skills/figma.svg', () => ({
  default: () => <svg data-testid="skill-icon" aria-hidden="true" width="18" height="18" />,
}));
vi.mock('@/assets/icons/skills/git.svg', () => ({
  default: () => <svg data-testid="skill-icon" aria-hidden="true" width="18" height="18" />,
}));
vi.mock('@/assets/icons/skills/github.svg', () => ({
  default: () => <svg data-testid="skill-icon" aria-hidden="true" width="18" height="18" />,
}));
vi.mock('@/assets/icons/skills/html5.svg', () => ({
  default: () => <svg data-testid="skill-icon" aria-hidden="true" width="18" height="18" />,
}));
vi.mock('@/assets/icons/skills/javascript.svg', () => ({
  default: () => <svg data-testid="skill-icon" aria-hidden="true" width="18" height="18" />,
}));
vi.mock('@/assets/icons/skills/jquery.svg', () => ({
  default: () => <svg data-testid="skill-icon" aria-hidden="true" width="18" height="18" />,
}));
vi.mock('@/assets/icons/skills/nextjs.svg', () => ({
  default: () => <svg data-testid="skill-icon" aria-hidden="true" width="18" height="18" />,
}));
vi.mock('@/assets/icons/skills/react.svg', () => ({
  default: () => <svg data-testid="skill-icon" aria-hidden="true" width="18" height="18" />,
}));
vi.mock('@/assets/icons/skills/sass.svg', () => ({
  default: () => <svg data-testid="skill-icon" aria-hidden="true" width="18" height="18" />,
}));
vi.mock('@/assets/icons/skills/typescript.svg', () => ({
  default: () => <svg data-testid="skill-icon" aria-hidden="true" width="18" height="18" />,
}));
vi.mock('@/assets/icons/skills/vite.svg', () => ({
  default: () => <svg data-testid="skill-icon" aria-hidden="true" width="18" height="18" />,
}));

import { AboutSection } from './about-section';

describe('AboutSection', () => {
  let container: HTMLElement;
  let root: ReturnType<typeof createRoot>;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    root.unmount();
    document.body.removeChild(container);
  });

  it('renders name, role, location and section title', () => {
    act(() => {
      root.render(<AboutSection about={aboutData} />);
    });
    expect(container.textContent).toContain('Сергей Скоромник');
    expect(container.textContent).toContain(aboutData.role);
    expect(container.textContent).toContain(aboutData.location);
    expect(container.textContent).toContain('Обо мне');
  });

  it('renders bio text', () => {
    act(() => {
      root.render(<AboutSection about={aboutData} />);
    });
    expect(container.textContent).toContain(aboutData.bio);
  });

  it('renders all experience entries with stable keys', () => {
    act(() => {
      root.render(<AboutSection about={aboutData} />);
    });
    aboutData.experience.forEach((exp) => {
      expect(container.textContent).toContain(exp.role);
      expect(container.textContent).toContain(exp.company);
      expect(container.textContent).toContain(exp.stack);
      expect(container.textContent).toContain(exp.description);
    });
  });

  it('renders all education entries', () => {
    act(() => {
      root.render(<AboutSection about={aboutData} />);
    });
    aboutData.education.forEach((edu) => {
      expect(container.textContent).toContain(edu.course);
      expect(container.textContent).toContain(String(edu.year));
    });
  });

  it('renders all skill groups with their items and icons', () => {
    act(() => {
      root.render(<AboutSection about={aboutData} />);
    });
    aboutData.skills.forEach((group) => {
      expect(container.textContent).toContain(group.title);
      group.items.forEach((item) => {
        expect(container.textContent).toContain(item);
      });
    });
    expect(container.querySelectorAll('[data-testid="skill-icon"]').length).toBeGreaterThan(0);
  });

  it('renders stat cards', () => {
    act(() => {
      root.render(<AboutSection about={aboutData} />);
    });
    aboutData.stats.forEach((stat) => {
      expect(container.textContent).toContain(stat.number);
      expect(container.textContent).toContain(stat.label);
    });
  });

  it('renders pdf links with correct href and label', () => {
    act(() => {
      root.render(<AboutSection about={aboutData} />);
    });
    aboutData.pdfLinks.forEach((link) => {
      const anchor = container.querySelector<HTMLAnchorElement>(
        `a[href="${link.href}"]`
      );
      expect(anchor).not.toBeNull();
      expect(anchor?.textContent).toContain(link.label);
    });
  });
});
