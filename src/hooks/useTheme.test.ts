import { describe, it, expect } from 'vitest';
import { getInitialTheme } from './useTheme';

describe('getInitialTheme', () => {
  it('returns "light" when no theme stored', () => {
    // Ensure no theme is stored
    delete (globalThis as any).sessionStorage?.item('theme');
    const theme = getInitialTheme();
    expect(theme).toBe('light');
  });

  it('returns "dark" when system prefers dark', async () => {
    // Override matchMedia to return true for dark query
    (globalThis as any).window.matchMedia = (query: string) =>
      query === '(prefers-color-scheme: dark)' ? true : false;
    const theme = getInitialTheme();
    expect(theme).toBe('dark');
    // Restore original matchMedia
    (globalThis as any).window.matchMedia = window.matchMedia;
  });
});
