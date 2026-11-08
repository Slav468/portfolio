import { describe, it, beforeEach, afterEach } from 'vitest';
import { getInitialTheme } from './useTheme';

beforeEach(() => {
  (globalThis as any).window = {};
});

afterEach(() => {
  delete (globalThis as any).window;
});

describe('getInitialTheme', () => {
  it('returns "light" when no sessionStorage and no system preference', () => {
    const theme = getInitialTheme();
    expect(theme).toBe('light');
  });

  it('returns "dark" when system prefers dark', () => {
    const originalMatchMedia = (globalThis as any).window.matchMedia;
    (globalThis as any).window.matchMedia = (query: string) => new Promise<string>((resolve) => {
      if (query === '(prefers-color-scheme: dark)') {
        resolve(true);
      } else {
        resolve(false);
      }
    });
    const theme = getInitialTheme();
    expect(theme).toBe('dark');
    (globalThis as any).window.matchMedia = originalMatchMedia;
  });
});
