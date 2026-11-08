import { describe, it, expect } from 'vitest';
import { getInitialTheme } from './useTheme';

describe('getInitialTheme', () => {
  it('returns "light" when no sessionStorage and no system preference', () => {
    // Ensure no theme is stored
    delete (globalThis as any).sessionStorage?.item('theme');
    const theme = getInitialTheme();
    expect(theme).toBe('light');
  });

  it('returns "dark" when system prefers dark', async () => {
    // Save default light first
    (globalThis as any).sessionStorage.setItem('theme', 'light');
    // Mock matchMedia: return true for dark query
    (globalThis as any).window.matchMedia = (query: string) => {
      if (query === '(prefers-color-scheme: dark)') return true;
      return false;
    };
    const theme = getInitialTheme();
    expect(theme).toBe('dark');
    // Restore original matchMedia
    (globalThis as any).window.matchMedia = window.matchMedia;
    // Remove saved theme
    (globalThis as any).sessionStorage.removeItem('theme');
  });
});
