import '../styles/globals.scss';
import { Inter } from 'next/font/google';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Портфолио',
  description: 'Портфолио фронтенд-разработчика',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      data-theme="dark"
      className={inter?.className || ''}
    >
      <body className={inter?.className || ''}>
        <header className="bg-[var(--color-bg-surface)] border-b border-[var(--color-border)]">
          <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center gap-2 text-xl font-bold tracking-wider text-[var(--color-text-primary)] no-underline">
                <span className="text-[var(--color-accent-cyan)]">Портфолио</span>
              </a>
              <div className="w-8 h-8 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 3l5 9-5 9h-2V9h-3v6H5v-6H2v6H2V9H0v6h3v-6h2v-9h5z" />
                </svg>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <main className="py-12">
          {children}
        </main>

        <footer className="bg-[var(--color-bg-surface)] border-t border-[var(--color-border)] py-12">
          <div className="max-w-2xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Имя Фамилии. Все права защищены.
              </p>
              <nav className="flex justify-center gap-6">
                <a href="#about" className="hover:text-[var(--color-accent-cyan)]">Обо мне</a>
                <a href="#projects" className="hover:text-[var(--color-accent-cyan)]">Проекты</a>
                <a href="#contact" className="hover:text-[var(--color-accent-cyan)]">Контакты</a>
            </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
