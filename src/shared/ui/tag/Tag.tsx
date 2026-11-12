import type { ReactNode } from 'react';
import { cx } from '@/shared/lib';
import styles from './tag.module.scss';

export interface TagProps {
  as?: 'span' | 'li';
  /** outline — чип навыка/стека, accent — акцентная рамка, solid — залитый бейдж */
  variant?: 'outline' | 'accent' | 'solid';
  size?: 'sm' | 'md';
  className?: string;
  children: ReactNode;
}

export function Tag({
  as: Component = 'span',
  variant = 'outline',
  size = 'md',
  className,
  children,
}: TagProps) {
  return <Component className={cx(styles.tag, styles[variant], styles[size], className)}>{children}</Component>;
}
