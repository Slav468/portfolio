import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getInitialTheme } from './useTheme';

describe('getInitialTheme', () => {
  const originalMatchMedia = globalThis.window?.matchMedia;

  beforeEach(() => {
    // Mock matchMedia
    globalThis.window = globalThis.window || {} as any;
    globalThis.window.matchMedia = vi.fn().mockReturnValue({ matches: false });

    // Create a mock sessionStorage
    const mockSessionStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    };

    // Use vi.stubGlobal to replace sessionStorage
    vi.stubGlobal('sessionStorage', mockSessionStorage);
  });

  afterEach(() => {
    if (originalMatchMedia) {
      globalThis.window.matchMedia = originalMatchMedia;
    }
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('returns "light" when no theme stored', () => {
    const mockSessionStorage = globalThis.sessionStorage as any;
    mockSessionStorage.getItem.mockReturnValue(null);
    (globalThis.window.matchMedia as any).mockReturnValue({ matches: false });
    const theme = getInitialTheme();
    expect(theme).toBe('light');
  });

  it('returns stored theme from sessionStorage', () => {
    const mockSessionStorage = globalThis.sessionStorage as any;
    mockSessionStorage.getItem.mockReturnValue('dark');
    const theme = getInitialTheme();
    expect(theme).toBe('dark');
  });

  it('returns "dark" when system prefers dark and no stored theme', () => {
    const mockSessionStorage = globalThis.sessionStorage as any;
    mockSessionStorage.getItem.mockReturnValue(null);
    (globalThis.window.matchMedia as any).mockReturnValue({ matches: true });
    const theme = getInitialTheme();
    expect(theme).toBe('dark');
  });

  it('returns "light" when system prefers light and no stored theme', () => {
    const mockSessionStorage = globalThis.sessionStorage as any;
    mockSessionStorage.getItem.mockReturnValue(null);
    (globalThis.window.matchMedia as any).mockReturnValue({ matches: false });
    const theme = getInitialTheme();
    expect(theme).toBe('light');
  });
});
