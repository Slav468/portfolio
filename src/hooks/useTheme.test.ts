import { describe, it, expect } from 'vitest';
import { getInitialTheme } from './useTheme';

describe('getInitialTheme', () => {
  it('returns \"light\" when no sessionStorage and no system preference', () => {
    // In jsdom, matchMedia returns false initially
    const theme = getInitialTheme();
    expect(theme).toBe('light');
  });

  it('returns \"dark\" when system prefers dark', () => {
    // Simulate matchMedia returning true
    const originalMatchMedia = window.matchMedia;
    (window as any).matchMedia = (query: string) => new Promise<string>((resolve) => {
      if (query === '(prefers-color-scheme: dark)') {
        resolve(true);
      } else {
        resolve(false);
      }
    }));
    const theme = getInitialTheme();
    expect(theme).toBe('dark');
    (window as any).matchMedia = originalMatchMedia;
  });
});
