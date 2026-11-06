'use client';

import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<string>('dark');

  // применяем тему к <html>
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    html.classList.remove('light', 'dark');
    html.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

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
        borderRadius: '8px',
        padding: '8px',
        cursor: 'pointer',
        color: 'var(--color-text-primary)',
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
