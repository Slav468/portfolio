'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Обо мне', href: '/about' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Контакты', href: '/contact' },
] as const;

const HIDE_THRESHOLD = 60; // скролл ниже этого значения — хедер не прячем

export function Header() {
  const pathname = usePathname();
  const [entering, setEntering] = useState(true);
  const [navVisible, setNavVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Закрывать меню при смене страницы
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Скрытие хедера при скролле
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const isScrollingDown = currentScrollY > lastScrollY.current;
        setHidden(isScrollingDown && currentScrollY > HIDE_THRESHOLD);
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Анимация появления
  useEffect(() => {
    const t1 = setTimeout(() => setNavVisible(true), 220);
    // с запасом относительно длины slideIn (0.6s)
    const t2 = setTimeout(() => setEntering(false), 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <header
      className={[
        styles.header,
        entering && styles.headerEntering,
        hidden && !menuOpen && styles.headerHidden,
        menuOpen && styles.menuOpen,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink} aria-label="На главную">
            <div className={styles.logoIcon} />
          </Link>
        </div>

        <nav
          id="main-nav"
          className={[
            styles.nav,
            navVisible && styles.navEntering,
            menuOpen && styles.navMobileOpen,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              aria-current={link.href === pathname ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.themeToggleEntering}>
            <ThemeToggle />
          </div>

          <button
            type="button"
            className={styles.hamburger}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setMenuOpen((prev) => !prev)}
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
