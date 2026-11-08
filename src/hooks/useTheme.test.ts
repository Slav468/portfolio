import { describe, it, expect } from 'vitest';
import { getInitialTheme } from './useTheme';

describe('getInitialTheme', () => {
  it('returns "light" when no sessionStorage and no system preference', () => {
    // Remove any existing theme storage
    delete (globalThis as any).sessionStorage?.item('theme');
    const theme = getInitialTheme();
    expect(theme).toBe('light');
  });

  it('returns "dark" when system prefers dark', async () => {
    // Save default to light first
    (globalThis as any).sessionStorage.setItem('theme', 'light');
    const originalMatchMedia = (globalThis as any).window.matchMedia;
    (globalThis as any).window.matchMedia = (query: string) => {
      if (query === '(prefers-color-scheme: dark)') return true;
      return false;
    };
    const theme = getInitialTheme();
    expect(theme).toBe('dark');
    (globalThis as any).window.matchMedia = originalMatchMedia;
    (globalThis as any).sessionStorage.removeItem('theme');
  });
});
