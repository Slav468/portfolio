'use client';

import Link from 'next/link';
import styles from './Breadcrumb.module.scss';

interface BreadcrumbProps {
  breadcrumbs: { label: string; href: string }[];
  current: string;
}

export function Breadcrumb({ breadcrumbs, current }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb} aria-label="Навигация">
      {breadcrumbs.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className={styles.breadcrumbLink}
        >
          {item.label}
        </Link>
      ))}
      <span className={styles.separator}>/</span>
      <span className={styles.current}>{current}</span>
    </nav>
  );
}