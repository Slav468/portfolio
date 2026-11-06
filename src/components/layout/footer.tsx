import { useMemo } from 'react';

const NAV_LINKS = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contact' },
] as const;

export function Footer({ authorName }: { authorName?: string }) {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-[var(--color-bg-surface)] border-t border-[var(--color-border)] py-12 mt-auto">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {authorName ?? 'Имя Фамилии'}. Все права защищены.
          </p>
          <nav className="flex justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm hover:text-[var(--color-accent-cyan)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}