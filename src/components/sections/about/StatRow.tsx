'use client';

import styles from './StatRow.module.scss';
import { StatItem } from '@/components/sections/stat-item';
import type { Stat } from '@/data/about';

export interface StatRowProps {
  stats: Stat[];
}

export function StatRow({ stats }: StatRowProps) {
  return (
    <div className={styles.row}>
      {stats.map((stat, i) => (
        <StatItem key={stat.label} number={stat.number} label={stat.label} description={stat.description} delay={i * 0.08} />
      ))}
    </div>
  );
}