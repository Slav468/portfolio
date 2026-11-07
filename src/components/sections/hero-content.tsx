'use client';

import React from 'react';
import styles from './hero-content.module.scss';
import { StatItem } from './stat-item';

export interface StatItemProps {
  number: string;
  label: string;
}

export interface HeroContentProps {
  kicker: string;
  title: string;
  accent?: string;
  description: string;
  ctaPrimary: { label: string; href: string; rel?: string };
  ctaSecondary?: { label: string; href: string; target?: string };
  stats?: StatItemProps[];
}

export function HeroContent({
  kicker,
  title,
  accent = '•',
  description,
  ctaPrimary,
  ctaSecondary,
  stats,
}: HeroContentProps) {
  return (
    <div className={styles.content}>
      <span className={styles.kicker}>{kicker}</span>
      <h2 className={styles.title}>
        {title} <span className={styles.accent}>{accent}</span>
      </h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.ctaGroup}>
        <a
          href={ctaPrimary.href}
          rel={ctaPrimary.rel ?? 'noopener noreferrer'}
          className={styles.ctaPrimary}
        >
          {ctaPrimary.label}
        </a>
        {ctaSecondary && (
          <a
            href={ctaSecondary.href}
            target={ctaSecondary.target ?? '_blank'}
            className={styles.ctaSecondary}
          >
            {ctaSecondary.label}
          </a>
        )}
      </div>
      {stats && stats.length > 0 && (
        <div className={styles.stats}>
          {stats.map((stat, i) => (
            <StatItem key={i} number={stat.number} label={stat.label} />
          ))}
        </div>
      )}
    </div>
  );
}
