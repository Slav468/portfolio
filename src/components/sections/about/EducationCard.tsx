'use client';

import styles from './EducationCard.module.scss';
import { GraduationIcon } from './icons';
import type { EducationItem } from '@/data/about';

export interface EducationCardProps {
  edu: EducationItem;
}

export function EducationCard({ edu }: EducationCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.iconWrap} aria-hidden="true"><GraduationIcon /></span>
      <div className={styles.content}>
        <h3 className={styles.title}>{edu.course}</h3>
        <p className={styles.year}>{edu.year}</p>
      </div>
    </article>
  );
}