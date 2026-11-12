'use client';

import type { CSSProperties, HTMLAttributes } from 'react';
import { cx } from '@/shared/lib';
import { useInView } from '@/shared/lib/hooks';
import styles from './reveal.module.scss';

export interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  /** Задержка появления, мс (для каскада в сетках/списках) */
  delay?: number;
  once?: boolean;
  threshold?: number;
}

/**
 * Плавное появление блока при попадании в область просмотра.
 * Единственная реализация reveal-анимации в проекте.
 */
export function Reveal({
  delay = 0,
  once = true,
  threshold = 0.1,
  className,
  style,
  ...props
}: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ once, threshold });

  return (
    <div
      ref={ref}
      className={cx(styles.reveal, isInView && styles.revealed, className)}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
      {...props}
    />
  );
}
