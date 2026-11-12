import type { HTMLAttributes } from 'react';
import { cx } from '@/shared/lib';
import styles from './card.module.scss';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'div' | 'article' | 'section' | 'li';
  /** glass — лёгкое стекло (списки), panel — парящая панель, plain — сплошная поверхность */
  variant?: 'glass' | 'panel' | 'plain';
  /** Акцентная полоса слева */
  accent?: boolean;
  /** Реакция на наведение (подъём / свечение) */
  interactive?: boolean;
}

export function Card({
  as: Component = 'div',
  variant = 'glass',
  accent = false,
  interactive = false,
  className,
  ...props
}: CardProps) {
  return (
    <Component
      className={cx(
        styles.card,
        styles[variant],
        accent && styles.accent,
        interactive && styles.interactive,
        className
      )}
      {...props}
    />
  );
}
