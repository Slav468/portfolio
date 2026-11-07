import '@/styles/main.scss';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MainContent } from '@/components/layout/MainContent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Портфолио',
  description: 'Портфолио фронтенд-разработчика',
};

// Inline script to set theme BEFORE first paint - prevents flash
// Reads from sessionStorage, falls back to system preference
// Uses ONLY data-theme - no classList (convention: theming via data attribute)
function ThemeInitializer() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var stored = sessionStorage.getItem('theme');
              var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {
              // Fallback if sessionStorage unavailable
              var theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              document.documentElement.setAttribute('data-theme', theme);
            }
          })();
        `,
      }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="dark">
      <head>
        <ThemeInitializer />
      </head>
      <body className={inter?.className || ''}>
        <Header />
        <MainContent>{children}</MainContent>
        <Footer authorName="Сергей Скоромник" />
      </body>
    </html>
  );
}
