import Link from 'next/link';
import styles from './header.module.scss';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const LOGO_SVG = (
  <svg
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 3l5 9-5 9h-2V9h-3v6H5v-6H2v6H2V9H0v6h3v-6h2v-9h5z" />
  </svg>
);

const NAV_LINKS = [
  { label: 'Обо мне', href: '/about' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Контакты', href: '/contact' },
] as const;

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoIcon}>{LOGO_SVG}</div>
            <span className={styles.logoText}>
              <span className={styles.accent}>Портфолио</span>
            </span>
          </Link>
        </div>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}