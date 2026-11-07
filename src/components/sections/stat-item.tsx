'use client';

import styles from './stat-item.module.scss';

export interface StatItemProps {
  number: string;
  label: string;
}

export function StatItem({ number, label }: StatItemProps) {
  return (
    <div className={styles.statItem}>
      <span className={styles.statNumber}>{number}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}