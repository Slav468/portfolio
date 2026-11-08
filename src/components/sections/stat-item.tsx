'use client';

import { useEffect, useState } from 'react';
import styles from './stat-item.module.scss';

export interface StatItemProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
  trend?: { value: string; positive?: boolean };
  delay?: number;
}

export function StatItem({
  number,
  label,
  icon,
  description,
  trend,
  delay = 0,
}: StatItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <article
      className={`${styles.statItem} ${isVisible ? styles.visible : ''} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="region"
      aria-label={`${number} ${label}`}
    >
      {icon && (
        <div className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.numberWrapper}>
          <span className={styles.statNumber} data-value={number}>
            {number}
          </span>
          {trend && (
            <span className={`${styles.trend} ${trend.positive !== false ? styles.trendPositive : styles.trendNegative}`}>
              {trend.value}
            </span>
          )}
        </div>
        <span className={styles.statLabel}>{label}</span>
        {description && <span className={styles.statDescription}>{description}</span>}
      </div>
      <div className={styles.accentBar} aria-hidden="true" />
    </article>
  );
}
