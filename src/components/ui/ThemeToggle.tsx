'use client';

import { useState, useEffect } from 'react';

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

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [mounted, setMounted] = useState(false);

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
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    // Return empty during SSR/hydration to avoid mismatch
    return (
      <button
        aria-label="Переключить тему"
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-sm)',
          cursor: 'pointer',
          color: 'var(--color-text-primary)',
          transition: 'all var(--transition-fast) ease',
        }}
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l5 9-5 9h-2V9h-3v6H5v-6H2v6H2V9H0v6h3v-6h2v-9h5z" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
      title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
      style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-sm)',
        cursor: 'pointer',
        color: 'var(--color-text-primary)',
        transition: 'all var(--transition-fast) ease',
      }}
    >
      {theme === 'dark' ? (
        <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 3l5 9-5 9h-2V9h-3v6H5v-6H2v6H2V9H0v6h3v-6h2v-9h5z" />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12a4 4 0 0 0 0-8 4 4 0 0 0 0 8z" />
          <path d="M3 9v6h18v-6H12zm5-9h2v6h-2V9zM3 3v6h2V3H3V3zM6 17H4v-6h2v6zm4 5v2h8v-2H10zm5-16h-2v6h2V3z" />
        </svg>
      )}
    </button>
  );
}
