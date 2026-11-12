import { Inter, JetBrains_Mono } from 'next/font/google';

// Значения подставляются в --font-sans / --font-mono (см. shared/styles/_tokens.scss)
export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-jetbrains',
});
