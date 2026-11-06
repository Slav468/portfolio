import { useMemo } from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Обо мне', href: '/about' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Контакты', href: '/contact' },
] as const;

export function Footer({ authorName }: { authorName?: string }) {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {currentYear} {authorName ?? 'Имя Фамилии'}. Все права защищены.
          </p>
          <nav>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm hover:text-[var(--color-accent-cyan)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}