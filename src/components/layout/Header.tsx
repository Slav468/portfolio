'use client';

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

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburgerMenu');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      setMenuOpen(!menuOpen);
    });
  }

  // Scroll hide header
  useEffect(() => {
    if (typeof window === 'undefined') return;
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

  // Stagger entrance
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

  return (
    <header
      className={[
        styles.header,
        entering && styles.headerEntering,
        hidden && styles.headerHidden,
        menuOpen && styles.menuOpen,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoIcon} />
          </Link>
        </div>

        {menuOpen ? (
          <ul className={styles.mobileMenu}>
            <li><a href="/about" class="navLink">Обо мне</a></li>
            <li><a href="/projects" class="navLink">Проекты</a></li>
            <li><a href="/contact" class="navLink">Контакты</a></li>
          </ul>
        ) : (
          <nav
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
                key={link.label}
                href={link.href}
                className={styles.navLink}
                aria-current={link.href === pathname ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className={styles.themeToggleEntering}>{ThemeToggle}</div>
      </div>
    </header>
  );
}
