import type { CSSProperties } from 'react';
import { cx } from '@/shared/lib';
import styles from './background-blobs.module.scss';

const BLOBS = [
  { size: 70, top: -20, left: -20, duration: 14, color: 'cyan' },
  { size: 50, top: 10, left: 70, duration: 18, color: 'purple' },
  { size: 40, top: 65, left: 5, duration: 22, color: 'emerald' },
] as const;

export interface BackgroundBlobsProps {
  /** Сколько декоративных пятен показать (1–3) */
  count?: number;
}

/** Декоративный размытый фон. Размеры и позиции — в % от родителя (родитель: position: relative). */
export function BackgroundBlobs({ count = 2 }: BackgroundBlobsProps) {
  return (
    <div className={styles.blobs} aria-hidden="true">
      {BLOBS.slice(0, count).map((blob) => (
        <div
          key={blob.color}
          className={cx(styles.blob, styles[blob.color])}
          style={
            {
              width: `${blob.size}%`,
              top: `${blob.top}%`,
              left: `${blob.left}%`,
              '--blob-duration': `${blob.duration}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
