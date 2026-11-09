export function getInitialTheme(): 'light' | 'dark' {
  try {
    const stored = sessionStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // ignore
  }
  if (typeof window !== 'undefined') {
    const m = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDark = m.matches;
    return prefersDark ? 'dark' : 'light';
  }
  return 'light';
}
