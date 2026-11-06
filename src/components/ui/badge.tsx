import styles from './badge.module.scss';
import { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[styles.badge, styles[variant], className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </span>
  );
}