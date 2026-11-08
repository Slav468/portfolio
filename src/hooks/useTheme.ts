import { useState } from 'react';

export function getInitialTheme(): 'light' | 'dark' {
  try {
    const stored = sessionStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // ignore
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
