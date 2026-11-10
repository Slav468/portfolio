'use client';

import styles from './ExperienceCard.module.scss';
import { BriefcaseIcon } from './icons';
import type { ExperienceItem } from '@/data/about';

export interface ExperienceCardProps {
  exp: ExperienceItem;
}

export function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.roleGroup}>
          <span className={styles.role}>{exp.role}</span>
          <span className={styles.period}>{exp.period}</span>
        </div>
        <span className={styles.iconWrap} aria-hidden="true"><BriefcaseIcon /></span>
      </div>
      <p className={styles.company}>{exp.company}</p>
      <p className={styles.location}>{exp.location}</p>
      <p className={styles.stack}><span className={styles.stackLabel}>Стек:</span> {exp.stack}</p>
      <p className={styles.desc}>{exp.description}</p>
    </article>
  );
}