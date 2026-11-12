import type { HTMLAttributes } from 'react';
import { cx } from '@/shared/lib';
import styles from './section-heading.module.scss';

export interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h2' | 'h3';
}

export function SectionHeading({ as: Tag = 'h2', className, ...props }: SectionHeadingProps) {
  return <Tag className={cx(styles.heading, className)} {...props} />;
}
