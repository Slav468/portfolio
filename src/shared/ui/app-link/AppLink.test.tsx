import { describe, it, expect, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import type { ReactNode } from 'react';
import { AppLink } from './AppLink';

// next/link требует контекст роутера — подменяем обычным якорем
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode }) => (
    <a data-next-link="" href={href} {...rest}>
      {children}
    </a>
  ),
}));

const render = (href: string, props = {}) =>
  renderToStaticMarkup(
    <AppLink href={href} {...props}>
      link
    </AppLink>
  );

describe('AppLink', () => {
  it('uses next/link for internal routes', () => {
    const html = render('/about');
    expect(html).toContain('data-next-link');
    expect(html).not.toContain('target=');
  });

  it('opens external URLs in a new tab safely', () => {
    const html = render('https://github.com/user');
    expect(html).not.toContain('data-next-link');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it('treats files (PDF) as plain anchors in a new tab', () => {
    const html = render('/cv.pdf');
    expect(html).not.toContain('data-next-link');
    expect(html).toContain('target="_blank"');
  });

  it('keeps mailto and tel in the same tab', () => {
    expect(render('mailto:a@b.c')).not.toContain('target=');
    expect(render('tel:+375291112233')).not.toContain('target=');
  });

  it('respects an explicit newTab override', () => {
    expect(render('https://example.com', { newTab: false })).not.toContain('target=');
  });
});
