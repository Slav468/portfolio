"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { usePathname } from 'next/navigation';

const LOGO_SVG = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Портфолио"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12a4 4 0 0 1 4-4" />
    <path d="M16 12a4 4 0 0 1-4 4" />
  </svg>
);

const NAV_LINKS = [
  { label: 'Обо мне', href: '/about' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Контакты', href: '/contact' },
] as const;

const HIDE_THRESHOLD = 60; // скролл ниже этого значения — хедер не прячем

export function Header() {
  const pathname = usePathname();
  const [entering, setEntering] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [toggleVisible, setToggleVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Снимаем класс входа после окончания анимации, чтобы не влиять на производительность
  useEffect(() => {
    const timer = setTimeout(() => setEntering(false), 650);
    return () => clearTimeout(timer);
  }, []);

  // Stagger-появление элементов хедера ( continuity )
  useEffect(() => {
    const t1 = setTimeout(() => setLogoVisible(true), 100);
    const t2 = setTimeout(() => setNavVisible(true), 220);
    const t3 = setTimeout(() => setToggleVisible(true), 340);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Скрытие хедера при скролле вниз, показ — при скролле вверх
  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const isScrollingDown = currentScrollY > lastScrollY.current;
          const isBelowThreshold = currentScrollY > HIDE_THRESHOLD;

          if (isScrollingDown && isBelowThreshold) {
            setHidden(true);
          } else {
            setHidden(false);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        styles.header,
        entering && styles.headerEntering,
        hidden && styles.headerHidden,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <div
              className={[
                styles.logoIcon,
                styles.logoGlow,
                logoVisible && styles.logoEntering,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {LOGO_SVG}
            </div>
            <span
              className={[
                styles.logoText,
                logoVisible && styles.logoEntering,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <span className={styles.accent}>Портфолио</span>
            </span>
          </Link>
        </div>

        <nav
          className={[
            styles.nav,
            navVisible && styles.navEntering,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.navLink}
              aria-current={link.href === pathname ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          className={[
            toggleVisible && styles.themeToggleEntering,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
