'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/features/theme-toggle';
import { ROUTES } from '@/shared/config';
import { cx } from '@/shared/lib';
import { CodeIcon } from '@/shared/ui';
import { useEscapeKey, useHideOnScroll, useScrollLock } from '@/shared/lib/hooks';
import { NAV_LINKS, isActiveLink } from '../model/nav-links';
import styles from './header.module.scss';

export function Header() {
  const pathname = usePathname();
  const hiddenByScroll = useHideOnScroll();

  // Меню закрывается при смене страницы: запоминаем путь, для которого оно открыто
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const menuOpen = openedAt === pathname;
  const closeMenu = useCallback(() => setOpenedAt(null), []);

  useScrollLock(menuOpen);
  useEscapeKey(menuOpen, closeMenu);

  return (
    <header className={cx(styles.header, hiddenByScroll && !menuOpen && styles.hidden)}>
      <div className={styles.wrapper}>
        <Link href={ROUTES.home} className={styles.logoLink} aria-label="На главную">
          <span className={styles.logoIcon}>
            <CodeIcon />
          </span>
        </Link>

        <nav
          id="main-nav"
          aria-label="Основная навигация"
          className={cx(styles.nav, menuOpen && styles.navOpen)}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              aria-current={isActiveLink(pathname, link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            type="button"
            className={cx(styles.hamburger, menuOpen && styles.hamburgerOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpenedAt(menuOpen ? null : pathname)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
