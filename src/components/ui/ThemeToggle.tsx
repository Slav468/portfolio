'use client';

import { useState, useEffect } from 'react';
import styles from './theme-toggle.module.scss';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';

  try {
    const stored = sessionStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // sessionStorage unavailable
  }

  // Fallback to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [mounted, setMounted] = useState(false);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply theme to <html> on mount and change
  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;
    html.setAttribute('data-theme', theme);

    // Persist to sessionStorage
    try {
      sessionStorage.setItem('theme', theme);
    } catch {
      // Ignore if sessionStorage unavailable
    }
  }, [theme, mounted]);

  // Listen for system preference changes (only when no explicit user choice)
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't made explicit choice this session
      try {
        const hasExplicitChoice = sessionStorage.getItem('theme') !== null;
        if (!hasExplicitChoice) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      } catch {
        // Ignore
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted]);

  const toggleTheme = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 400);
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  if (!mounted) {
    // Return empty during SSR/hydration to avoid mismatch
    return (
      <button
        aria-label="Переключить тему"
        className={styles.themeToggleHidden}
        type="button"
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l5 9-5 9h-2V9h-3v6H5v-6H2v6H2V9H0v6h3v-6h2v-9h5z" />
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
    );
  }

  const isDark = theme === 'dark';
  // Показываем иконку той темы, на которую переключимся
  const Icon = isDark ? SunIcon : MoonIcon;
  const title = isDark ? 'Светлая тема' : 'Тёмная тема';
  const label = isDark ? 'Светлая тема' : 'Тёмная тема';

  return (
    <button
      onClick={toggleTheme}
      aria-label={label}
      title={title}
      className={[styles.themeToggle, spinning && `${styles.themeToggle}--spinning`].filter(Boolean).join(' ')}
      type="button"
    >
      <Icon />
    </button>
  );
}
