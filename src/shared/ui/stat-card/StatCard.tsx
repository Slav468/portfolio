import type { ReactNode } from 'react';
import { cx } from '@/shared/lib';
import styles from './stat-card.module.scss';

export interface StatTrend {
  value: string;
  positive?: boolean;
}

export interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  trend?: StatTrend;
  className?: string;
}

/** Карточка показателя («10+ Проектов»). Появление анимируется снаружи через <Reveal>. */
export function StatCard({ value, label, description, icon, trend, className }: StatCardProps) {
  return (
    <article className={cx(styles.card, className)}>
      {icon && (
        <div className={styles.icon} aria-hidden="true">
          {icon}
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.valueRow}>
          <span className={styles.value}>{value}</span>
          {trend && (
            <span className={cx(styles.trend, trend.positive === false && styles.trendNegative)}>
              {trend.value}
            </span>
          )}
        </div>
        <span className={styles.label}>{label}</span>
        {description && <span className={styles.description}>{description}</span>}
      </div>
      <div className={styles.bar} aria-hidden="true" />
    </article>
  );
}
