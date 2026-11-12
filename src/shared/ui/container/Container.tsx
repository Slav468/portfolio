import type { HTMLAttributes } from 'react';
import { cx } from '@/shared/lib';
import styles from './container.module.scss';

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx(styles.container, className)} {...props} />;
}
