'use client';

import '@/styles/main.scss';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MainContent } from '@/components/layout/MainContent';
import { getInitialTheme } from '@/hooks/useTheme';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const theme = getInitialTheme();
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <title>Портфолио</title>
      </head>
      <body className={inter?.className || ''}>
        <Header />
        <MainContent>{children}</MainContent>
        <Footer authorName="Сергей Скоромник" />
      </body>
    </html>
  );
}
