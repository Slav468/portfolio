'use client';

import styles from './hero-content.module.scss';
import { StatItem, type StatItemProps } from './stat-item';

import { useInView } from '@/components/ui/useInView';

import GithubWhite from '@/assets/icons/skills/githubWhite.svg';

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
  description,
  ctaPrimary,
  ctaSecondary,
  stats,
}: HeroContentProps) {
  const { ref: introRef, isInView: introVisible } = useInView({ once: true });
  const { ref: ctaRef, isInView: ctaVisible } = useInView({ once: true });
  const { ref: statsRef, isInView: statsVisible } = useInView({ once: true });
  return (
    <div className={styles.content}>
      <div className={`${styles.text} reveal ${introVisible ? 'revealed' : ''}`} ref={introRef}>
        <span className={styles.kicker}>{kicker}</span>
        <h2 className={styles.title}>
          <span className={styles.accent}>{'< '}</span>
          {title}
          <span className={styles.accent}>{' />'}</span>
        </h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={`${styles.ctaGroup} reveal ${ctaVisible ? 'revealed' : ''}`} ref={ctaRef}>
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
            <span style={{ width: '20px', height: '20px' }}>
              <GithubWhite width="100%" height="100%" />
            </span>
          </a>
        )}
      </div>
      {stats && stats.length > 0 && (
        <div className={`${styles.stats} reveal ${statsVisible ? 'revealed' : ''}`} ref={statsRef}>
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
              description={stat.description}
              trend={stat.trend}
              delay={stat.delay}
            />
          ))}
        </div>
      )}
    </div>
  );
}
