import type { CSSProperties, ReactNode } from 'react';
import { cx } from '@/shared/lib';
import styles from './icon-slot.module.scss';

export interface IconSlotProps {
  /** Любая CSS-длина: '1rem', '18px', '1.25em' */
  size?: string;
  /** Для одноцветных брендовых SVG: заливка берётся из currentColor */
  brand?: boolean;
  className?: string;
  children: ReactNode;
}

/** Декоративная обёртка фиксированного размера для SVG-иконок. */
export function IconSlot({ size = '1.25em', brand = false, className, children }: IconSlotProps) {
  return (
    <span
      className={cx(styles.slot, brand && styles.brand, className)}
      style={{ '--icon-size': size } as CSSProperties}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
