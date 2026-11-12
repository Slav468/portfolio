import type { ReactNode } from 'react';
import {
  BackgroundBlobs,
  BookOpenIcon,
  ButtonLink,
  ClockIcon,
  CodeIcon,
  FloatingIcons,
  IconSlot,
  Reveal,
  ShieldCheckIcon,
  StatCard,
  TechIcon,
} from '@/shared/ui';
import { HERO_CONTENT, HERO_STATS, HERO_TECH, type HeroStatIcon } from '../model/hero-content';
import styles from './hero-section.module.scss';

import GithubIcon from '@/shared/assets/icons/tech/github.svg';

const STAT_ICONS: Record<HeroStatIcon, ReactNode> = {
  projects: <BookOpenIcon />,
  years: <ClockIcon />,
  tech: <CodeIcon />,
  quality: <ShieldCheckIcon />,
};

const STAT_STAGGER_MS = 150;

export function HeroSection() {
  const { kicker, title, description, primaryCta, githubCta } = HERO_CONTENT;

  return (
    <>
      <section className={styles.section} aria-labelledby="hero-title">
        <BackgroundBlobs count={2} />
        <div className={styles.glass} aria-hidden="true" />
        <FloatingIcons
          items={HERO_TECH.map((name) => (
            <TechIcon key={name} name={name} size="100%" />
          ))}
        />

        <div className={styles.content}>
          <Reveal className={styles.text}>
            <span className={styles.kicker}>{kicker}</span>
            <h1 id="hero-title" className={styles.title}>
              <span className={styles.accent}>{'< '}</span>
              {title}
              <span className={styles.accent}>{' />'}</span>
            </h1>
            <p className={styles.description}>{description}</p>
          </Reveal>

          <Reveal delay={100} className={styles.cta}>
            <ButtonLink href={primaryCta.href} size="lg">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={githubCta.href} variant="secondary" size="lg">
              {githubCta.label}
              <IconSlot size="1.25rem" brand>
                <GithubIcon />
              </IconSlot>
            </ButtonLink>
          </Reveal>

          <div className={styles.stats}>
            {HERO_STATS.map((stat, index) => (
              <Reveal key={stat.label} delay={index * STAT_STAGGER_MS}>
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  description={stat.description}
                  icon={STAT_ICONS[stat.icon]}
                  trend={stat.trend}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
